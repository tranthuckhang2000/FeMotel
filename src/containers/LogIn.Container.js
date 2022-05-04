import { connect } from "react-redux";
import LogIn from "../components/LogIn.Component";
import { getAllAccount } from "../reducers/Account.Reducer";

const mapStateToProps = (state) => ({
  listAccount: state.account.listAccount,
  isLoading: state.account.isLoading,
  error: state.account.error,
});

const mapActionToProps = { getAllAccount };

export default connect(mapStateToProps, mapActionToProps)(LogIn);
