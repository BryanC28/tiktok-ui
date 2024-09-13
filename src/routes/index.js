import Home from "~/components/Home"
import Following from "~/components/Following"
import Upload from "~/components/Upload"
import Profile from "~/components/Profile"
import routeConfig from "~/config/configRoute"
import Live from "~/components/Live/live"

export const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.live, component: Live },
    { path: routeConfig.upload, component: Upload ,layout:null}
]

export const privateRoutes = [

]