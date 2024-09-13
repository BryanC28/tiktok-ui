import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import style from "~/css/defautl/DefLayout.module.scss";
const cs = classNames.bind(style);

export default function DefaultLayout({ children }) {
  return (
    <div className={cs('wrapper')}>
      <Header />
      <div className={cs('container')}>
        <SideBar />
        <div className={cs('content')}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
