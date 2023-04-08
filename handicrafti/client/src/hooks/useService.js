import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const useService = (serviceFactory) => {
  const { token } = useContext(AuthContext);

  const service = serviceFactory(token);
  return service;
};