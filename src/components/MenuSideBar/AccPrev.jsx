import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Buttons/Button";
import styles from "~/css/MenuSideBar/AccountPreview.module.scss";
import Image from "../Images/Images";

const cs = classNames.bind(styles);

export default function AccountPreview() {
  return (
    <div className={cs("wrapper")}>
      <div className={cs("header")}>
        <Image
          className={cs("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660665600&x-signature=hToDdYbvevi4S9Fn5tdnI%2Bk0%2BkM%3D"
          alt=""
        />
        <Button className={cs("follow-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cs("body")}>
        <p className={cs("nickname")}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cs("check")} icon={faCheckCircle} />
        </p>
        <p className={cs("name")}>Quốc Nguyễn Phú</p>
        <p className={cs("analytics")}>
          <strong className={cs("value")}>8.2M </strong>
          <span className={cs("label")}>Followers</span>
          <strong className={cs("value")}>8.2M </strong>
          <span className={cs("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}
