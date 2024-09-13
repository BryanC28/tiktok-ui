import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import ProperWrapper from "~/components/Propers/Wrapper";
import AccountPreview from "~/components/MenuSideBar/AccPrev"
import styles from "~/css/MenuSideBar/Suggest.module.scss";
import Image from "../Images/Images";

const cs = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <ProperWrapper>
          <AccountPreview />
        </ProperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cs("account-item")}>
          <Image
            className={cs("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/539c73434f1dbcb68a7b1a7a2bc2f6ad.jpeg?lk3s=a5d48078&nonce=6882&refresh_token=7dc863360cd1605f4c5a70f8c23e7848&x-expires=1726372800&x-signature=NnmcALjcDUg63F3qnNSnJUpYRNY%3D&shp=a5d48078&shcp=b59d6b55"
            alt=""
          />
          <div className={cs("item-info")}>
            <p className={cs("nickname")}>
              <strong>quocnguyenphu</strong>
              <FontAwesomeIcon className={cs("check")} icon={faCheckCircle} />
            </p>
            <p className={cs("name")}>Quốc Nguyễn Phú</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
