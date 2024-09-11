import classNames from "classnames/bind";
import style from "~/css/Propers/Menu.module.scss";
import MenuItems from "./MenuItems";
import Tippy from "@tippyjs/react/headless";
import ProperWrapper from "./Wrapper";
import MenuHeader from "./MenuHeader";
import { useState } from "react";
const cs = classNames.bind(style);

const defaultfn = ()=>{}

export default function Menu({ children, items = [], onchange = defaultfn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
        const isParent = !!item.children;
        return (
            <MenuItems key={index} data={item} onClick={()=>{
                if(isParent){
                    setHistory(prev => [...prev, item.children]);
                }
                else{
                    onchange(item);
                }
            }} />
        )
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 200]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cs("menu-list")} tabIndex="-1" {...attrs}>
          <ProperWrapper className={cs("menu-popper")}>
            {history.length > 1 && (
              <MenuHeader
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, -1));
                }}
              />
            )}
            {renderItems()}
          </ProperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}
