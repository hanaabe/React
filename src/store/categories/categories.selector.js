// transform the data in to the final you wanted
//transform the logic in to the finaal disered outputs
// 
import { createSelector } from "reselect";
// import Category from "../../routes/category/category.component";
// import { selectCurrentUser } from "../user/user.selector";
// import { categoriesReducer } from "./categories.reducer";
const selectCategoryReducer=(state)=>state.categories;
export const selectCategories =createSelector([selectCategoryReducer]
    ,(categoriesSlice) =>categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories],(categories) =>categories.reduce((acc,category)=>{
    const {title,items} =category;
    acc[title.toLowerCase()] = items;
    return acc;

},{})


    );

  
  
 