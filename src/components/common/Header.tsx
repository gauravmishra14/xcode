import React from "react";
import { IUser } from "utils/InterfacePool";
import { IAppState } from "reducer";
import { connect } from "react-redux";

interface IHeaderProps {}
interface LinkStateProps {
  user: IUser;
}
type IProps = LinkStateProps & IHeaderProps;

const mapStateToProps = (
  state: IAppState,
  ownProps: IHeaderProps
): LinkStateProps => {
  return {
    user: state.user,
  };
};

const Header = (props: IProps) => {
  const a = props.user;
  let b = "";
  if (Object.getOwnPropertyNames(a).length !== 0) {
    b = "true";
  }
  return (
    <div className="header">
      <span className="logo">Logo</span>
      <div className="centerFlex">Search bar</div>
      <div className="centerFlex">{b ? props.user.fullName ? props.user.fullName: `Username` : null}</div>
    </div>
  );
};

export default connect(mapStateToProps, {})(Header);
