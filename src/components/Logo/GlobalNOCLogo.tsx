import React, { FC } from 'react';
import { useColorMode, useTheme } from '@chakra-ui/react';

export interface GlobalNOCLogoProps {
  variant?: 'small' | 'large';
  theme?: 'light' | 'dark';
}

export const GlobalNOCLogo: FC<GlobalNOCLogoProps> = ({ variant = 'large', theme }) => {
  const chakraTheme = useTheme();
  const { colorMode } = useColorMode();

  const getStyle = () => {
    let color;
    if (theme) {
      color = theme === 'light' ? chakraTheme.colors.gray[800] : 'white';
    } else {
      color = colorMode === 'light' ? chakraTheme.colors.gray[800] : 'white';
    }

    return `
      .st0{fill:${color};}
      .st1{fill:#D91E34;}
      .st2{fill:#6EC6D3;}
      .st3{fill:#B3C635;}
      .st4{fill:#00927F;}
      `;
  };

  console.log('THEME', theme);

  return (
    <svg
      version="1.1"
      id="logo-group"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox={`0 0 ${variant === 'large' ? '356' : '73'} 68.3`}
      enableBackground="new 0 0 356 68.3"
      xmlSpace="preserve"
    >
      <style type="text/css">{getStyle()}</style>
      {variant === 'large' && (
        <g id="text">
          <path
            className="st0"
            d="M106,52.2c-2.9,0-5.5-0.5-7.8-1.5c-2.4-1-4.3-2.2-6.1-4c-1.6-1.7-3-3.7-3.8-5.9s-1.4-4.8-1.4-7.4v-0.1
		c0-2.6,0.5-5,1.4-7.3c1-2.4,2.2-4.3,4-6.1c1.7-1.7,3.7-3.1,6.1-4.1c2.4-1,4.8-1.5,7.7-1.5c1.6,0,3.1,0.1,4.3,0.4
		c1.4,0.2,2.5,0.5,3.6,1c1.1,0.4,2.2,1,3.2,1.6c1,0.6,2,1.4,3,2.1l-4.1,4.8c-0.7-0.6-1.4-1.1-2.1-1.6c-0.7-0.5-1.5-0.9-2.4-1.2
		c-0.9-0.4-1.7-0.6-2.6-0.7c-1-0.2-2-0.2-3.2-0.2c-1.7,0-3.2,0.4-4.7,1c-1.5,0.7-2.7,1.6-3.8,2.9c-1.1,1.1-1.9,2.6-2.5,4.1
		c-0.6,1.6-0.9,3.2-0.9,5v0.1c0,1.9,0.2,3.6,0.9,5.2s1.5,3,2.6,4.2c1.1,1.1,2.4,2.1,4,2.7c1.5,0.6,3.2,1,5.1,1c1.7,0,3.3-0.2,5-0.7
		c1.5-0.5,2.9-1.2,4-2v-7.1h-9.7v-5.6h15.6v15.5c-0.9,0.7-1.9,1.5-3,2.2c-1.1,0.7-2.2,1.4-3.6,1.9c-1.2,0.5-2.6,1-4.1,1.2
		C109.1,52.1,107.6,52.2,106,52.2z"
          />
          <path className="st0" d="M126.8,14.7h6.4v36.8h-6.4V14.7z" />
          <path
            className="st0"
            d="M151.6,52.2c-2.1,0-4.1-0.4-5.8-1.1c-1.9-0.7-3.3-1.7-4.7-3.1c-1.4-1.2-2.4-2.9-3.1-4.6
		c-0.7-1.7-1.1-3.6-1.1-5.6v-0.1c0-2,0.4-3.8,1.1-5.6c0.7-1.7,1.7-3.2,3.1-4.6c1.4-1.4,2.9-2.4,4.7-3.1s3.7-1.1,5.9-1.1
		c2.1,0,4.1,0.4,5.9,1.1s3.3,1.7,4.7,3.1c1.4,1.4,2.4,2.9,3.1,4.6c0.7,1.7,1.1,3.6,1.1,5.6v0.1c0,2-0.4,3.8-1.1,5.6
		c-0.7,1.7-1.7,3.2-3.1,4.6c-1.4,1.4-2.9,2.4-4.7,3.1C155.7,51.8,153.8,52.2,151.6,52.2z M151.7,46.7c1.2,0,2.5-0.2,3.5-0.7
		c1-0.5,1.9-1.1,2.6-1.9c0.7-0.7,1.2-1.7,1.6-2.9c0.4-1.1,0.6-2.2,0.6-3.3v-0.1c0-1.2-0.2-2.4-0.6-3.5c-0.4-1.1-1-2-1.7-2.9
		c-0.7-0.7-1.6-1.5-2.6-1.9c-1-0.5-2.1-0.7-3.5-0.7c-1.2,0-2.4,0.2-3.5,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.7-1.2,1.7-1.6,2.9
		c-0.4,1.1-0.6,2.2-0.6,3.5v0.1c0,1.2,0.2,2.4,0.6,3.5c0.4,1.1,1,2,1.7,2.9c0.7,0.9,1.6,1.5,2.6,2C149.4,46.5,150.5,46.7,151.7,46.7
		z"
          />
          <path
            className="st0"
            d="M185.7,52.2c-2.2,0-4.2-0.5-5.7-1.5s-2.7-2.1-3.7-3.5v4.3h-6.4V14.7h6.4v13.6c1-1.5,2.2-2.7,3.8-3.7
		c1.5-1,3.3-1.5,5.6-1.5c1.6,0,3.2,0.4,4.8,1c1.5,0.6,3,1.6,4.1,2.7c1.2,1.2,2.2,2.7,3,4.5c0.7,1.7,1.1,3.8,1.1,6.2v0.1
		c0,2.4-0.4,4.3-1.1,6.2c-0.7,1.7-1.7,3.3-2.9,4.5c-1.2,1.2-2.6,2.1-4.1,2.7C189,51.8,187.4,52.2,185.7,52.2z M184.3,46.6
		c1.1,0,2.1-0.2,3.1-0.6c1-0.4,1.9-1,2.5-1.7c0.7-0.7,1.2-1.7,1.7-2.7c0.4-1.1,0.6-2.4,0.6-3.7v-0.1c0-1.4-0.2-2.6-0.6-3.6
		c-0.4-1.1-1-2-1.7-2.9c-0.7-0.7-1.6-1.4-2.5-1.7c-1-0.4-2-0.6-3.1-0.6c-1.1,0-2.1,0.2-3.1,0.6c-1,0.4-1.9,1-2.6,1.9
		c-0.7,0.7-1.4,1.7-1.7,2.9c-0.5,1.1-0.6,2.4-0.6,3.6v0.1c0,1.4,0.2,2.6,0.6,3.6c0.5,1.1,1,2,1.7,2.9c0.7,0.7,1.6,1.4,2.6,1.7
		C182.2,46.5,183.2,46.6,184.3,46.6z"
          />
          <path
            className="st0"
            d="M219.2,51.6v-3.5c-1,1.1-2.1,2.1-3.6,2.9c-1.5,0.7-3.2,1.1-5.3,1.1c-1.4,0-2.6-0.1-3.8-0.5
		c-1.2-0.4-2.2-0.9-3.1-1.6s-1.6-1.6-2.1-2.7s-0.9-2.4-0.9-3.7v-0.1c0-1.5,0.2-2.9,0.9-4c0.6-1.1,1.4-2.1,2.4-2.9
		c1-0.7,2.2-1.4,3.6-1.7c1.4-0.4,2.9-0.5,4.5-0.5c1.7,0,3.1,0.1,4.3,0.4c1.1,0.2,2.4,0.5,3.3,0.9v-0.5c0-2-0.6-3.3-1.7-4.5
		c-1.1-1-2.9-1.5-5.1-1.5c-1.6,0-3,0.1-4.2,0.5c-1.2,0.4-2.5,0.7-3.7,1.2l-1.7-5.1c1.5-0.7,3.1-1.2,4.7-1.7c1.6-0.4,3.6-0.6,5.8-0.6
		c4.1,0,7.2,1,9.2,3.1s3,5,3,8.7v16.4H219.2z M219.3,39.9c-0.7-0.4-1.7-0.6-2.9-0.7c-1.1-0.2-2.2-0.4-3.5-0.4c-2,0-3.6,0.4-4.7,1.1
		c-1.1,0.7-1.7,1.9-1.7,3.1v0.1c0,1.4,0.5,2.4,1.6,3.1c1,0.7,2.4,1,3.8,1c1,0,2-0.1,3-0.4c0.9-0.2,1.6-0.6,2.4-1.2
		c0.6-0.5,1.2-1.1,1.6-1.9c0.4-0.7,0.5-1.5,0.5-2.4v-1.5H219.3z"
          />
          <path className="st0" d="M230.3,14.7h6.4v36.8h-6.4V14.7z" />
          <path className="st0" d="M242.3,14.7h9.5L267,34.2V14.7h10v36.8h-8.9l-15.7-20.2v20.2h-10V14.7z" />
          <path
            className="st0"
            d="M299.7,52.3c-2.9,0-5.5-0.5-7.9-1.5c-2.4-1-4.5-2.4-6.2-4.1s-3.1-3.7-4.1-6.1c-1-2.4-1.5-4.8-1.5-7.4v-0.1
		c0-2.6,0.5-5.1,1.5-7.4c1-2.4,2.4-4.3,4.2-6.1c1.7-1.7,3.8-3.1,6.3-4.1c2.4-1,5.1-1.5,7.9-1.5s5.5,0.5,7.9,1.5
		c2.5,1,4.5,2.4,6.2,4.1s3.1,3.7,4.1,6.1s1.5,4.8,1.5,7.4v0.1c0,2.6-0.5,5.1-1.5,7.4c-1,2.4-2.4,4.3-4.2,6.1
		c-1.7,1.7-3.8,3.1-6.3,4.1C305.2,51.8,302.5,52.3,299.7,52.3z M299.7,43.1c1.4,0,2.7-0.2,3.8-0.7c1.1-0.5,2.1-1.2,3-2.1
		c0.9-0.9,1.5-2,1.9-3.1c0.5-1.2,0.7-2.5,0.7-3.8v-0.1c0-1.4-0.2-2.6-0.7-3.8s-1.1-2.2-2-3.1s-1.9-1.6-3-2.2
		c-1.1-0.5-2.5-0.9-3.8-0.9c-1.4,0-2.7,0.2-3.8,0.7s-2.1,1.2-3,2.1c-0.9,0.9-1.5,2-1.9,3.1c-0.5,1.2-0.6,2.5-0.6,3.8v0.1
		c0,1.4,0.2,2.6,0.7,3.8s1.1,2.2,2,3.1s1.9,1.6,3,2.2C297.1,42.9,298.4,43.1,299.7,43.1z"
          />
          <path
            className="st0"
            d="M339.8,52.3c-2.6,0-5.1-0.5-7.4-1.4c-2.4-1-4.3-2.2-6.1-4c-1.7-1.7-3.1-3.7-4.1-6.1c-1-2.4-1.5-4.8-1.5-7.6
		v-0.1c0-2.6,0.5-5.2,1.5-7.4c1-2.4,2.4-4.3,4.1-6.1s3.7-3.1,6.1-4.1c2.4-1,5-1.5,7.8-1.5c1.9,0,3.6,0.1,5.2,0.5
		c1.5,0.4,3,0.9,4.2,1.6c1.2,0.7,2.5,1.5,3.5,2.5s2,2,2.7,3.1l-7.7,5.9c-1-1.4-2.2-2.4-3.5-3.1c-1.2-0.7-2.7-1.1-4.6-1.1
		c-1.2,0-2.5,0.2-3.6,0.7c-1.1,0.5-2,1.2-2.7,2.1c-0.7,0.9-1.4,1.9-1.9,3.1c-0.5,1.2-0.6,2.5-0.6,3.8v0.1c0,1.4,0.2,2.6,0.6,3.8
		c0.5,1.2,1,2.2,1.9,3.1c0.7,0.9,1.7,1.6,2.7,2.1c1.1,0.5,2.2,0.7,3.6,0.7c1,0,1.9-0.1,2.6-0.4c0.7-0.2,1.5-0.5,2.1-0.9
		c0.6-0.4,1.2-0.9,1.9-1.4c0.6-0.5,1.1-1.1,1.7-1.9l7.7,5.5c-0.9,1.2-1.9,2.4-2.9,3.3s-2.2,1.9-3.5,2.6c-1.4,0.7-2.7,1.4-4.5,1.7
		C343.6,52.1,341.7,52.3,339.8,52.3z"
          />
        </g>
      )}

      <g id="logo">
        <path
          className="st1"
          d="M14.7,56.5c0,0.6-0.5,1.1-1.1,1.1H8c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		          c0.6,0,1.1,0.5,1.1,1.1C14.7,54.7,14.7,56.5,14.7,56.5z"
        />
        <path
          className="st1"
          d="M7.8,22.1c0,0.6-0.5,1.1-1.1,1.1H1.1c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		          c0.6,0,1.1,0.5,1.1,1.1C7.8,20.3,7.8,22.1,7.8,22.1z"
        />
        <path
          className="st2"
          d="M71.8,30.5h-2c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h1.3C71.4,27.8,71.7,29.1,71.8,30.5z"
        />
        <path
          className="st3"
          d="M61.6,44.5c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		        c0.6,0,1.1,0.5,1.1,1.1V44.5z"
        />
        <path
          className="st2"
          d="M43.8,31.6c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		        c0.6,0,1.1,0.5,1.1,1.1V31.6z"
        />
        <path
          className="st4"
          d="M65,55.2c-1,1.3-2.1,2.6-3.2,3.7h-3.1c-0.6,0-1.1-0.5-1.1-1.1V56c0-0.6,0.5-1.1,1.1-1.1h5.6
		C64.5,54.9,64.8,55,65,55.2z"
        />
        <path
          className="st3"
          d="M29.1,18.1c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1H28
		c0.6,0,1.1,0.5,1.1,1.1V18.1z"
        />
        <path
          className="st1"
          d="M19.2,45.3c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V45.3z"
        />
        <path
          className="st3"
          d="M67.6,32.6c0,0.6-0.5,1.1-1.1,1.1H61c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1L67.6,32.6L67.6,32.6z"
        />
        <path
          className="st1"
          d="M22.9,11.3c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V9.6c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V11.3z"
        />
        <path
          className="st3"
          d="M64.1,11.9h-4.7c-0.6,0-1.1-0.5-1.1-1.1V9c0-0.6,0.5-1.1,1.1-1.1h0.9C61.6,9.1,62.9,10.5,64.1,11.9z"
        />
        <path
          className="st4"
          d="M19.4,24.1c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V24.1z"
        />
        <path
          className="st1"
          d="M59.3,28.7c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V28.7z"
        />
        <path
          className="st1"
          d="M40.6,56.2c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V56.2z"
        />
        <path
          className="st3"
          d="M44.6,20.3c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V20.3z"
        />
        <path
          className="st4"
          d="M29.2,5.7c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V3.9c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V5.7z"
        />
        <path
          className="st4"
          d="M44.6,48.7c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V48.7z"
        />
        <path
          className="st4"
          d="M50.6,59.8c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V58c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V59.8z"
        />
        <path
          className="st1"
          d="M35.9,25.3c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V25.3z"
        />
        <path
          className="st2"
          d="M14.4,34.3c0,0.6-0.5,1.1-1.1,1.1H7.7c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V34.3z"
        />
        <path
          className="st1"
          d="M68.2,18.2c-0.1,0.1-0.3,0.1-0.4,0.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h3.7
		C66.7,15.6,67.5,16.9,68.2,18.2z"
        />
        <path
          className="st1"
          d="M58.3,6.3c-0.2,0.3-0.5,0.4-0.9,0.4h-5.6c-0.6,0-1.1-0.5-1.1-1.1V3.9c0-0.6,0.5-1.1,1.1-1.1h0.8
		C54.6,3.7,56.5,4.9,58.3,6.3z"
        />
        <path
          className="st3"
          d="M58,20.6c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V20.6z"
        />
        <path
          className="st3"
          d="M54.4,64.5L53.6,65l-0.2,0.1c-1.7,0.9-3.4,1.7-5.3,2.3h-0.4c-0.6,0-1.1-0.5-1.1-1.1v-1.8
		c0-0.6,0.5-1.1,1.1-1.1h5.6C53.9,63.4,54.4,63.9,54.4,64.5z"
        />
        <path
          className="st4"
          d="M46,40c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V40z"
        />
        <path
          className="st3"
          d="M36.8,10.1c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V8.4c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V10.1z"
        />
        <path
          className="st3"
          d="M55.1,53.1c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1H54
		c0.6,0,1.1,0.5,1.1,1.1V53.1z"
        />
        <path
          className="st2"
          d="M29,58.5c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V58.5z"
        />
        <path
          className="st3"
          d="M24.7,31.5c0,0.6-0.5,1.1-1.1,1.1H18c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V31.5z"
        />
        <path
          className="st2"
          d="M52.4,2.6v0.2c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V1c0-0.5,0.3-0.9,0.7-1
		C47.8,0.6,50.1,1.5,52.4,2.6z"
        />
        <path
          className="st3"
          d="M71,42.5c-0.3,1.4-0.7,2.7-1.2,4h-0.5c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1
		C69.3,42.5,71,42.5,71,42.5z"
        />
        <path
          className="st1"
          d="M40.7,67.2c0,0.6-0.5,1.1-1.1,1.1H34c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1C40.7,65.4,40.7,67.2,40.7,67.2z"
        />
        <path
          className="st1"
          d="M50,45.8c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V44c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V45.8z"
        />
        <path
          className="st1"
          d="M58.5,37.2c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V37.2z"
        />
        <path
          className="st1"
          d="M40.7,3.1c0,0.6-0.5,1.1-1.1,1.1H34c-0.6,0-1.1-0.5-1.1-1.1V1.3c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1C40.7,1.3,40.7,3.1,40.7,3.1z"
        />
        <path
          className="st4"
          d="M34.9,16.4c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V16.4z"
        />
        <path
          className="st1"
          d="M59.2,61.3c-1.5,1.2-3.1,2.3-4.7,3.3l-1,0.6H53c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		C58.8,61.1,59,61.2,59.2,61.3z"
        />
        <path
          className="st1"
          d="M69.1,48.1c-0.6,1.4-1.3,2.7-2.1,4h-2.8c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1
		C64.2,48.1,69.1,48.1,69.1,48.1z"
        />
        <path
          className="st3"
          d="M34.9,39.7c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V38c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V39.7z"
        />
        <path
          className="st4"
          d="M49.4,25.5c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V25.5z"
        />
        <path
          className="st4"
          d="M55.5,12.7c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V12.7z"
        />
        <path
          className="st4"
          d="M70.7,24.6h-4.3c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h2.9C69.8,21.9,70.3,23.2,70.7,24.6z"
        />
        <path
          className="st1"
          d="M49.8,14.4c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V14.4z"
        />
        <path
          className="st2"
          d="M62.4,22.3c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V22.3z"
        />
        <path
          className="st4"
          d="M66,43c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V43z"
        />
        <path
          className="st1"
          d="M71.9,35.3c0,1.4-0.2,2.7-0.4,4h-4.2c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1
		C67.3,35.3,71.9,35.3,71.9,35.3z"
        />
        <path
          className="st4"
          d="M31,46.6c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V46.6z"
        />
        <path
          className="st2"
          d="M53.8,34.7c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V33c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V34.7z"
        />
        <path
          className="st2"
          d="M47.4,8.3c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1V6.5c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V8.3z"
        />
        <path
          className="st2"
          d="M58.7,51.1c0,0.6-0.5,1.1-1.1,1.1H52c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1C58.7,49.3,58.7,51.1,58.7,51.1z"
        />
        <path
          className="st1"
          d="M38.8,33.6c0,0.6-0.5,1.1-1.1,1.1h-5.6c-0.6,0-1.1-0.5-1.1-1.1v-1.8c0-0.6,0.5-1.1,1.1-1.1h5.6
		c0.6,0,1.1,0.5,1.1,1.1V33.6z"
        />
      </g>
    </svg>
  );
};
