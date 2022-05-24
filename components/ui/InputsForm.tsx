import { FC } from "react";
import { ContactsResult, IFormInput } from "../../interfaces";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Input } from "./Styled";

interface Errors {
  firstName?: FieldError;
  lastName?: FieldError;
  email?: FieldError;
  phone?: FieldError;
}
interface Props {
  register: UseFormRegister<IFormInput>;
  errors: Errors;
  contact?: ContactsResult;
}

export const InputsForm: FC<Props> = ({ errors, register, contact }) => {
  return (
    <>
      <div className="flex">
        <Input
          {...register("firstName", { required: true, maxLength: 20 })}
          label="Frist name *"
          variant="outlined"
          error={Boolean(errors.firstName)}
          defaultValue={contact?.firstName}
          helperText={Boolean(errors.firstName) ? "Is required." : ""}
        />
        <Input
          {...register("lastName", { required: true, maxLength: 20 })}
          label="Last name *"
          variant="outlined"
          error={Boolean(errors.lastName)}
          defaultValue={contact?.lastName}
          helperText={Boolean(errors.lastName) ? "Is required." : ""}
        />
      </div>
      <Input
        {...register("email", {
          required: true,
          maxLength: 40,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
        label="Email *"
        variant="outlined"
        error={Boolean(errors.email)}
        type="email"
        defaultValue={contact?.email}
        helperText={
          Boolean(errors.email) ? "Is required or the email is wrong." : ""
        }
      />
      <Input
        {...register("phone", {
          required: true,
          minLength: 9,
          maxLength: 15,
        })}
        label="Phone *"
        variant="outlined"
        error={Boolean(errors.phone)}
        type="number"
        defaultValue={contact?.phone}
        helperText={
          Boolean(errors.phone) ? " Is required or the number is wrong." : ""
        }
      />
    </>
  );
};
