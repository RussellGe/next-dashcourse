"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
      <Link href="/products" className="mr-5">
        Products
      </Link>
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <div>
          <img
            src={session!.user!.image! as string}
            className="w-8 h-8 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
