import { useContext, useEffect } from "react";
import { CatalogContext } from "..";
import SelectInput from "@/components/SelectInput";
import { CatalogSorting } from "../types";

import "./styles.scss";

function ParamsBar() {
  const { loading, applyParams } = useContext(CatalogContext);

  console.log(`ParamsBar again: ${new Date().getTime()}`);

  useEffect(() => {
    console.log("mounted ParamsBar");
  }, []);

  const onSortingChange = (sorting: CatalogSorting) => {
    applyParams({ sorting });
  };

  return (
    <div className="params-bar">
      <SelectInput<CatalogSorting>
        options={[
          {
            value: "cheap_first",
            label: "Порядок: сперва дешевле",
          },
          {
            value: "expensive_first",
            label: "Порядок: сперва дороже",
          },
        ]}
        onChange={onSortingChange}
        disabled={loading}
      />
    </div>
  );
}

export default ParamsBar;
