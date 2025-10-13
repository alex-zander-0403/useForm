import { useState } from "react";

//
const useForm = (initState) => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return formData;
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
