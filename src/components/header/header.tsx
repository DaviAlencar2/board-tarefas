"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-black text-white pt-6">
      <nav>
        <ul className="flex justify-evenly items-center">
          <Link href="/">
            <li>Tarefas➕</li>
          </Link>

          <li className="border-white p-2 rounded-md">
            {session ? (
              <div className="flex items-center gap-2">
                <FaUserCircle size={24} />
                <span>{session.user?.name}</span>
                <button onClick={() => signOut()} className="px-2 py-1 bg-gray-700 rounded">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => signIn("google")} className="px-2 py-1 bg-gray-700 rounded">
                Login com Google
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}