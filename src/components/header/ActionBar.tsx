import { Fragment } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, ShoppingCart, User2 } from "lucide-react";

function ActionBar() {
  return (
    <Fragment>
      <Heart className="hidden md:block" />
      <ShoppingCart />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <User2 />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Login</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Register</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  );
}
export default ActionBar;
