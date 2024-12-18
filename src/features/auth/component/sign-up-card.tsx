"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { FcGoogle } from "react-icons/fc";
import { SigInFlow } from "../types";
import { useState } from "react";
import { doSocialLogin } from "@/action/Credential-login";
import { handleFormSubmit } from "@/utlies/commonFunction";

interface SignUpCardProps {
  setState: (state: SigInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [name, setName] = useState<string>("");
  const [emailValue, setEmail] = useState<string>("");
  const [passwordValue, setPassword] = useState<string>("");
  const [confirmPasswordValue, setConfirmPassword] = useState<string>("");
  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>SignUp To Continue</CardTitle>
        <CardDescription>
          Use Your Email or Another Service to Continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter Your Full Name "
            required
          />
          <Input
            disabled={false}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter Your Email "
            required
          />
          <Input
            disabled={false}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Your Password "
            required
          />
          <Input
            disabled={false}
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm Your Password "
            required
          />
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={false}
            onClick={(e) => {
              e.preventDefault();
              if (passwordValue === confirmPasswordValue) {
                return handleFormSubmit({ name, emailValue, passwordValue });
              }
            }}
          >
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            disabled={false}
            size="lg"
            variant={"outline"}
            onClick={() => {
              doSocialLogin("google");
            }}
          >
            Continue With Google
            <FcGoogle className=" size-10" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground ">
          Already Have an Account ?{" "}
          <span
            onClick={() => setState("signIn")}
            className="cursor-pointer text-sky-700 hover:underline"
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
