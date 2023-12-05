/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export interface ProductListResult {
  limit: number;
  offset: number;
  results: ProductInfo[];
}
export interface City {
  /**
   * Город
   * @minLength 1
   * @maxLength 255
   */
  name: string;
}
export interface District {
  /**
   * Район
   * @minLength 1
   * @maxLength 255
   */
  name: string;
}
export interface GetCompanyAddress {
  /** ID */
  id: number;
  city: City;
  district: District;
  /**
   * Улица
   * @maxLength 255
   */
  street: string | null;
  /**
   * Номер дома
   * @maxLength 255
   */
  house_number: string | null;
  /** Номер офиса */
  office_number: number;
}
export interface CompanyAddress {
  /** ID */
  id: number;
  /** Город */
  city: number;
  /** Район */
  district: number | null;
  /**
   * Street
   * @minLength 1
   * @maxLength 250
   */
  street: string;
  /**
   * Номер дома
   * @maxLength 255
   */
  house_number: string | null;
  /** Номер офиса */
  office_number: number;
}
export interface BlogImage {
  /**
   * Изображение
   * @format uri
   */
  image: string | null;
}
export interface Blog {
  /**
   * Тематика
   * @maxLength 100
   */
  theme: string | null;
  /** Текст */
  id: number;
  text: string | null;
  images: BlogImage[];
  /**
   * Дата создания блога
   * @format date
   */
  date_created: string;
}
export interface CreateCart {
  /** Выбор количества товара */
  quantity_product: number;
}
export interface ListCart {
  /** Product id */
  product_id: number;
  /**
   * Quantity product
   * @min 0
   */
  quantity_product: number;
  /**
   * Sum products
   * @min 0
   */
  sum_products: number;
}
export interface ManufacturingCompany {
  /**
   * Компания производитель
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Логотип
   * @format uri
   */
  logo: string | null;
}
export interface Country {
  /**
   * Страна производства
   * @minLength 1
   * @maxLength 255
   */
  name: string;
}
export interface PackageType {
  /**
   * Тип упаковки
   * @minLength 1
   * @maxLength 255
   */
  name: string;
}
export interface DescriptionProduct {
  manufacturer: ManufacturingCompany;
  made_in: Country;
  /**
   * Описание товара
   * @minLength 1
   */
  description: string;
  package: PackageType;
}
export interface SubCategoryProduct {
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Изображение
   * @format uri
   */
  image: string | null;
  /** ID */
  id: number;
}
export interface ProductImage {
  /**
   * Изображение
   * @format uri
   */
  image: string | null;
}
export interface ListProduct {
  /** ID */
  id: number;
  product_data: DescriptionProduct;
  subcategory: SubCategoryProduct;
  images: ProductImage[];
  /**
   * Наименование товара
   * @maxLength 255
   */
  name: string | null;
  /** Стоимость за единицу */
  price: number;
  /**
   * Артикул товара
   * @maxLength 255
   */
  article: string | null;
  /** Цена с учетом скидки */
  discount_price: number | null;
  /** Количество на складе */
  quantity_stock: number;
  /** Рейтинг товара */
  rating: number;
  /** Количество товара для ОПТа */
  opt_quantity: number | null;
  /** ОПТовая цена за единицу товара */
  opt_price: number | null;
  /** Наличие товара на складе */
  existence: boolean | null;
  /**
   * Дата создания товара
   * @format date
   */
  date_create: string;
  /** Товар активный/скрытый */
  is_active: boolean;
  /** Наличие отзывов у продукта */
  reviewed: boolean;
}
export interface ListDiscount {
  /** ID */
  id: number;
  product: ListProduct[];
  /**
   * Наименование акции
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Фото акции
   * @format uri
   */
  image: string | null;
  /** Вывод на фронт */
  is_show: boolean;
  /** Учитывать лимит по сумме товара в корзине */
  use_limit_sum_product: boolean;
  /** Сумма товара в корзине после которой действует акция */
  limit_sum_product: number;
  /** Количество человек воспользовавшихся акцией */
  count_person: number;
  /** Количество купленных товаров по акции */
  count_product: number;
  /** Учитывать лимит по количеству человек */
  use_limit_person: boolean;
  /** Ограничение по количеству человек */
  limit_person: number;
  /** Учитывать лимит по количеству товара */
  use_limit_product: boolean;
  /** Ограничение по количеству товара */
  limit_product: number;
  /** Учитывать систему лояльности */
  use_limit_loyalty: boolean;
  /**
   * Дата окончания акции
   * @format date
   */
  date_end_discount: string;
  /** Действующая/архивная акция */
  is_active: boolean;
  /** Тип акции */
  action_type: "discount" | "gift";
  /** Размер скидки в % */
  discount_amount: number | null;
  /** Скидка для всей подкатегории товара */
  subcategory_product: number | null;
  /** Подарок */
  gift: number | null;
}
export interface AboutCompany {
  /**
   * О комании
   * @minLength 1
   */
  name: string;
}
export interface OpenStore {
  /** День недели */
  day:
    | "Понедельник"
    | "Вторник"
    | "Среда"
    | "Четверг"
    | "Пятница"
    | "Суббота"
    | "Воскресенье";
  /** Время открытия */
  time_open: string | null;
  /** Время закрытия */
  time_close: string | null;
}
export interface ContactArtFood {
  /**
   * Номер телефона
   * @minLength 1
   * @maxLength 20
   */
  phone_numbers: string;
}
export interface AddressArtFood {
  city: City;
  district: District;
  /**
   * Улица
   * @minLength 1
   * @maxLength 255
   */
  street: string;
  /**
   * Номер дома
   * @minLength 1
   * @maxLength 255
   */
  house_number: string;
  /** Номер офиса */
  office_number: number | null;
  /**
   * Поле для ссылки
   * @format uri
   * @maxLength 200
   */
  url: string | null;
  open_store: OpenStore[];
  contact_store: ContactArtFood[];
}
export interface SocialNetwork {
  /**
   * Название социальной сети
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Ссылка на социальную сеть
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  url_network: string;
}
export interface PrivacyPolicy {
  /**
   * Политика конфиденциальности
   * @minLength 1
   */
  name: string;
}
export interface ReturnPolicy {
  /**
   * Условие возврата
   * @minLength 1
   */
  name: string;
}
export interface DeliveryAddress {
  /** ID */
  id: number;
  city: City;
  district: District;
  /**
   * Улица
   * @maxLength 255
   */
  street: string | null;
  /**
   * Номер дома
   * @maxLength 255
   */
  house_number: string | null;
  /** Номер квартиры */
  apartment_number: number | null;
  /** Этаж */
  floor: number | null;
}
export interface ProductInfo {
  /**
   * Наименование товара
   * @maxLength 255
   */
  name: string | null;
  /** Стоимость за единицу */
  price: number;
  /**
   * Артикул товара
   * @maxLength 255
   */
  article: string | null;
  /** Цена с учетом скидки */
  discount_price: number | null;
}
export interface GiftInfo {
  /**
   * Наименование товара
   * @maxLength 255
   */
  name: string | null;
  images: ProductImage[];
  /**
   * Артикул товара
   * @maxLength 255
   */
  article: string | null;
}
export interface OrderItem {
  /** ID */
  id: number;
  product: ProductInfo;
  gift: GiftInfo;
  /** Количество товара */
  quantity: number;
  /** Стоимость товара с учетом количества */
  price: number;
  /** Заказ */
  order: number;
}
export interface GetOrder {
  /** ID */
  id: number;
  /**
   * Payment method
   * @minLength 1
   */
  payment_method: string;
  /**
   * Дата создания
   * @format date-time
   */
  date_created: string;
  delivery_address: DeliveryAddress;
  /**
   * Номер телефона
   * @minLength 1
   * @maxLength 20
   */
  contact_phone: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Total quantity
   * @minLength 1
   */
  total_quantity: string;
  /**
   * Total price
   * @minLength 1
   */
  total_price: string;
  items: OrderItem[];
}
export interface CreateOrder {
  /** Метод оплаты */
  payment_method: "cash" | "non_cash" | "card";
  /** Delivery address */
  delivery_address: number;
  /**
   * Номер телефона
   * @minLength 1
   * @maxLength 20
   */
  contact_phone: string;
}
export interface Category {
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Изображение
   * @format uri
   */
  image: string | null;
  subcategories: SubCategoryProduct[];
  /** ID */
  id: number;
}
export interface ListCatalog {
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  categories: Category[];
  /** ID */
  id: number;
}
export interface RetrieveProduct {
  /** ID */
  id: number;
  product_data: DescriptionProduct;
  subcategory: SubCategoryProduct;
  images: ProductImage[];
  /**
   * Наименование товара
   * @maxLength 255
   */
  name: string | null;
  /** Стоимость за единицу */
  price: number;
  /**
   * Артикул товара
   * @maxLength 255
   */
  article: string | null;
  /** Цена с учетом скидки */
  discount_price: number | null;
  /** Количество на складе */
  quantity_stock: number;
  /** Рейтинг товара */
  rating: number;
  /** Количество товара для ОПТа */
  opt_quantity: number | null;
  /** ОПТовая цена за единицу товара */
  opt_price: number | null;
  /** Наличие товара на складе */
  existence: boolean | null;
  /**
   * Дата создания товара
   * @format date
   */
  date_create: string;
  /** Товар активный/скрытый */
  is_active: boolean;
  /** Наличие отзывов у продукта */
  reviewed: boolean;
}
export interface AddProductCompare {
  /** ID */
  id: number;
}
export interface AddProductFavorite {
  /** ID */
  id: number;
}
export interface UserMail {
  /**
   * Электронная почта
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
}
export interface ReviewImage {
  /**
   * Изображение
   * @format uri
   */
  image: string | null;
}
export interface ReviewCreate {
  /** ID */
  id: number;
  /** Количество звезд */
  count_stars: 1 | 2 | 3 | 4 | 5;
  /** Отзыв */
  review_text: string | null;
  user: UserMail;
  /** Продукт */
  product: number;
  images: ReviewImage[];
  /**
   * Дата создания
   * @format date
   */
  date_created: string;
}
export interface ContactPerson {
  /**
   * Фамилия
   * @minLength 1
   * @maxLength 255
   */
  surname: string;
  /**
   * Имя
   * @minLength 1
   * @maxLength 255
   */
  first_name: string;
  /**
   * Отчество
   * @minLength 1
   * @maxLength 255
   */
  second_name: string;
}
export interface Address {
  /** ID */
  id: number;
  /** Город */
  city: number;
  /** Район */
  district: number | null;
  /**
   * Улица
   * @maxLength 255
   */
  street: string | null;
  /**
   * Номер дома
   * @maxLength 255
   */
  house_number: string | null;
  /** Номер квартиры */
  apartment_number: number | null;
  /** Этаж */
  floor: number | null;
}
export interface CreateCompany {
  /** ID */
  id: number;
  /**
   * Имя
   * @minLength 1
   * @maxLength 150
   */
  username: string;
  /**
   * Last name
   * @minLength 1
   * @maxLength 150
   */
  last_name: string;
  /**
   * Отчество
   * @maxLength 150
   */
  second_name: string | null;
  /**
   * Электронная почта
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Номер телефона
   * @minLength 1
   * @maxLength 20
   */
  phone_number: string;
  /**
   * Название компании
   * @minLength 1
   * @maxLength 255
   */
  company_name: string;
  /** Bin iin */
  bin_iin: number;
  /**
   * ИИК
   * @minLength 1
   * @maxLength 255
   */
  iik: string;
  /**
   * Bank
   * @minLength 1
   */
  bank: string;
  /** Bik */
  bik: number;
  company_address: CompanyAddress;
  /** Способ оплаты */
  payment_method: "cash" | "non_cash";
  contact_person: ContactPerson;
  addresses: Address[];
  /**
   * Password
   * @minLength 1
   */
  password: string;
  /**
   * Password repeat
   * @minLength 1
   */
  password_repeat: string;
  /**
   * User type
   * @minLength 1
   */
  user_type: string;
}
export interface CreateIndividual {
  /** ID */
  id: number;
  /**
   * Имя
   * @minLength 1
   * @maxLength 150
   */
  username: string;
  /**
   * Last name
   * @minLength 1
   * @maxLength 150
   */
  last_name: string;
  /**
   * Отчество
   * @maxLength 150
   */
  second_name: string | null;
  /**
   * Электронная почта
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Номер телефона
   * @minLength 1
   * @maxLength 20
   */
  phone_number: string;
  /**
   * Second phone number
   * @maxLength 50
   */
  second_phone_number: string;
  /** Отличается номер телефона от WhatsApp */
  different_whatsapp: boolean;
  addresses: Address[];
  /**
   * Password
   * @minLength 1
   */
  password: string;
  /**
   * Password repeat
   * @minLength 1
   */
  password_repeat: string;
  /**
   * User type
   * @minLength 1
   */
  user_type: string;
}
export interface GetAddress {
  /** ID */
  id: number;
  city: City;
  district: District;
  /**
   * Улица
   * @maxLength 255
   */
  street: string | null;
  /**
   * Номер дома
   * @maxLength 255
   */
  house_number: string | null;
  /** Номер квартиры */
  apartment_number: number | null;
  /** Этаж */
  floor: number | null;
}
export interface Login {
  /** ID */
  id: number;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
  /**
   * Remember
   * @default false
   */
  remember: boolean;
}
export interface RuApiAddressCompanyListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiBlogListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiCartListListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiDiscountsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiDiscountsIsShowListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiLibraryAboutCompanyListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiLibraryListAddressStoreListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiLibraryListSocialNetworkListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiLibraryPrivacyPolicyListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiLibraryReturnPolicyListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiOrderListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiProductsListParams {
  /** A search term. */
  search?: string;
  /** subcategory */
  subcategory?: string;
  /** existence */
  existence?: string;
  /** article */
  article?: string;
  /** name */
  name?: string;
  /** product_data__manufacturer */
  product_data__manufacturer?: string;
  /** price */
  price?: string;
  /** subcategory__category */
  subcategory__category?: string;
  /** Which field to use when ordering the results. */
  ordering?: string;
  /** A page number within the paginated result set. */
  page?: number;
}
export interface RuApiProductsCatalogReadParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  catalogId: string;
}
export interface RuApiProductsCatalogCategoryListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  catalogId: string;
}
export interface RuApiProductsCatalogsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiProductsCategoryReadParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  categoryId: string;
}
export interface RuApiProductsCompareListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiProductsFavoriteListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiProductsNewListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiProductsPopularListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiProductsSimilarListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiProductsSubcategoriesReadParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  subcategoryId: string;
}
export interface RuApiProductsSubcategoryReadParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  categoryId: string;
}
export interface RuApiProductsViewedListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiReviewListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
export interface RuApiUserAddressListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}
