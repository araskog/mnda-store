import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoading } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Category from "./category.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoading(state),
});

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Category);

export default CategoryPageContainer;
