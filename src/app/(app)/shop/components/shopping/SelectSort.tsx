import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function SelectSort() {
  return (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Sort by latest" />
      </SelectTrigger>
      <SelectContent defaultValue="latest">
        <SelectGroup>
          <SelectItem defaultChecked value="latest">
            Sort by latest
          </SelectItem>
          <SelectItem value="popularity">Sort by popularity</SelectItem>
          <SelectItem value="rating">Sort by average rating</SelectItem>
          <SelectItem value="price_low">Sort by price: low to high</SelectItem>
          <SelectItem value="price_high">Sort by price: high to low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SelectSort;
