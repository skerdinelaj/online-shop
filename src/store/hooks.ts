import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = ()=> AppDispatch

export const useCardDispatchHook: DispatchFunction = useDispatch
export const useCardSelectorHook: TypedUseSelectorHook<RootState> = useSelector