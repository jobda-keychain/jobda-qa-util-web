export interface AddAccountRequest {
  userId: string;
  password: string;
  environmentId: number | null;
  description: string;
}

export interface ModifyAccountRequest {
  userId: string;
  password: string;
  description: string;
}
