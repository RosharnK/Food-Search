/** @format */

import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  //Sign in with google
  const googlProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googlProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      route.push("/dashboard");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className=" mt-28 p-20 mx-auto max-w-md min-w-min rounded-lg ">
      <button
        onClick={GoogleLogin}
        className="rounded-full transition duration-300 ease-in-out hover:scale-110"
      >
        <FcGoogle className="text-8xl" />
      </button>
    </div>
  );
}
