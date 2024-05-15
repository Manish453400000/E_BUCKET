export const DB_NAME:string = 'E_BUCKET';

export const UserRoleEnum = {
  CUSTOMER: "CUSTOMER",
  SELLER: "SELLER",
}
export const AvailableUserRoles = Object.values(UserRoleEnum);


export const UserLoginType = {
  GOOGLE: "GOOGLE",
  GITHUB: "GITHUB",
  USERNAME_PASSWORD: "USERNAME_PASSWORD",
}
export const AvailableLoginTypes = Object.values(UserLoginType);


export const Countries = {
  INDIA: "INDIA",
  USA: "USA",
  RUSIA: "RUSIA",
}
export const AvailableCountries = Object.values(Countries);


export const States = {
  CSK: "CSK",
  RCB: "RCB",
  MI: "MI",
  KKR: "KKR",
}
export const AvailableStates = Object.values(States);

export const NationalCallCode = {
  INDIA: "+91",
  USA: "+1",
  RUSIA: "+7"
}
export const AvailableNationalCallCode = Object.values(States);