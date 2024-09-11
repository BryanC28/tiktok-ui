import classNames from "classnames/bind";
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
