import React from "react";

const SlideButton = (props: {
  type: "prev" | "next";
  setProjectSlideFocusIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { type, setProjectSlideFocusIndex } = props;

  const handleClickSlide = () => {
    setProjectSlideFocusIndex((prev) =>
      type === "prev" ? (prev === 0 ? 2 : prev - 1) : prev === 2 ? 0 : prev + 1
    );
  };

  return (
    <a
      className={`portfolio-control-${type}`}
      role="button"
      data-bs-slide={type}
      onClick={handleClickSlide}
    >
      <svg width="40px" height="40px" viewBox="0 0 150 258">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id={`arrow-${type === "prev" ? "left" : "right"}`}
            fill="#FFFFFF"
            fillRule="nonzero"
          >
            {type === "prev" ? (
              <path
                d="M4.1,120.5 L121.9,4.5 C126.6,-0.2 134.2,-0.2 138.9,4.5 L146,11.6 C150.7,16.3 150.7,23.9 146,28.6 L43.7,129 L145.9,229.4 C150.6,234.1 150.6,241.7 145.9,246.4 L138.8,253.5 C134.1,258.2 126.5,258.2 121.8,253.5 L4,137.5 C-0.6,132.8 -0.6,125.2 4.1,120.5 Z"
                id="Shape"
              />
            ) : (
              <path
                d="M145.9,137.5 L28.1,253.5 C23.4,258.2 15.8,258.2 11.1,253.5 L4,246.4 C-0.7,241.7 -0.7,234.1 4,229.4 L106.3,129 L4.1,28.6 C-0.6,23.9 -0.6,16.3 4.1,11.6 L11.2,4.5 C15.9,-0.2 23.5,-0.2 28.2,4.5 L146,120.5 C150.6,125.2 150.6,132.8 145.9,137.5 Z"
                id="Shape"
              />
            )}
          </g>
        </g>
      </svg>
    </a>
  );
};

export default SlideButton;
