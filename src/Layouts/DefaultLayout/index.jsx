import Header from "./Header";
import SideBar from "./SideBar";
import classNames from "classnames/bind";
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
