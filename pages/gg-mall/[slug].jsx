import React, { useEffect, useState } from "react";
import PageBanner from "../../components/Common/PageBanner";
import GgShoppingListPc from "../../components/GgShopping/GgShoppingListPc";
import Footer from "../../components/Layouts/Footer";
import { useRouter } from "next/router";
import { ggmallKind } from "../../utils/cmmCode";
export default function list({ user }) {
  const router = useRouter();
  const [pdKind, setPdKind] = useState("");

  useEffect(() => {
    if (router.query.slug) {
      setPdKind(router.query.slug);
    }
  }, [router.query]);

  return (
    <div>
      <PageBanner
        pageTitle={ggmallKind[pdKind]}
        homePageUrl="/"
        homePageText="GG shopping"
        activePageText="GG shopping"
      />
      <section className="shopping_content">
        <GgShoppingListPc user={user} pdKind={pdKind} />
      </section>
      <Footer />
    </div>
  );
}
