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

interface SignInCardProps {
  setState: (state: SigInFlow) => void;
}
export const SignInCard = ({ setState }: SignInCardProps) => {
  const [emailValue, setEmail] = useState<string>("");
  const [passwordValue, setPassword] = useState<string>("");
  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login To Continue</CardTitle>
        <CardDescription>
          Use Your Email or Another Service to Continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            placeholder="Enter Your Email "
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            disabled={false}
            placeholder="Enter Your Password "
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={false}
            onClick={(e) => {
              e.preventDefault();
              handleFormSubmit({ emailValue, passwordValue });
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
            value="google"
          >
            Continue With Google
            <FcGoogle className=" size-10" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground ">
          Don't Have an Account ?{" "}
          <span
            onClick={() => setState("signUp")}
            className="cursor-pointer text-sky-700 hover:underline"
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
