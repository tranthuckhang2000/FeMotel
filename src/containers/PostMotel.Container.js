import { connect } from "react-redux";
import PostMotel from "../components/PostMotel.Component";
import { saveMotel } from "../reducers/Motel.Reducer";
import { getAllMotel } from "../reducers/Motel.Reducer";

const mapStateToProps = (state) => ({
  listMotel: state.motel.listMotel,
  isLoading: state.motel.isLoading,
  error: state.account.error,
});

const mapActionToProps = { saveMotel, getAllMotel };

export default connect(mapStateToProps, mapActionToProps)(PostMotel);
