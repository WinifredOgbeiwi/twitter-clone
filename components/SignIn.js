import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";
function SignIn() {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-slate-200 py-5">
        <div class="bg-white border-5 flex flex-col items-center h-4/5 w-full sm:w-3/5 rounded-xl pt-5">
          <Image
            src="/twitter.svg"
            alt=""
            width="30"
            height="30"
            className=" sticky"
          />
          <h2 className="font-bold text-3xl my-10">Sign in to Twitter</h2>
          <button
            className="border-2 py-2 w-3/5 rounded-3xl flex justify-center "
            onClick={() => signIn("google")}
          >
            <Image src="/google.svg" alt="" width="20" height="20" />
            <span className="ml-3">Sign up with Google</span>
          </button>

          <button
            className="border-2 py-2 w-3/5 rounded-3xl mt-5 flex justify-center "
            onClick={() => signIn("google")}
          >
            <Image src="/google.svg" alt="" width="20" height="20" />
            <span className="ml-3 font-semibold">Sign up with Apple</span>
          </button>

          <p className="my-5">or</p>
          <input placeholder="Phone, email, or username" className="border-2 w-3/5 py-4 rounded-md placeholder:text-lg placeholder:text-slate-500 placeholder:pl-3"/>
        </div>
      </div>
    </>
  );
}

export default SignIn;
