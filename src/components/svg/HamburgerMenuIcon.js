import * as React from "react";

const SvgIconHamburger = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={17} {...props}>
        <path
            d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z"
            fill={props.fill || "#fff"}
            fillRule="evenodd"
        />
    </svg>
);

export default SvgIconHamburger;
