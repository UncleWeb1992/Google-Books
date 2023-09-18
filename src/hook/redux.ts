import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppDispatch, RootState } from "store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
