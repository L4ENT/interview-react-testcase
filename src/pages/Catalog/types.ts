export type CatalogSorting = "cheap_first" | "expensive_first";

export type CatalogParams = {
  sorting: CatalogSorting;
};

export type CatalogContextValue = {
  params: CatalogParams;
  loading: boolean,
  applyParams: (params: Partial<CatalogParams>) => void;
  applyLoading: (loading: boolean) => void;
};
