import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import breakpoints from './breakpoints';

const overrides = {
  colors,
  breakpoints,
};

export default extendTheme(overrides);
