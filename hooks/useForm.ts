import { ChangeEvent, useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target;

    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};
