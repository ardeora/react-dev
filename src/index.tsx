import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';

const myConfig = {
  components: {
    Button: {
      baseStyle: (props) => {
        console.log('Button baseStyle', props);
        return {
          borderRadius: props.colorMode === 'dark' ? 'lg' : 'sm',
        };
      },
    },
  },
};

const theme = extendTheme(myConfig);

console.log('THEME', theme);
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
