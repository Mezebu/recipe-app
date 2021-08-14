import React from "react";
//prettier-ignore
import { AppBar, Toolbar, IconButton, Typography, InputBase, Container } from "@material-ui/core";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./styles";

const NavBar = ({ search, handleSearch, getSearch }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
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
              Ezeigwe's Kitchen
            </Typography>
            <form className={classes.search} onSubmit={getSearch}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Meal"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={handleSearch}
              />
            </form>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
