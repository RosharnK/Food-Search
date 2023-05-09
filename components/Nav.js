/** @format */
import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <nav className="flex justify-between items-center bg-gray-100 py-4 px-8">
      <Link href="/">
        <button className="text-lg font-bold italic text-black ">
          Food😋Search
        </button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"} legacyBehavior>
            <a className="py-2 px-4 text-sm bg-blue-400 text-white rounded-lg font-medium ml-8">
              Sign In
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/">
              <button
                onClick={() => auth.signOut()}
                className="font-medium bg-red-500 text-white rounded-lg py-2 px-4 text-sm"
              >
                Sign Out
              </button>
            </Link>
            <Link href={"/dashboard"}>
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
