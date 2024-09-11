import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import style from "~/css/Accounts/AccountItem.module.scss";
import Image from "../Images/Images";


const cs = classNames.bind(style)
export default function AccountItem({data}) {
    return (
      <Link to={`/:${data.nickname}`} className={cs("wrapper")}>
        <Image
          className={cs("avatar")}
          src={data.avatar}
          alt={data.full_name}
        />
        <div className={cs("info")}>
          <p className={cs("acc-name")}>
            <span>{data.full_name}</span>
            {data.tick && (
              <FontAwesomeIcon className={cs("check")} icon={faCheckCircle} />
            )}
          </p>
          <span className={cs("username")}>{data.nickname}</span>
        </div>
      </Link>
    );
}

