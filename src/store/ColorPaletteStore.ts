import { create } from 'zustand';

type PrimaryColor = {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
};

/* type SecondaryColor = {
  secondaryColor: string;
  setSecondaryColor: (color: string) => void;
};

type AccentColor = {
  accentColor: string;
  setAccentColor: (color: string) => void;
};
 */
type DisplayPalette = {
  displayPalette: boolean;
  toggleDisplayPalette: () => void;
};

export const usePrimaryColor = create<PrimaryColor>((set) => ({
  primaryColor: 'fafaf9',
  setPrimaryColor: (color) => set({ primaryColor: color }),
}));

/* export const useSecondaryColor = create<SecondaryColor>((set) => ({
  secondaryColor: '0c0a09',
  setSecondaryColor: (color) => set({ secondaryColor: color }),
}));

export const useAccentColor = create<AccentColor>((set) => ({
  accentColor: '3c3a39',
  setAccentColor: (color) => set({ accentColor: color }),
})); */

export const useDisplayPalette = create<DisplayPalette>((set) => ({
  displayPalette: false,
  toggleDisplayPalette: () =>
    set((state) => ({ displayPalette: !state.displayPalette })),
}));
