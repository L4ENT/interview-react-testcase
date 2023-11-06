import { useContext, useEffect } from "react";
import "./styles.scss";
import { CatalogContext } from "..";

function ItemsGrid() {
  const { params, loading, applyLoading } = useContext(CatalogContext);

  useEffect(() => {
    applyLoading(true);
    setTimeout(() => {
      applyLoading(false);
    }, 1500);
  }, [params, applyLoading]);

  return (
    <h2>
      Товары {loading && "грузятся"}: {params.sorting}
    </h2>
  );
}

export default ItemsGrid;
