export type BaseResponse<T> = {
  success?: boolean;
  data?: T;
  message?: string;
  token?: string;
  expired_at?: string;
};
