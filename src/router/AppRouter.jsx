import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { CalendarPage } from "../calendar/pages"

// If no auth is detected, users will be redirected to the auth page
const routes = [
    {
        path: "/auth/*",
        element: <LoginPage />
    },
    {
        path: "/*",
        element: <CalendarPage />
    }
];

export const AppRouter = () => {

    const authStatus = "not-authenticated";

    const router = createBrowserRouter([
        authStatus === "not-authenticated" ? routes[0] : routes[1],
        {
            path: "/*",
            element: <Navigate to={"auth/login"} />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}