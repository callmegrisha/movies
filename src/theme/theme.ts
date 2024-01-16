import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    app: {
      red: string;
      darkBlue: string;
      greyishBlue: string;
      semiDarkBlue: string;
      pureWhite: string;
    };
  }
  interface ThemeOptions {
    app?: {
      red?: string;
      darkBlue?: string;
      greyishBlue?: string;
      semiDarkBlue?: string;
      pureWhite?: string;
    };
  }

  interface TypographyVariants {
    headingL: React.CSSProperties;
    headingM: React.CSSProperties;
    headingS: React.CSSProperties;
    headingXS: React.CSSProperties;
    bodyM: React.CSSProperties;
    bodyS: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headingL?: React.CSSProperties;
    headingM?: React.CSSProperties;
    headingS?: React.CSSProperties;
    headingXS?: React.CSSProperties;
    bodyM?: React.CSSProperties;
    bodyS?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headingL: true;
    headingM: true;
    headingS: true;
    headingXS: true;
    bodyM: true;
    bodyS: true;
  }
}

const theme = createTheme({
  app: {
    red: '#fc4747',
    darkBlue: '#10141e',
    greyishBlue: '#5a698f',
    semiDarkBlue: '#161D2f',
    pureWhite: '#fff',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: {
          color: themeParam.app.pureWhite,
          backgroundColor: themeParam.app.darkBlue,
        },
      }),
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: 300,
          color: '#fff',
          '::placeholder': {
            color: 'rgba(255, 255, 255, 0.5)',
          },
          '&::before': {
            borderBottom: 'none',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: 'none',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid #fc4747',
          },
          '&::after': {
            borderBottom: '2px solid #fc4747',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Outfit',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    headingL: {
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: -0.5,
      color: '#fff',
    },
    headingM: {
      fontSize: 24,
      fontWeight: 300,
      color: '#fff',
    },
    headingS: {
      fontSize: 24,
      fontWeight: 500,
      color: '#fff',
    },
    headingXS: {
      fontSize: 18,
      fontWeight: 500,
      color: '#fff',
    },
    bodyM: {
      fontSize: 15,
      fontWeight: 300,
      color: '#fff',
    },
    bodyS: {
      fontSize: 13,
      fontWeight: 300,
      color: 'rgba(255, 255, 255, 0.75)',
    },
  },
});

export default theme;
