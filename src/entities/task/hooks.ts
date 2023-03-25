import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTaskDispatch: () => RootDispatch = useDispatch;
export const useTaskSelector: TypedUseSelectorHook<RootState> = useSelector;
