import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "~/css/Buttons/Button.module.scss";
const cs = classNames.bind(style);

export default function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cs("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cs("icon")}>{leftIcon}</span>}
      <span className={cs("title")}>{children}</span>
      {rightIcon && <span className={cs("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
