import type User from './User';

export default interface AuthResponse {
  accessToken: string;
  user: User;
}
