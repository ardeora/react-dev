import defaultTheme from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const Button = {
  variants: {
    navlink: (props: StyleFunctionProps) => {
      window.abc = props;
      return {
        ...defaultTheme.components.Button.variants.solid(props),
        bg: 'none',
      };
    },
  },
};

export default Button;
