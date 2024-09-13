import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "~/css/MenuSideBar/Suggest.module.scss";
import AccountItem from "./AccItem";


const cs = classNames.bind(styles);

export default function SuggestedAccounts({ label }) {
  return (
    <div className={cs("wrapper")}>
      <p className={cs("label")}>{label}</p>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
      <p className={cs("more-btn")}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

