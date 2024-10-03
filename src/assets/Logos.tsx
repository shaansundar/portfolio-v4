import React from "react";

type Props = {
  icon?: string;
  className?: string;
};

const Logos = (props: Props) => {
  const logos: { [key: string]: JSX.Element } = {
    // Add index signature to allow indexing with a string parameter
    rage: (
      <svg
        className={props.className}
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.926 15.9007C35.5073 12.2931 34.0085 8.8963 31.626 6.1552C29.2436 3.41415 26.0886 1.45679 22.5746 0.539659C25.6055 1.53095 28.2976 3.35257 30.3449 5.79749C32.3922 8.2424 33.7126 11.2126 34.1561 14.3705C30.4686 11.3535 24.5048 8.513 18.8798 10.2775C21.3562 12.525 21.9437 15.3239 19.3178 17.7336C22.1798 12.9611 16.4882 10.8542 13.6405 8.6608C11.3408 6.8874 12.7196 4.69577 14.4948 3.1602C16.4431 1.47325 19.3322 0.390069 21.4824 0.276519C17.4056 -0.496671 11.2507 0.305359 8.29132 3.26834C5.33194 6.2313 7.39016 10.2973 10.9948 13.5685C10.9948 13.5685 6.43134 17.9066 3.79998 21.0643C1.16862 24.2219 7.264 28.8268 7.264 28.8268C14.3326 23.6001 19.7774 27.895 22.4033 32.9991C19.6115 33.8765 16.6408 34.0207 13.7771 33.4177C10.9134 32.8148 8.25309 31.4851 6.05202 29.5565C3.85095 27.6279 2.18323 25.1653 1.20929 22.4056C0.235351 19.646 -0.0120269 16.6821 0.490955 13.7992C-0.119199 16.3595 -0.16116 19.0225 0.36802 21.6008C0.8972 24.1791 1.98468 26.6102 3.55401 28.7232C5.12335 30.8363 7.13645 32.5799 9.45181 33.8317C11.7672 35.0834 14.3286 35.8128 16.956 35.9686C19.5835 36.1244 22.2132 35.7029 24.6602 34.7336C27.1073 33.7643 29.3124 32.2708 31.1205 30.3581C32.9286 28.4453 34.2958 26.1598 35.126 23.6621C35.9562 21.1644 36.2293 18.5152 35.926 15.9007ZM11.5319 17.4362L9.00863 17.256L12.8457 13.8587L11.5319 17.4362Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.97554 18.4709C6.74179 16.5515 8.72613 14.5924 9.76245 13.5849C7.04638 13.4984 4.60607 12.3936 4.81333 9.1728C4.99928 7.065 5.76464 5.04958 7.02475 3.34961C5.6973 4.34865 4.5114 5.52303 3.49945 6.8407C0.545482 10.6922 0.0858953 16.7137 4.97554 18.4709Z"
          fill="currentColor"
        />
      </svg>
    ),
    biconomy: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className={props.className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.6447 15.0113C28.2955 13.6935 28.7495 12.0407 28.7495 9.98371C28.7495 7.16175 27.6214 4.60737 25.5724 2.79062C23.5508 0.99797 20.8156 0.050622 17.6626 0.050622L6.79742 0C4.70024 0 3 1.70024 3 3.79742V36H22.0072C29.1047 36 33.2532 30.0797 33.2532 24.7395C33.2532 20.6825 31.001 16.9703 27.6455 15.0113H27.6447ZM17.6618 2.82758C22.7625 2.82758 25.9726 5.88496 25.9726 9.98371C25.9726 15.4846 21.8272 18.0004 17.6329 18.0004C13.6924 18.0004 10.447 14.755 10.447 9.72497V6.94802C10.447 5.12483 9.35663 3.48807 7.66924 2.94891V2.82758H17.661H17.6618Z"
          fill="currentColor"
        />
      </svg>
    ),
    trufin: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className={props.className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.6166 0H0.382738C0.171358 0 0 0.173551 0 0.387636V4.36402C0 4.57811 0.171358 4.75166 0.382738 4.75166H32.8134C32.937 4.75166 33.0531 4.69119 33.1249 4.58928L35.9281 0.61288C36.109 0.356311 35.9279 0 35.6166 0Z"
          fill="currentColor"
        />
        <path
          d="M35.5248 6.73155H12.3482C12.1368 6.73155 11.9654 6.9051 11.9654 7.11919V11.0956C11.9654 11.3097 12.1368 11.4832 12.3482 11.4832H32.7086C32.8319 11.4832 32.9477 11.423 33.0196 11.3215L35.8359 7.3451C36.0175 7.08864 35.8365 6.73155 35.5248 6.73155Z"
          fill="currentColor"
        />
        <path
          d="M29.1668 13.4631H12.3482C12.1368 13.4631 11.9654 13.6366 11.9654 13.8507V17.8271C11.9654 18.0412 12.1368 18.2148 12.3482 18.2148H26.3415C26.4646 18.2148 26.5802 18.1547 26.6521 18.0535L29.4774 14.0772C29.6596 13.8207 29.4787 13.4631 29.1668 13.4631Z"
          fill="currentColor"
        />
        <path
          d="M5.22601 35.6116V7.11919C5.22601 6.9051 5.39737 6.73155 5.60875 6.73155H9.33035C9.54173 6.73155 9.71308 6.9051 9.71308 7.11919V30.3119C9.71308 30.3924 9.68832 30.471 9.64224 30.5366L5.92065 35.8363C5.70463 36.1439 5.22601 35.9891 5.22601 35.6116Z"
          fill="currentColor"
        />
      </svg>
    ),
    ethernaut: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.9801 37H14.5224L18.1922 31.4727C19.7679 29.0883 22.6199 27.6433 25.6914 27.6433H37V37H36.9801ZM1 1H36.9801L30.7773 10.3748H1V1ZM15.2604 15.6493C16.9956 13.0482 20.1069 11.4586 23.4776 11.4586H30.159L13.1463 37H1.03989L15.2604 15.6493Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0.0940889"
          stroke-miterlimit="10"
        />
      </svg>
    ),
  };

  return props.icon ? logos[props.icon] : Object.values(logos);
};

export default Logos;
