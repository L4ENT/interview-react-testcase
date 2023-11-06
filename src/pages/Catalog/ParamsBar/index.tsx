import { useContext, useEffect } from "react";
import "./styles.scss";
import { CatalogContext } from "..";

function ParamsBar() {
  const { params, loading, applyParams } = useContext(CatalogContext);

  console.log(`ParamsBar again: ${new Date().getTime()}`);

  useEffect(() => {
    console.log("mounted ParamsBar")
  }, []);

  return (
    <div>
      {params.sorting}
      <button
        disabled={loading}
        onClick={() => {
          applyParams({
            sorting:
              params.sorting === "cheap_first"
                ? "expensive_first"
                : "cheap_first",
          });
        }}
      >
        Сменить сортировку
      </button>
    </div>
  );
}

export default ParamsBar;
