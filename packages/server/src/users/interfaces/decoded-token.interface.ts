export interface DecodedToken {
  id: string;
  email: string;
  name: string;
  snsTypeId: string;
  exp?: number;
  token?: string
}
