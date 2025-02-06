export interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
  picture: {
    large: string;
  };
}