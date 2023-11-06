import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <form className="flex w-full flex-initial justify-center">
      <Select>
        <SelectTrigger className="w-40 rounded-r-none">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Input className="w-1/2 rounded-none" name="search" placeholder="Search" />
      <Button className="w-12 rounded-l-none bg-red-600 hover:bg-red-700">
        <Search />
      </Button>
    </form>
  );
}
export default SearchBar;
