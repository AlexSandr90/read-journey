import React from 'react';
import { SvgIconType } from '../types/svgIconTypes';

const LogoImg: React.FC<SvgIconType> = ({
  width = 42,
  height = 17,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="42" height="17" fill="#E5E5E5" />
      <g id="Registration">
        <rect
          width="1280"
          height="800"
          transform="translate(-96 -72)"
          fill="#141414"
        />
        <rect
          id="Rectangle 28"
          x="-64"
          y="-40"
          width="600"
          height="736"
          rx="30"
          fill="#1F1F1F"
        />
        <g id="Logo">
          <g id="icon">
            <path
              id="Vector 7"
              d="M0 11V0H12.8903C14.6428 0 16.3497 0.558477 17.7633 1.59437C18.6084 2.21371 19.2833 3.0366 19.7252 3.98661L21.2165 7.19231C21.7922 5.78595 22.5143 4.44406 23.3707 3.18876L23.4446 3.08053C23.6905 2.72004 23.9717 2.38484 24.2838 2.07984L24.919 1.4592C25.333 1.05464 25.8242 0.737558 26.3634 0.526835L26.4183 0.505373C27.2728 0.171398 28.1822 0 29.0996 0H42V11H0Z"
              fill="#F9F9F9"
            />
            <rect
              id="Rectangle 30"
              y="13"
              width="42"
              height="4"
              fill="#F9F9F9"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoImg;
