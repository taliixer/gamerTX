import * as React from "react"
const SvgLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <path
      stroke="#CA234F"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M17.938 14.75C7.313 23.25 6.25 34.938 14.75 49.813m22.313-9.563c10.624-8.5 11.687-19.959 3.187-34.834M27.5 2a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm0 9.563a15.937 15.937 0 1 0 0 31.874 15.937 15.937 0 0 0 0-31.874Z"
    />
  </svg>
)
export default SvgLogo
