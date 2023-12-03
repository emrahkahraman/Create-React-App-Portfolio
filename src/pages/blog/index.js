import { Outlet } from "react-router-dom"

export default function BlogLayout() {
    return(
        <div>
            <h3>blog layout</h3>
            <Outlet />
        </div>
    )
}