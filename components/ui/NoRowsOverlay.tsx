import { Stack } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const IconContainer = styled(Box)<BoxProps>(() => ({
  width: 30,
  height: 30,
  borderRadius: "33%",
  backgroundColor: "#fdb1b1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 5,
  marginRight: 16,
}));

export const NoRowsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconContainer>
          <QuestionMarkIcon sx={{ color: "#ff2d2d" }} />
        </IconContainer>
        <span>No results found</span>
      </div>
    </Stack>
  );
}
