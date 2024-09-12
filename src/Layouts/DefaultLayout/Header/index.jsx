import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Buttons/Button";
import style from "~/css/header/Header.module.scss";
import { images } from "~/assets/images";
import routeConfig from "~/config/configRoute"
import Menu from "~/components/Propers/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons/Icons";
import Image from "~/components/Images/Images";
import Search from "~/components/Search/Search";
import { Link } from "react-router-dom";
// import { useState } from "react";

const cs = classNames.bind(style);
export default function Header() {
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@nlc28",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  const currentUser = true;
  // const handleLogout = () => {
  //   setCurrentUser(false);
  // }
  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  return (
    <header className={cs("wrapper")}>
      <div className={cs("inner")}>
        <Link to={routeConfig.home} className={cs("logo")}>
          <img src={images.logo} alt="tiktok" />
        </Link>
        {/* Search */}
        <Search />
        {/* Actions */}
        <div className={cs("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="upload video" placement="bottom">
                <button className={cs("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Messeage" placement="bottom">
                <button className={cs("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cs("action-btn")}>
                  <InboxIcon />
                  <span className={cs("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log In</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onchange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/07c2b080eabf890e7d90e2de0eebd206.jpeg?lk3s=a5d48078&nonce=64097&refresh_token=d410746262301ad4b86c0724107d6dfb&x-expires=1726135200&x-signature=fB%2BReHCQotWm3WFZUmyWCrApH%2FE%3D&shp=a5d48078&shcp=b59d6b55"
                className={cs("user-avatar")}
                alt="user-name"
              />
            ) : (
              <button className={cs("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}


