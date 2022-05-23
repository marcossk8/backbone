import { FC } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  register: any;
  errors: any;
}

export const InputsForm: FC<Props> = ({ errors, register }) => {
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
        />
        {errors.email && <Typography color="error">Is required or the email is wrong</Typography>}
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
        />
        {errors.phone && <Typography color="error">Is required or the number is wrong</Typography>}
      </div>
    </div>
  );
};
