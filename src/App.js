import {RouterProvider} from "react-router-dom";
import router from './Routes/mainRoutes.js';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { purple } from '@mui/material/colors';
import { ContextProvider } from "./Compenents/Auth/auth.js";

const theme = createTheme({
  palette: {
    primary: {
      main: '#847979'
    },
    secondary: purple
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight : 400,
    fontWeightRegular : 500,
    fontWeightMedium : 600,
    fontWeightBold : 700,
  }
});
function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
      </ThemeProvider>
    </ContextProvider>
    
  );
}

export default App;
