import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState({});

  const minLength = (e, bound, values) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values.length < bound,
    }));
  };

  const isPositive = (e) => {
    let number = Number(e.target.value);
    setErrors((state) => ({
      ...state,
      [e.target.name]: number < 0,
    }));
  };

  const validateUsername = (e, values) => {
    const regex = /^[A-Za-z0-9^&_$]{3,}/;
    setErrors((state) => ({
      ...state,
      [e.target.name]: values.match(regex) === null,
    }));
  };


  const validateImage = (e, values) => {
    const regex = /^https?.\/\//;
    setErrors((state) => ({
      ...state,
      [e.target.name]: values.match(regex) === null,
    }));
  };

  const validateEmail = (e, values) => {
    const regex = /^[A-Za-z0-9]{3,}@[A-Za-z0-9]{3,}.[A-Za-z]{2,}$/;
    setErrors((state) => ({
      ...state,
      [e.target.name]: values.match(regex) === null,
    }));
  };

  const validatePhoneNumber = (e, values) => {
    const regex = /^0[0-9]{3,}/;
    setErrors((state) => ({
      ...state,
      [e.target.name]: values.match(regex) === null,
    }));
  }

  const isFormValid = !Object.values(errors).some((x) => x);

  const contextValues = {
    errors,
    minLength,
    isPositive,
    isFormValid,
    validateImage,
    validateEmail,
    validateUsername,
    validatePhoneNumber,
  };

  return (
    <>
      <ErrorContext.Provider value={contextValues}>
        {children}
      </ErrorContext.Provider>
    </>
  );
};


export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  return context;
};
