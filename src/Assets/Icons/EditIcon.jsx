import React from "react";

const EditIcon = ({ className }) => {
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_597_1884)">
          <path
            d="M7.33331 2.6665H2.66665C2.31302 2.6665 1.97389 2.80698 1.72384 3.05703C1.47379 3.30708 1.33331 3.64622 1.33331 3.99984V13.3332C1.33331 13.6868 1.47379 14.0259 1.72384 14.276C1.97389 14.526 2.31302 14.6665 2.66665 14.6665H12C12.3536 14.6665 12.6927 14.526 12.9428 14.276C13.1928 14.0259 13.3333 13.6868 13.3333 13.3332V8.6665"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3333 1.66665C12.5985 1.40144 12.9582 1.25244 13.3333 1.25244C13.7084 1.25244 14.0681 1.40144 14.3333 1.66665C14.5985 1.93187 14.7475 2.29158 14.7475 2.66665C14.7475 3.04173 14.5985 3.40144 14.3333 3.66665L7.99998 9.99999L5.33331 10.6667L5.99998 7.99999L12.3333 1.66665Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_597_1884">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default EditIcon;
