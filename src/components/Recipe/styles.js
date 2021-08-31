import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba( 255, 255, 255, 0.30 )",
    "&:hover": {
      background: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      border: "3px solid rgba( 255, 255, 255, 0.28 )",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[400],
    background: "rgba( 255, 255, 255, 0.25 )",
  },
}));
