import {
  createSelector,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { useEffect } from "react";
import type { Task } from "shared";
import { API, useTaskSelector } from "shared";

const initialState: TaskState = {
  entries: {},
  queryConfig: {},
};

const TASKS_KEY = "tasks";

// TanStack Query actions (everything that async)
const getTasksListAsync = () => (dispatch: Dispatch) => {
  const query = useQuery({
    queryKey: [TASKS_KEY],
    queryFn: () => API.tasks.getTasksList(),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(taskModel.actions.setTasksList(query.data.slice(0, 25)));
    }
  }, [dispatch, query.data]);

  return query;
};

export const getTaskByIdAsync = (id: number) => (dispatch: Dispatch) => {
  const query = useQuery({
    queryKey: ["task", id],
    queryFn: () => API.tasks.getTaskById(id),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5minutes
  });

  useEffect(() => {
    if (query.data?.id) {
      dispatch(taskModel.actions.addTaskToList(query.data));
    }
  }, [dispatch, query.data]);

  return query;
};

// selectors
const getFilteredTasks = () =>
  useTaskSelector(
    createSelector(
      (state: RootState) => state.tasks.queryConfig,
      (state: RootState) => state.tasks.entries,
      (
        queryConfig: RootState[typeof TASKS_KEY]["queryConfig"],
        tasks: RootState[typeof TASKS_KEY]["entries"]
      ) =>
        Object.values(tasks).filter(
          (task) =>
            queryConfig?.completed === undefined ||
            task?.completed === queryConfig.completed
        )
    )
  );

const useTask = (taskId: number) =>
  useTaskSelector(
    createSelector(
      (state: RootState) => state.tasks.entries,
      (tasks) => tasks[taskId]
    )
  );

const areTasksLoading = (): boolean =>
  useIsFetching({ queryKey: [TASKS_KEY] }) > 0;

const taskSlice = createSlice({
  name: TASKS_KEY,
  initialState,
  reducers: {
    setTasksList: (state, { payload }: PayloadAction<Task[]>) => {
      state.entries = payload.reduce((record, task: Task) => {
        record[task.id] = task;
        return record;
      }, {} as Record<number, Task>);
    },
    addTaskToList: (state, { payload: task }: PayloadAction<Task>) => {
      state.entries[task.id] = task;
    },
    toggleTask: ({ entries }, { payload: taskId }: PayloadAction<number>) => {
      entries[taskId].completed = !entries[taskId].completed;
    },
    setQueryConfig: (state, { payload }: PayloadAction<QueryConfig>) => {
      state.queryConfig = payload;
    },
  },
});

export const taskModel = {
  ...taskSlice,
  selectors: {
    getFilteredTasks,
    useTask,
    areTasksLoading,
  },
  getTasksListAsync,
  getTaskByIdAsync,
};

// TYPES
type TaskState = {
  entries: Record<number, Task>;
  queryConfig: QueryConfig;
};

type QueryConfig = {
  completed?: boolean;
};
