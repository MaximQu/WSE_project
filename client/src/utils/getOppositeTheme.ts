import { Theme } from "@/types/global";

export const getOppositeTheme = (theme: Theme): Theme => theme === 'dark' ? 'light' : 'dark'