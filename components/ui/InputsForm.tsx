import { FC } from "react";
import { TextField, Typography } from "@mui/material";
import { ContactsResult, IFormInput } from "../../interfaces";
import { FieldError, UseFormRegister } from "react-hook-form";

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
    <div>
      <div
        style={{ marginBottom: 18, display: "flex", flexDirection: "column" }}
      >
        <TextField
          {...register("firstName", { required: true, maxLength: 20 })}
          label="Frist name *"
          variant="outlined"
          error={Boolean(errors.firstName)}
          defaultValue={contact?.firstName}
        />
        {errors.firstName && <Typography color="error">Is required</Typography>}
      </div>
      <div
        style={{ marginBottom: 18, display: "flex", flexDirection: "column" }}
      >
        <TextField
          {...register("lastName", { required: true, maxLength: 20 })}
          label="Last name *"
          variant="outlined"
          error={Boolean(errors.lastName)}
          defaultValue={contact?.lastName}
        />
        {errors.lastName && <Typography color="error">Is required</Typography>}
      </div>
      <div
        style={{ marginBottom: 18, display: "flex", flexDirection: "column" }}
      >
        <TextField
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
        />
        {errors.email && (
          <Typography color="error">
            Is required or the email is wrong
          </Typography>
        )}
      </div>
      <div
        style={{ marginBottom: 18, display: "flex", flexDirection: "column" }}
      >
        <TextField
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
        />
        {errors.phone && (
          <Typography color="error">
            Is required or the number is wrong
          </Typography>
        )}
      </div>
    </div>
  );
};
