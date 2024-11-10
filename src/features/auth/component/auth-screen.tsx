"use client";

import { useState } from "react";
import { SigInFlow } from "../types";
import { SignIn } from "./sign-in-card";
import { SignUp } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SigInFlow>("signIn");
  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-auto">
        {state === "signIn" ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};
