import { styled } from "@mui/material/styles";
import {
  Box,
  BoxProps,
  OutlinedInputProps,
  TextField,
  OutlinedInput,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

export const ContactContainer = styled(Box)<BoxProps>(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
}));

export const Container = styled(Box)<BoxProps>(() => ({
    padding: 16,
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    borderRadius: 20,
    maxWidth: 500,
    maxHeight: '100%'
}));

export const Title = styled(Typography)<TypographyProps>(() => ({
    fontSize: 18,
    margin: '0 0 0 16px'
}));

export const IconContainer = styled(Box)<BoxProps>(() => ({
    width: 40,
    height: 40,
    borderRadius: '33%',
    backgroundColor: '#bed0ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const TitleContainer = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16
}));

export const Input = styled(TextField)<TextFieldProps>(() => ({
    marginBottom: 20,
    '& label.Mui-focused': {
        color: '#4d98ff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#4d98ff',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#d2d2d2',
            borderRadius: 10
        },
        '&:hover fieldset': {
            borderColor: '#bed0ff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#bed0ff',
        },
    },
}));

export const Searcher = styled(OutlinedInput)<OutlinedInputProps>(() => ({
    borderRadius: '10px'
}));

export const DataTableGrid = styled(DataGrid)<DataGridProps>(() => ({
    borderRadius: '10px'
}));
