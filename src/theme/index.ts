import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import breakpoints from './breakpoints';
import Button from './components/Button';

const overrides = {
  colors,
  breakpoints,
  components: {
    Button,
  },
  shadows: {
    // outline: '0 0 0 3px rgba(0, 146, 127, 0.5)',
  },
};

export default extendTheme(overrides);
