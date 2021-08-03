import Chat from "./components/Chat";
import Login from "./components/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./util/const";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Login
    },
]

export const previteRoutes = [
    {
        path: CHAT_ROUTE,
        component: Chat
    },
]