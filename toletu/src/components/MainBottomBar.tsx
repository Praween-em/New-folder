import { useNavigate, useLocation } from "react-router-dom"
import { Home, Users, PlusCircle } from "lucide-react"

export function MainBottomBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-blue-400 flex items-center h-16 px-4">
      {/* Left Tab */}
      <button
        onClick={() => navigate("/roommates")}
        className={`flex-1 flex flex-col items-center justify-center text-white ${
          isActive("/roommates") ? "font-bold" : "font-medium"
        }`}
      >
        <Users size={24} />
        <span className="text-xs mt-0.5">Roommates</span>
      </button>

      {/* Center + Floating Post Ad Button */}
      <div className="relative flex-1 flex justify-center">
        <button
          onClick={() => navigate("/post-ad")}
          className="absolute -top-8 bg-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          aria-label="Post Ad"
        >
          <PlusCircle size={28} className="text-blue-400" />
        </button>
      </div>

      {/* Right Tab */}
      <button
        onClick={() => navigate("/profile")}
        className={`flex-1 flex flex-col items-center justify-center text-white ${
          isActive("/profile") ? "font-bold" : "font-medium"
        }`}
      >
        <Home size={24} />
        <span className="text-xs mt-0.5">Profile</span>
      </button>
    </nav>
  )
}
