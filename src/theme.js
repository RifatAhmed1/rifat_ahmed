'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'var(--font-saira-extra-condensed)',
  },
  cssVariables: true,
});

theme = responsiveFontSizes(theme)

export default theme;
