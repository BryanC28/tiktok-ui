import classNames from "classnames/bind";
import styles from "~/css/Propers/Proper.module.scss";
import PropTypes from "prop-types";
const cs = classNames.bind(styles);

export default function Wrapper({ children, className }) {
  return <div className={cs("wrapper", className)}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
