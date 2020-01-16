import { Filter } from "../../main-layout/models/filter";
import { Page } from "../../main-layout/models/page";
import { ErrorResponse } from "../../main-layout/models/errorResponse";

export interface ResponseFromApi<TResponse> {
  filter: Filter;
  data: TResponse;
  errors: ErrorResponse;
  page: Page;
  meta: string;
}
