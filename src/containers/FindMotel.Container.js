import { connect } from "react-redux";
import FindMotel from "../components/FindMotel.Component";
import { getAllMotel } from "../reducers/Motel.Reducer";
const mapStateToProps = (state) => ({
  listMotel: state.motel.listMotel,
  isLoading: state.motel.isLoading,
  error: state.account.error,
});
const mapActionToProps = { getAllMotel };

export default connect(mapStateToProps, mapActionToProps)(FindMotel);
