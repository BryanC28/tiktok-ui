import Home from "~/components/Home"
import Following from "~/components/Following"
import Upload from "~/components/Upload"

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload ,layout:null}
]

export const privateRoutes = [

]