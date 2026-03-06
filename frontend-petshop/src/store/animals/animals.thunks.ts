import { createAsyncThunk } from "@reduxjs/toolkit";
import type { animalsList } from "../../interfaces/animals.interface";

const BASE_URL = import.meta.env.VITE_APP_API_URL;
// const URL = import.meta.env.VITE_APP_API_URL;
// const BASE_URL = `${URL}/animals`;

// GET
export const getAnimals = createAsyncThunk<
  animalsList[],
  void,
  { rejectValue: string }
>("animals/getAnimals", async (_, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch animals");
  }
});
