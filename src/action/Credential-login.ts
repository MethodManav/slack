import { ILooseObject } from "@/features/auth/types";
import { signIn } from "next-auth/react";

export async function doSocialLogin(action: string) {
  try {
    await signIn(action);
  } catch (error) {
    console.log(error);
  }
}

export async function doCredentialLogin(formData: ILooseObject) {
  try {
    return await signIn("credentials", {
      email: formData.emailValue,
      password: formData.passwordValue,
      redirect: false,
    });
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}
