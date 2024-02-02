import type { ListProduct } from "~/types/api-schema";

export interface IcartProduct {
  quantity_product: number;
  product: ListProduct;
}
interface CartListResponse {
  id: number;
  total_price: number;
  cart_item: {
    quantity_product: number;
    sum_products: number;
    product: ListProduct;
  }[];
}
const localName = "cart";
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: [] as IcartProduct[],
      selectedProducts: [] as IcartProduct[],
      totalPrice: 0 as number,
      totalDiscount: "",
    };
  },
  actions: {
    async addTocart(product: ListProduct, quantity: number = 1) {
      const item = this.cart.find((el) => el.product.id === product.id);
      if (item) {
        this.cart = this.cart.map((el) => {
          if (el.product.id === item.product.id) {
            return { ...el, quantity_product: el.quantity_product + quantity };
          }
          return el;
        });
      } else {
        this.cart.push({ product, quantity_product: quantity });
      }

      await this.fetchCartAdd();
      await this.setCart();
      localStorage.setItem(localName, JSON.stringify(this.cart));
    },
    async removeFromcart(item: ListProduct) {
      this.cart = this.cart.filter((el) => el.product.id !== item.id);
      const cartId = useCookie("cartId");
      await this.fetchCartAdd();

      await this.setCart();
      this.setTotalDiscount();
      localStorage.setItem(localName, JSON.stringify(this.cart));
    },
    async increaseQuantity(index: number) {
      this.cart[index].quantity_product = this.cart[index].quantity_product + 1;
      await this.fetchCartAdd();
      await this.setCart();
      this.setTotalDiscount();
      localStorage.setItem(localName, JSON.stringify(this.cart));
    },
    async decreaseQuantity(index: number) {
      this.cart[index].quantity_product = this.cart[index].quantity_product - 1;
      await this.fetchCartAdd();
      await this.setCart();
      this.setTotalDiscount();
      localStorage.setItem(localName, JSON.stringify(this.cart));
    },
    async setCart() {
      const { data, status, execute } =
        await useAuthFetch<CartListResponse>("/api/cart-list");

      if (status.value === "success") {
        this.totalPrice = data.value?.total_price;
        this.cart = data.value?.cart_item;
      }
      this.setTotalDiscount();
    },
    async fetchCartAdd() {
      const formatedCart = this.existenceProducts.map((el) => {
        return { quantity_product: el.quantity_product, id: el.product.id };
      });
      const cartId = useCookie("cartId");
      const { data, execute } = await useAuthFetch("/api/cart-add", {
        method: "post",
        body: {
          cart_id: cartId.value ? cartId.value : null,
          product_item: formatedCart,
        },
      });
      if (!cartId.value) {
        cartId.value = data.value.id;
      }
    },
    setTotalDiscount() {
      this.totalDiscount = (
        ((this.totalPrice - this.getTotalCartPrice) / this.getTotalCartPrice) *
        100
      ).toFixed(1);
    },
  },
  getters: {
    productInCart: (state) => {
      return (productId: number) =>
        !!state.cart.find((el) => el.product.id === productId);
    },
    existenceProducts(state) {
      return state.cart.filter((el) => el.product.existence);
    },
    notExistenceProducts(state) {
      return state.cart.filter((el) => !el.product.existence);
    },
    getTotalCartPrice(): number {
      return this.existenceProducts.reduce(
        (acc, v) => acc + v.product.price * v.quantity_product,
        0
      );
    },

    cartLength(state) {
      if (state.cart) {
        return state.cart.length;
      }
    },
  },
});
