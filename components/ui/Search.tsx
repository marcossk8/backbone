import { ChangeEvent, FC, useState } from "react";
import {
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../../features/search";

interface Props {
  handleSearch: (value:string) => void,
  removeSearch: () => void;
}

export const Search:FC<Props> = ({ handleSearch, removeSearch }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchValue = useAppSelector(selectSearch);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\s/g, "");
    setSearchInputValue(value);
  };

  const handleOnKeyPress = (event:any) => {
    const value = event?.target?.value
    
    if (event.key === "Enter" && value) {
      handleSearch(value);
      setSearchInputValue("");
    }
  }

  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <Tooltip title="Touch enter to search" placement="top-end">
        <FormControl size="small" variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-search">Search by name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            value={searchInputValue}
            onChange={handleChangeSearch}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            label="Search by name"
            onKeyPress={handleOnKeyPress}
          />
        </FormControl>
      </Tooltip>

      {searchValue && <Chip label={searchValue} onDelete={removeSearch}  style={{ marginLeft: 10 }}/>}

    </div>
  );
};
