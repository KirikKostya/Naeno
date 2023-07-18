import React from 'react';

interface IEcologySvgProps{
    width?: string
    height?: string
}
const EcologySvg: React.FC<IEcologySvgProps> = (props) => {

    const {width, height} = props;
  return (
    <svg width="151" height="45" viewBox="0 0 151 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_459)">
    <path d="" fill="#79736D"/>
    </g>
    <defs>
    <clipPath id="clip0_2_459">
    <rect width="150" height="45" fill="white" transform="translate(0.970703)"/>
    </clipPath>
    </defs>
    </svg>

  )
}

export default EcologySvg;