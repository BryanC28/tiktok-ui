import classNames from "classnames/bind";
import style from "~/css/sidebar/Sidebar.module.scss";

const cs = classNames.bind(style);

export default function SideBar() {
  return (
    <aside className={cs("wrapper")}>
      <h2>Sidebar</h2>
    </aside>
  );
}
