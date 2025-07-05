"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-lg"></div>
    );
  }

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <Link
          href="/dashboard"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Dashboard
        </Link>
        <div className="flex items-center space-x-2">
          {session.user?.image && (
            <img
              className="h-8 w-8 rounded-full"
              src={session.user.image}
              alt={session.user.name || "User"}
            />
          )}
          <span className="text-gray-700 text-sm">{session.user?.name}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => signIn()}
        className="text-gray-700 hover:text-gray-900 font-medium"
      >
        Sign In
      </button>
      <Link
        href="/auth/signin"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
};

export default AuthButton;