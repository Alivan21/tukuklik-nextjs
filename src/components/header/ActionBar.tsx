import { Fragment } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, User2 } from "lucide-react";

function ActionBar() {
  return (
    <Fragment>
      <Link href="/wishlist">
        <Heart className="hidden md:block" />
      </Link>
      <Link href="/cart">
        <ShoppingCart />
      </Link>
      <Link href="/login">
        <User2 />
      </Link>
    </Fragment>
  );
}
export default ActionBar;
