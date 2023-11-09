import { Fragment } from "react";
import { Heart, ShoppingCart, User2 } from "lucide-react";
import Link from "next/link";

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
