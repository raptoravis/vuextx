export interface User {
  name: string;
  email: string;
  phone?: string;
}

export interface ProfileState {
  user?: User;
  error: boolean;
}
