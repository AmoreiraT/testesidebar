/* eslint-disable max-len */
import React from 'react';


function SignificationFlag(props) {
  return (
    <svg
      width={25}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_481_27437)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75 9a.75.75 0 110 1.5.75.75 0 010-1.5zm15.75 9h-1.875c-2.874 0-6.876-3-9.75-3H6a1.5 1.5 0 00-1.5 1.5v6.75a.75.75 0 01-1.5 0V16.5a3 3 0 013-3h2.25c2.874 0 6.876 3 9.75 3h1.5A1.5 1.5 0 0021 15V7.5A1.5 1.5 0 0019.5 6h-2.25c-2.874 0-6.876-3-9.75-3H6a1.5 1.5 0 00-1.5 1.5v2.25a.75.75 0 01-1.5 0V4.5a3 3 0 013-3h1.875c2.874 0 6.876 3 9.75 3H19.5a3 3 0 013 3V15a3 3 0 01-3 3zM3.75 1.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
          fill="#DDE4FF"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_481_27437"
          x={-2}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_481_27437"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_481_27437"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SignificationFlag;
