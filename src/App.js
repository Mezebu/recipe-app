import React, { useState } from "react";
import axios from "axios";
import { Grid, Container, ThemeProvider, Paper } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

import { Home, Recipe, AppBar } from "./components";

import styles from "./App.module.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const getRecipes = async (e) => {
    const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${apiDetails.apiID}&app_key=${apiDetails.apiKey}`;

    try {
      e.preventDefault();
      setLoading(true);
      setQuery("");

      const { data } = await axios.get(baseUrl);
      setRecipes(data.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const themeToggler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={styles.App}>
      <ThemeProvider theme={theme}>
        <Paper>
          <AppBar
            getRecipes={getRecipes}
            handleSearch={handleSearch}
            query={query}
            themeToggler={themeToggler}
            darkMode={darkMode}
          />
          <Container>
            <div className={styles.spacing} />
            {recipes && <Home loading={loading} />}

            <div className={styles.spacing} />
            {recipes && (
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
            )}
          </Container>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
