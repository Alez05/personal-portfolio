export const theme = {
  colors: {
    whiteish: "#F1EFEC",
    cream: "#D4C9BE",
    darkBlue: "#123458",
    black: "#030303"
  },

  buttons: {
    onDark: {
      background: "transparent",
      color: "#F1EFEC",
      border: "2px solid #F1EFEC"
    },
    onCream: {
      background: "#123458",
      color: "#F1EFEC",
      border: "none"
    }
  },
} as const;

export type ThemeType = typeof theme;
