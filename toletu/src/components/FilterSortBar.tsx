import * as React from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLocationStore } from "@/store/useLocationStore"
import { cn } from "@/lib/utils"

// Dummy areas mapped by city
const areaMap: Record<string, string[]> = {
  "Anantapur": ["Clock Tower", "Kamalanagar", "Housing Board"],
  "Chittoor": ["Bharathi Nagar", "Kattamanchi", "Mangasamudram"],
  "Guntur": ["Brodipet", "Lakshmipuram", "Patnam Bazar"],
  "Kadapa": ["RTC Colony", "Yerramukkapalli", "Tilak Nagar"],
  "Kakinada": ["Sarpavaram", "Jagannadhapuram", "Rama Rao Peta"],
  "Kurnool": ["Nandyal Road", "Deva Nagar", "Ashok Nagar"],
  "Nellore": ["Balaji Nagar", "Magunta Layout", "Dargamitta"],
  "Ongole": ["Bhagyanagar", "Mangamuru Donka", "Kurnool Road"],
  "Rajahmundry": ["Morampudi", "Tilak Road", "Aryapuram"],
  "Srikakulam": ["Balaga", "Arasavalli", "Day & Night Junction"],
  "Tadepalligudem": ["RTC Colony", "Gandhi Nagar", "Ameerpet"],
  "Tirupati": ["Korlagunta", "Renigunta Road", "Balaji Colony"],
  "Vijayawada": ["Benz Circle", "Governorpet", "Gollapudi"],
  "Visakhapatnam": ["MVP Colony", "Dwaraka Nagar", "Gajuwaka"],
  "Vizianagaram": ["Kothapeta", "Chintalavalasa", "Vasavi Nagar"],
  "Eluru": ["Powerpet", "Ashok Nagar", "Sanivarapupeta"]
}

const sortOptions = [
  { label: "Date: Newest first", value: "newest" },
  { label: "Price: Low to High", value: "priceLow" },
  { label: "Price: High to Low", value: "priceHigh" },
]

export function FilterSortBar() {
  const selectedLocation = useLocationStore((state) => state.selectedLocation)
  const [selectedSort, setSelectedSort] = React.useState("")
  const [selectedArea, setSelectedArea] = React.useState("")

  const areaOptions = selectedLocation ? areaMap[selectedLocation] || [] : []

  return (
    <div className="flex flex-row sm:flex-row items-center gap-2 w-full px-2 py-2 bg-white border-b shadow-md">
      {/* Sort by */}
      <div className="flex flex-col w-full sm:w-1/2">
        <Label htmlFor="sort" className="mb-1 text-sm font-medium text-gray-700">Sort by</Label>
        <Select value={selectedSort} onValueChange={setSelectedSort}>
          <SelectTrigger id="sort" className="w-full">
            <SelectValue placeholder="Select sort option" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Select Area */}
      <div className="flex flex-col w-full sm:w-1/2">
        <Label htmlFor="area" className="mb-1 text-sm font-medium text-gray-700">Select Area</Label>
        <Select value={selectedArea} onValueChange={setSelectedArea} disabled={areaOptions.length === 0}>
          <SelectTrigger id="area" className="w-full">
            <SelectValue placeholder={areaOptions.length ? "Choose area" : "Select area"} />
          </SelectTrigger>
          <SelectContent>
            {areaOptions.map((area) => (
              <SelectItem key={area} value={area}>
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
