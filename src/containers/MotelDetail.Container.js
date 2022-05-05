import { connect } from "react-redux";
import MotelDetail from "../components/MotelDetail.Component";
import { getMotelById } from "../reducers/Motel.Reducer";

const mapStateToProps = (state) => ({
  listMotel: state.motel.listMotel,
  isLoading: state.motel.isLoading,
  error: state.account.error,
});

const mapActionToProps = { getMotelById };

export default connect(mapStateToProps, mapActionToProps)(MotelDetail);
