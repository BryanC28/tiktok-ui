import classNames from "classnames/bind";
import styles from "~/css/Propers/Proper.module.scss"

const cs = classNames.bind(styles);

export default function Wrapper({children,className}) {
    return <div className={cs("wrapper", className)}>{children}</div>;
}
