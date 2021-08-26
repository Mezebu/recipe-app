import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container, ThemeProvider } from "@material-ui/core";

import Recipe from "./components/Recipe/Recipe";
import AppBar from "./components/AppBar/AppBar";

import styles from "./App.module.css";
import { theme } from "./components/styles";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rice");

  const apiDetails = {
    apiID: "dd901a11",
    apiKey: "8b93cfe3bd23593061a1a1c09ca83f06",
  };

  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${apiDetails.apiID}&app_key=${apiDetails.apiKey}`;

  const getRecipes = async () => {
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

  return (
    <div className={styles.App}>
      <ThemeProvider theme={theme}>
        <AppBar
          getSearch={getSearch}
          handleSearch={handleSearch}
          search={search}
        />
        <div className={styles.spacing} />
        <Container>
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
