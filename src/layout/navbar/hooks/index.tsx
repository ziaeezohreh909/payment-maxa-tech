import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAccessCookie,
  getUserInfo,
  signInUser,
  signUpNewUser,
} from "../services";

export const useAccessCookie = () => {
  return useQuery({
    queryKey: ["access"],
    queryFn: () => fetchAccessCookie(),
    staleTime: Infinity,
    refetchInterval: 100,
  });
};

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: () => getUserInfo(),
    refetchOnWindowFocus: false,
  });
};

export const useSignUpNewUser = () => {
  return useMutation({
    mutationFn: signUpNewUser,
  });
};

export const useSignInUser = () => {
  return useMutation({
    mutationFn: signInUser,
  });
};
