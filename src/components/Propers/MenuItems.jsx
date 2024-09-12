import classNames from "classnames/bind";
import PropTypes from "prop-types";
import style from "~/css/Propers/Menu.module.scss";
import Button from "../Buttons/Button";
const cs = classNames.bind(style);

export default function MenuItem({ data, onClick }) {
   const classes = cs("menu-item", {
     separate: data.separate,
   });
  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
