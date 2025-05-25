// src/routes/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "@/components/layout/AppLayout"
import HomePage from "@/pages/HomePage"
import { BrowsePage } from "@/pages/BrowsePage"
import DummyListingCardDetails from "@/pages/DummyListingCardDetails"
//import  ListingDetailPage  from "@/pages/ListingDetailsPage"
import  ProfilePage  from "@/pages/ProfilePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "browse", element: <BrowsePage /> },
      { path: "listing/:id", element: <DummyListingCardDetails/> },
      { path: "profile", element: <ProfilePage /> },
      // add other child routes here
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
