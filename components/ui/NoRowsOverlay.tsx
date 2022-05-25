import { Stack } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { IconContainer } from "./Styled";

export const NoRowsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconContainer
          sx={{
            backgroundColor: "#fdb1b1",
            marginRight: 1
          }}
        >
          <QuestionMarkIcon sx={{ color: "#ff2d2d" }} />
        </IconContainer>
        <span>No results found</span>
      </div>
    </Stack>
  );
}
