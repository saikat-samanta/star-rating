import React from "react";

export const StarWithJS = ({ rating, maxRating, onRate }) => {
  const [hoverVal, setHoverVal] = React.useState(0);

  return (
    <div style={{ display: "flex" }}>
      {Array(maxRating)
        .fill(null)
        .map((el, i) => (
          <div
            onClick={() => {
              onRate?.(i + 1);
            }}
            style={{
              fill: rating > i || hoverVal > i ? "orange" : undefined
            }}
            onMouseEnter={() => {
              setHoverVal(i + 1);
            }}
            onMouseLeave={() => {
              setHoverVal(0);
            }}
          >
            <svg height="25" width="23" data-rating="1">
              <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
          </div>
        ))}
    </div>
  );
};
