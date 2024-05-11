import { AddressType } from "../common/address-type";
import { CompanyType } from "../common/company-type";

export type UserIdType = number;

export type UserType = {
  id: UserIdType;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};
