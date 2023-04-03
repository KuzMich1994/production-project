import { appStore } from 'app/providers/store-provider';
import { useDispatch } from 'react-redux';

export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
