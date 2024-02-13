import { User } from "@prisma/client";

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: any;
}
