import React from "react";
import { Route } from "react-router-dom";

import CollectionsOveriew from "../../components/collections-overview/collections-overview.component";
import Category from "../../pages/category/category.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOveriew} />
    <Route path={`${match.path}/:categoryId`} component={Category} />
  </div>
);

export default ShopPage;
