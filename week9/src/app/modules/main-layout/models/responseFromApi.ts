import { Filter } from "./filter";
import { Page } from "./page";
import { ErrorResponse } from "./errorResponse";

export interface ResponseFromApi<TResponse> {
  filter: Filter;
  data: TResponse;
  errors: ErrorResponse;
  page: Page;
  meta: string;
}
