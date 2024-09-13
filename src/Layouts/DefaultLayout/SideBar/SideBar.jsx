import classNames from "classnames/bind";
import MenuItem from "~/components/MenuSideBar/MenuItem";
import Menu from "~/components/MenuSideBar/Menu";
import style from "~/css/Sidebar/Sidebar.module.scss";
import { FollowActiveIcon, FollowIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon } from "~/components/Icons/Icons";
import routeConfig from "~/config/configRoute";
import SuggestedAccounts from "~/components/MenuSideBar/Suggest";

const cs = classNames.bind(style);

export default function SideBar() {
  return (
    <aside className={cs("wrapper")}>
      {/* <h2>Sidebar</h2> */}
      <Menu>
        <MenuItem
          title="For You"
          to={routeConfig.home}
          icon={<HomeIcon />}
          actIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={routeConfig.following}
          icon={<FollowIcon />}
          actIcon={<FollowActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={routeConfig.live}
          icon={<LiveIcon />}
          actIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestedAccounts label="Suggested for you" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}
