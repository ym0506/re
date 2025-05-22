// import { createContext } from 'react';

const RecipeContext = React.createContext({
    recipes: [],
    setRecipes: () => { },
    user: null,
    setUser: () => { }
}); 