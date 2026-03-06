import { createAsyncThunk } from "@reduxjs/toolkit";
import type { categoriesList } from "../../interfaces/categories.interface";

const URL = import.meta.env.VITE_APP_API_URL;
const BASE_URL = `${URL}/animals`;

// GET
export const getCategories = createAsyncThunk<
  categoriesList[],
  void,
  { rejectValue: string }
>("categories/getCategories", async (_, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch categories");
  }
});
