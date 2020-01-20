import { Product } from "src/app/modules/main-layout/models/product";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface ProductState extends EntityState<Product> {
  products: Product[];
  error: any;
  filterIds: Array<number>;
}

export const initialProductStateProperties: ProductState = {
  ids: [],
  filterIds: [],
  entities: {},
  products: [],
  error: null
};

export const productAdapter: EntityAdapter<Product> = createEntityAdapter();

export const initialProductState = productAdapter.getInitialState(
  initialProductStateProperties
);
