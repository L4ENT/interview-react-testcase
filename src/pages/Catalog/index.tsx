import Layout from "@/components/Layout";
import "./styles.scss";
import ParamsBar from "./ParamsBar";
import ItemsGrid from "./ItemsGrid";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CatalogContextValue, CatalogParams } from "./types";

const initialCatalogParams: CatalogParams = {
  sorting: "cheap_first",
};

export const CatalogContext = createContext<CatalogContextValue>({
  params: {
    sorting: "cheap_first",
  },
  loading: false,
  applyParams: () => {},
  applyLoading: () => {},
});

function Catalog() {
  // TODO: Убрать
  useEffect(() => {
    console.log(`Catalog mounted`);
  }, []);
  useEffect(() => {
    console.log(`Catalog render again: ${new Date().getTime()}`);
  });

  const [params, setParams] = useState<CatalogParams>(initialCatalogParams);
  const [loading, setLoading] = useState(false);

  const applyParams = useCallback((newParams: Partial<CatalogParams>) => {
    setParams((prevParams) => ({
      ...prevParams,
      ...newParams,
    }));
  }, []);

  const applyLoading = useCallback((loading: boolean) => {
    setLoading(loading)
  }, []);

  const catalogContextValue = useMemo(
    () => ({
      params,
      loading,
      applyParams,
      applyLoading
    }),
    [params, loading, applyParams, applyLoading]
  );

  return (
    <Layout>
      <CatalogContext.Provider value={catalogContextValue}>
        <ParamsBar />
        <ItemsGrid />
      </CatalogContext.Provider>
    </Layout>
  );
}

export default Catalog;
