import React, { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  pink, blue } from '@mui/material/colors';
import NavbardDestokp from './Nav/NavDestopk/NavbardDestokp';
import NavbardMovail from './Nav/NavMovail/NavbardMovail';


export default function Layauot({ children }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: pink[700],
            },
            secondary: {
                main: pink[200],
            },
            info: {
                main: blue[300]
            }
        },
    });
    const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1000px)');
    
    function handleMediaChange(event) {
      setIsDesktop(event.matches);
    }

    // Agregar un listener al cambio de tamaño de pantalla
    mediaQuery.addListener(handleMediaChange);

    // Inicializar el estado en función de la consulta de medios actual
    setIsDesktop(mediaQuery.matches);
    return () => {
        mediaQuery.removeListener(handleMediaChange);
      };
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <div>
            {isDesktop?<NavbardDestokp/>:<NavbardMovail />}
                <main>
                    {children}
                </main>

            </div>
        </ThemeProvider>
    )
}
