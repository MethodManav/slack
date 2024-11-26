import { signIn } from "next-auth/react";

export async function doSocialLogin(action: string) {
  try {
    await signIn(action);
  } catch (error) {
    console.log(error);
  }
}
