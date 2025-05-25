// main.tsx
import React from "react"
import ReactDOM from "react-dom/client"
import "@/index.css"
import { AppRouter } from "@/routes/AppRouter"
import { Toaster } from "@/components/ui/sonner"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />   {/* Already handles routing */}
    <Toaster />
  </React.StrictMode>
)
