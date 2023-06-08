import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";


const styles = {
      global: (props:any) => ({
          body: {
            bg: mode('#EDEEF7', '#202023')(props)
          }
      })
  }


const config = { 
    initialColorMode: 'light',
    useSystemColorMode: true
}
    
const fonts = {
    body: "Athiti, sans-serif",
    heading: "Athiti, sans-serif",
    mono: "Athiti, sans-serif",
} 
    
const theme = extendTheme({  fonts, styles, config, })

export default theme