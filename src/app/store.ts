import { configureStore } from "@reduxjs/toolkit";
import { taskModel } from "entities/task";

export const store = configureStore({
  reducer: {
    tasks: taskModel.reducer,
  },
});
