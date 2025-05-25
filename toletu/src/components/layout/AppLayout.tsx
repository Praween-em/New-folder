import { Outlet, useLocation } from "react-router-dom"
import { MainBottomBar } from "@/components/MainBottomBar"
import { ProfileBottomBar } from "@/components/ProfileBottomBar"

export function AppLayout() {
  const location = useLocation()

  const isProfileRoute = location.pathname.startsWith("/profile")

  return (
    <div className="pb-16"> {/* Add padding bottom to prevent overlap */}
      <Outlet /> {/* This renders the page content */}
      {isProfileRoute ? <ProfileBottomBar /> : <MainBottomBar />}
    </div>
  )
}
