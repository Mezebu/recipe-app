import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "40vw",
    marginTop: "30px",
  },
  fonts: {
    fontFamily: "playball",
    fontSize: "8vw",
  },
  icon: {
    position: "fixed",
    left: " 50%",
    top: "50%",
  },
});
