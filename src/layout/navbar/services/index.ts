import { BASE_URL } from "@/constants/urls";
import axios from "axios";
import { IUser, IUserSignInForm } from "../hooks/types";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const signUpNewUser = async (newUserData: IUser) => {
  try {
    const existingUsersDatabase = await axios.get(`${BASE_URL}/users`);
    const existingUsers = existingUsersDatabase.data;
    const emailExists = existingUsers.some(
      (user: IUser) => user.email === newUserData.email
    );
    console.log(emailExists);
    if (emailExists) {
      throw new Error("This email is already registered.");
    }

    const response = await axios.post(`${BASE_URL}/users`, newUserData);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && !error.response) {
      throw new Error("Network error, please try again later.");
    }
    throw error;
  }
};

export const signInUser = async (data: IUserSignInForm) => {
  try {
    const usersDatabase = await axios.get(`${BASE_URL}/users`);
    const userInDataBase = usersDatabase.data.find(
      (item: IUser) => item.email === data.email
    );
    if (!userInDataBase || userInDataBase.password !== data.password) {
      throw new Error("You've entered an envalid email/password combination.");
    }
    return userInDataBase;
  } catch (error) {
    if (axios.isAxiosError(error) && !error.response) {
      throw new Error("Network error, please try again later.");
    }
    throw error;
  }
};

export const getUserInfo = async () => {
  const userId = fetchIdCookie();
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data;
};

export const fetchAccessCookie = () => {
  return getCookie("access") === "true";
};

export const fetchIdCookie = () => {
  return getCookie("userId");
};

export const setAccessCookie = (value: boolean) => {
  const accessValue = value ? "true" : "false";
  setCookie("access", accessValue, { maxAge: 3600, path: "/" });
};

export const setIdCookie = (value: number) => {
  setCookie("userId", String(value), { maxAge: 3600, path: "/" });
};

export const removeAccessCookie = () => {
  deleteCookie("access", { path: "/" });
};

export const removeIdCookie = () => {
  deleteCookie("userId", { path: "/" });
};
