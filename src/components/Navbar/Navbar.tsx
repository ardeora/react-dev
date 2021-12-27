import React, { useState } from 'react';
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
  Text,
  Collapse,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { GlobalNOCLogo } from '../Logo';
import { HiOutlineMoon, HiOutlineSun, HiMenuAlt3, HiOutlineX } from 'react-icons/hi';

import { css, cx } from '@emotion/css';

export const Navbar: React.FC = () => {
  const logoType = useBreakpointValue<'small' | 'large'>({ base: 'small', md: 'large' });
  const sizeType = useBreakpointValue({ base: 'none', sm: 'flex' });
  const mainBG = useColorModeValue('gray.200', 'gray.900');
  const { colorMode, toggleColorMode } = useColorMode();

  const [menuOpen, setMenuOpen] = useState(true);
  const theme = useTheme();
  const styles = getStyles(theme, colorMode);

  return (
    <Box bg={mainBG} h="60px">
      <Container p="16px 32px" maxW="1280px" h="100%">
        <Flex h="100%">
          <GlobalNOCLogo variant={logoType} />
          <Text sx={{ whiteSpace: 'nowrap' }} fontWeight={'bold'} fontSize={'xl'} lineHeight={'28px'} ml={'8px'}>
            Map Builder
          </Text>
          <Spacer />
          <HStack display={sizeType} spacing="10px">
            <Menu>
              <MenuButton as={Button} variant="navlink" rightIcon={<ChevronDownIcon />}>
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
              <MenuButton as={Button} variant="navlink" rightIcon={<ChevronDownIcon />}>
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

            <Button className={cx(styles.themeIconContainer)} onClick={toggleColorMode} variant={'unstyled'}>
              {colorMode === 'light' ? <HiOutlineSun size="20px" /> : <HiOutlineMoon size="20px" />}
            </Button>
          </HStack>

          <HStack display={useBreakpointValue({ base: 'flex', sm: 'none' })}>
            <Button
              className={cx(styles.hamburgerContainer)}
              onClick={() => setMenuOpen(!menuOpen)}
              variant={'unstyled'}
            >
              {menuOpen ? <HiOutlineX size="24px" /> : <HiMenuAlt3 size="24px" />}
            </Button>
          </HStack>
        </Flex>
      </Container>
      <Collapse in={menuOpen}>
        <Box bg={mainBG}>
          <Box p={'20px 20px'}>
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h1>Infrastructure</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                  <Button variant={'navlink'} textAlign={'left'} w={'100%'} display={'block'}>Node</Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Collapse>
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
      display: flex !important;
      &:hover {
        background-color: ${colorMode == 'light' ? colors.gray[300] : colors.gray[800]};
      }
      justify-content: center;
      align-items: center;
    `,
    hamburgerContainer: css`
      display: flex !important;
      &:hover {
        background-color: ${colorMode == 'light' ? colors.gray[300] : colors.gray[800]};
      }
    `,
  };
};
