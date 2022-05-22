import { ChangeEvent, FC, useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  handleSearch: (value: string) => void;
}

export const Search: FC<Props> = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\s/g, "");
    setSearch(value);
    handleSearch(value);
  };

  return (
    <FormControl size="small" variant="outlined">
      <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search"
        value={search}
        onChange={handleChangeSearch}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        label="Search"
      />
    </FormControl>
  );
};
