import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

const categories = [
  "Apartments",
  "Houses",
  "PG/Hostel",
  "Office Space",
  "Shops",
  "Warehouses",
  "Farm Lands",
  "Commercial Buildings",
]

export function CategoryBar({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (category: string) => void
}) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex space-x-2 min-w-max px-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selected === category ? "toletu" : "toletu"}
            className={cn(
              "whitespace-nowrap text-sm rounded-full",
              selected === category ? "bg-primary text-white" : ""
            )}
            onClick={  () => onSelect(category) }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
