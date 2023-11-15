import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "..";
import { GridItem } from "./GridItem";

import "./styles.scss";

const data = [
  {
    id: 1,
    title: "Кровать TATRAN",
    caption:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
  },
  {
    id: 2,
    title: "Кресло VILORA",
    caption:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
    price: 21000,
  },
  {
    id: 3,
    title: "Стол MENU",
    caption: "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
  },
  {
    id: 4,
    title: "Диван ASKESTA",
    caption:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
  },
  {
    id: 5,
    title: "Кресло LUNAR",
    caption:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
  },
  {
    id: 6,
    title: "Шкаф Nastan",
    caption: "Мебель может быть оснащена разнообразными системами подсветки.",
    price: 80000,
  },
];

function Grid() {
  const { params, applyLoading } = useContext(CatalogContext);
  const [items, setItems] = useState(data);

  useEffect(() => {
    applyLoading(true);
    if (params.sorting === "cheap_first") {
      setItems((prevItems) => [...prevItems].sort((a, b) => a.price - b.price));
    } else {
      setItems((prevItems) => [...prevItems].sort((a, b) => b.price - a.price));
    }
    applyLoading(false);
  }, [params, applyLoading]);

  return (
    <div className="items-grid">
      {items.map((item) => (
        <GridItem
          id={item.id}
          key={item.id}
          title={item.title}
          caption={item.caption}
          price={item.price}
          image={`images/Product-${item.id}.jpg`}
        />
      ))}
    </div>
  );
}

export default Grid;
