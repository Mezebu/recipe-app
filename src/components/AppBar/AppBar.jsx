import React from "react";
//prettier-ignore
import { AppBar, Toolbar, IconButton, Typography, InputBase, Container } from "@material-ui/core";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import SearchIcon from "@material-ui/icons/Search";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import { useStyles } from "./styles";

// prettier-ignore
const NavBar = ({ search, handleSearch, getSearch, darkMode, themeToggler }) => {
  const classes = useStyles();
  const icon = !darkMode ? <Brightness4Icon /> : <Brightness7Icon />;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <LocalDiningIcon
                fontSize="large"
                className="animate__animated animate__pulse animate__infinite	infinite"
              />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Ezeigwe's Food Recipe
            </Typography>
            <form className={classes.search} onSubmit={getSearch}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Recipe"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={handleSearch}
              />
            </form>
            <div className={classes.themeIcon}>
              <IconButton
              edge="start"
              onClick={themeToggler}
              color="inherit"
              aria-label="open drawer"
            >
              {icon}
              </IconButton>
            </div>       
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
