import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

import { Home, Recipe, AppBar } from "./components";

import styles from "./App.module.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rice");
  const [darkMode, setDarkMode] = useState(false);

  const apiDetails = {
    apiID: "dd901a11",
    apiKey: "8b93cfe3bd23593061a1a1c09ca83f06",
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "Nunito"].join(","),
      fontSize: 13,
    },
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const getRecipes = async () => {
    const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${apiDetails.apiID}&app_key=${apiDetails.apiKey}`;

    try {
      const { data } = await axios.get(baseUrl);
      setRecipes(data.hits);
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const themeToggler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={styles.App}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          getSearch={getSearch}
          handleSearch={handleSearch}
          search={search}
          themeToggler={themeToggler}
          darkMode={darkMode}
        />
        <Container>
          <div className={styles.spacing} />
          <Home />
          <div className={styles.spacing} />
          <Grid container spacing={2}>
            {recipes.map(({ recipe }) => (
              <Recipe
                key={recipe.label}
                title={recipe.label}
                calories={recipe.calories}
                cuisine={recipe.cuisineType}
                ingredients={recipe.ingredients}
                image={recipe.image}
                healthInfo={recipe.dietLabels}
                dishType={recipe.dishType}
              />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
