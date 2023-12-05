export interface GetCompanyAddress {
  id: number;
  city: {
    name: string;
  };
  district: {
    name: string;
  };
  street: string;
  house_number: string;
  office_number: number;
}
export interface UserCompany {
  company_address: GetCompanyAddress;
  bank: string;
  bik: number;
  bin_iin: number;
  company_name: string;
  email: string;
  iik: string;
  phone_number: string;
  username: string;
  last_name: string;
  second_name: string;
  user_type: "company" | "individual";
  payment_method: string;
  id: number;
}
