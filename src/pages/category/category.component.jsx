import React from "react";
import { connect } from "react-redux";
import collectionItemComponent from "../../components/collection-item/collection-item.component";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCategory } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

const Category = ({ match, category }) => (
  <div className="category">
    <h2 className="title">{category.title}</h2>
    <div className="items">
      {category.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(Category);
