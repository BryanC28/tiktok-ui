import Home from "~/components/Home"
import Following from "~/components/Following"
import Upload from "~/components/Upload"
import Profile from "~/components/Profile"

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/:nickname', component: Profile },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload ,layout:null}
]

export const privateRoutes = [

]