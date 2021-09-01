import React from "react";
//prettier-ignore
import { AppBar, Toolbar, IconButton, Typography, InputBase, Container, Switch,  } from "@material-ui/core";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./styles";

// prettier-ignore
const NavBar = ({ search, handleSearch, getSearch, darkMode, themeToggler }) => {
  const classes = useStyles();

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
            <Switch value={darkMode} onClick={themeToggler} color='primary' />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
