/*
 * @Author: Nic(❤❤️ niccoming@gmail.com ❤❤️)
 * @Date: 2021-05-14 09:29:02
 * @LastEditors: Nic
 * @LastEditTime: 2021-05-14 11:47:20
 * @FilePath: /pancake-uikit/src/theme/colors.ts
 */
import { Colors } from "./types";

export const baseColors = {
  failure: "#ff738e",
  primary: "#eb6b11",
  primaryBright: "#5DC4D9",
  primaryDark: "#eb6b11",
  secondary: "#eb6b11",
  success: "#33CA7F",
  warning: "#fea192",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f6f8",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeeee",
  tertiary: "#EFF4F5",
  text: "#5f7888",
  textDisabled: "#BDC2C4",
  textSubtle: "#5EC3DA",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FFFFFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#357f8f",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
