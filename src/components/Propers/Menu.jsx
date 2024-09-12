import classNames from "classnames/bind";
import style from "~/css/Propers/Menu.module.scss";
import MenuItems from "./MenuItems";
import Tippy from "@tippyjs/react/headless";
import ProperWrapper from "./Wrapper";
import MenuHeader from "./MenuHeader";
import { useState } from "react";
import PropTypes from "prop-types";
const cs = classNames.bind(style);

const defaultfn = ()=>{}

export default function Menu({ children, items = [], onchange = defaultfn, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onchange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, -1));
  };
  const renderResult = (attrs) => (
    <div className={cs("menu-list")} tabIndex="-1" {...attrs}>
      <ProperWrapper className={cs("menu-popper")}>
        {history.length > 1 && (
          <MenuHeader
            title={current.title}
            onBack={handleBack}
          />
        )}
        <div className={cs("menu-body")}>{renderItems()}</div>
      </ProperWrapper>
    </div>
  );
  const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
      }

  return (
    <Tippy
      interactive
      delay={[0, 200]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}


Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
