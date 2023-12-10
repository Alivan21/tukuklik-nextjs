"use client";

import { Fragment } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSignOut } from "@/services/auth/logout";
import Cookies from "js-cookie";
import { Heart, ShoppingCart, User2 } from "lucide-react";
import toast from "react-hot-toast";

function ActionBar() {
  const userCookies = Cookies.get("token");
  const username = Cookies.get("username");

  const { mutateAsync: SignOutMutation, isPending } = useSignOut();

  async function handleSignOut() {
    toast.promise(SignOutMutation(), {
      loading: "Loading...",
      success: "Logout Success",
      error: "Logout Failed",
    });
  }

  if (userCookies && username) {
    return (
      <Fragment>
        <Link href="/wishlist">
          <Heart className="hidden md:block" />
        </Link>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User2 />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Hi {username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="py-1 font-medium" disabled={isPending} onClick={handleSignOut}>
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Fragment>
    );
  }
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
