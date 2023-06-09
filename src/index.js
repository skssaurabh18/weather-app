import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
   MuiThemeProvider,
   createTheme,
   CssBaseline,
} from "@material-ui/core";
// import theme from "theme";
import FiraCode from 'assets/fonts/FiraCode-Regular.ttf';
const theme = createTheme({
  typography: {
    fontFamily:
      '"Fira Code", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [FiraCode],
      },
    },
  },
});

ReactDOM.render(
   <React.StrictMode>
      <MuiThemeProvider theme={theme}>
         <CssBaseline />
         <App />
      </MuiThemeProvider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
