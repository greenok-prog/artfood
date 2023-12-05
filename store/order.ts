export const useOrder = defineStore("order", {
  state: () => {
    return {
      paymentMethod: "pickup" as "pickup" | "delivery",
      deliveryAddress: null,
    };
  },
  actions: {
    setAddress(address) {
      this.deliveryAddress = address;
    },
  },
});
