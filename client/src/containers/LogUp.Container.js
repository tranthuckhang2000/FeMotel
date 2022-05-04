import { connect } from "react-redux";
import LogUp from "../components/LogUp.Component";
import { saveAccount } from "../reducers/Account.Reducer";
import { getAllAccount } from "../reducers/Account.Reducer";

const mapStateToProps = (state) => ({
  listAccount: state.account.listAccount,
  isLoading: state.account.isLoading,
  accountAvailable: state.account.accountAvailable,
  error: state.account.error,
});

const mapActionToProps = { saveAccount, getAllAccount };

export default connect(mapStateToProps, mapActionToProps)(LogUp);
