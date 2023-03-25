import { configureStore } from "@reduxjs/toolkit";
import { taskModel } from "entities";

export const store = configureStore({
  reducer: {
    tasks: taskModel.reducer,
  },
});
