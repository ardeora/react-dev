import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Flex,
  Button,
  Spacer,
  HStack,
  useBreakpointValue,
  useColorModeValue,
  useColorMode,
  useTheme,
  Center,
  ColorMode,
  WithCSSVar,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { GlobalNOCLogo } from '../Logo';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

import { css, cx } from '@emotion/css';

export const Navbar: React.FC = () => {
  const logoType = useBreakpointValue<'small' | 'large'>({ base: 'small', md: 'large' });
  const mainBG = useColorModeValue('gray.200', 'gray.900');
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const styles = getStyles(theme, colorMode);

  return (
    <Box bg={mainBG} h="60px">
      <Container p="16px 32px" maxW="1280px" h="100%">
        <Flex h="100%">
          <GlobalNOCLogo variant={logoType} />
          <Spacer />
          <HStack spacing="10px">
            <Menu>
              <MenuButton as={Button} variant="link" rightIcon={<ChevronDownIcon />}>
                Infrastructure
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} variant="link" rightIcon={<ChevronDownIcon />}>
                Admin
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Center onClick={toggleColorMode} className={cx(styles.themeIconContainer)} h="100%">
              {colorMode === 'light' ? <HiOutlineSun size="20px" /> : <HiOutlineMoon size="20px" />}
            </Center>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

const getStyles = (theme: WithCSSVar<any>, colorMode: ColorMode) => {
  const { colors } = theme;
  return {
    themeIconContainer: css`
      width: 28px;
      cursor: pointer;
      border-radius: ${theme.radii['md']};
      &:hover {
        background-color: ${colorMode == 'light' ? colors.gray[300] : colors.gray[800]};
      }
    `,
  };
};
