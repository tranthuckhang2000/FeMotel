import { connect } from "react-redux";
import { fetchProduct } from "../reducers/product";
import FindMotel from "../components/FindMotel.Component";
import { findMotel } from "../reducers/Find.Reducer";

const mapStateToProps = (state) => ({
  motelItems: state.findMotel.motelItems,
});

const mapActionToProps = { findMotel };

export default connect(mapStateToProps, mapActionToProps)(FindMotel);