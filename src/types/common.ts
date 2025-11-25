type ErrorResponse = {
  errorCode: string;
  reason: string;
  data: object;
};

export type CommonResponse<T> = {
  resultType: string;
  error: null | ErrorResponse;
  success: { data: T } | null;
};
