import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

type Props = {
  type?: string;
  id?: string;
  placeholder?: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ id, placeholder, label, onChange }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input id={id} placeholder={placeholder} onChange={handleOnChange} />
    </FormControl>
  );
};

export default FormInput;
