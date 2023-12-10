import { create } from 'zustand';

interface LazyLoadStoreProps {
  isLazyLoad: boolean;
  setIsLazyLoad: (value: boolean) => void;
}

export const lazyLoadStore = create<LazyLoadStoreProps>(set => ({
  isLazyLoad: false,
  setIsLazyLoad: (value: boolean) => set(() => ({ isLazyLoad: value })),
}));
