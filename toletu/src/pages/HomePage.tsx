import { Header } from "@/components/ui/Header"
import { CategoryBar } from "@/components/ui/CategoryBar"
import { FilterSortBar } from "@/components/FilterSortBar"
import { ListingScrollContainer } from "@/components/ListingScrollContainer"
import { MainBottomBar } from "@/components/MainBottomBar"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Header />
      <CategoryBar />
      <FilterSortBar />
      <ListingScrollContainer />
    <MainBottomBar/>
    </div>
  )
}

export default HomePage
