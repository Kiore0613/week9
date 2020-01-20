import { Filter } from "../../modules/main-layout/models/filter";
import { Page } from "../../modules/main-layout/models/page";
import { ErrorResponse } from "../../modules/main-layout/models/errorResponse";

export interface ResponseFromApi<TResponse> {
  filter: Filter;
  data: TResponse;
  errors: ErrorResponse;
  page: Page;
  meta: string;
}
