import React from "react";
import "./styles.scss";
import Header from "@/components/Header";

function ShopLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <section className="shop-layout">{children}</section>
    </>
  );
}

export default ShopLayout;
