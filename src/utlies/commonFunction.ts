import { doCredentialLogin } from "@/action/Credential-login";
import { ILooseObject } from "@/features/auth/types";
import axios from "axios";

export const handleFormSubmit = async (formData: ILooseObject) => {
  try {
    if (formData.name) {
      console.log(formData.name);
      const userDb = await axios.post(`http://localhost:3000/api/user`, {
        email: formData.emailValue,
        password: formData.passwordValue,
        name: formData.name,
      });
      return "User Created";
    }
    return doCredentialLogin(formData);
  } catch (error) {
    console.error("Error handling form submission:", error);
  }
};
