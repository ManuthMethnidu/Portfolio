import { create } from 'zustand';

interface CursorState {
  active: boolean;
  type: 'default' | 'project' | 'button';
  data: string | null;
  projectIndex: number | null;
  setCursorState: (state: Partial<CursorState>) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  active: false,
  type: 'default',
  data: null,
  projectIndex: null,
  setCursorState: (state) => set((prev) => ({ ...prev, ...state })),
}));
