import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import style from "~/css/MenuSideBar/Menu.module.scss";
const cs = classNames.bind(style);

export default function MenuItem({ title, to, icon, actIcon }) {
  return (
    <NavLink to={to} className={(nav) => cs('menu-item',{active: nav.isActive})}>
      <span className={cs("icon")}>{icon}</span>
      <span className={cs("active-icon")}>{actIcon}</span>
      <span className={cs("title")}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  actIcon: PropTypes.node.isRequired,
};
