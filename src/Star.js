import React from "react";

export const Star = ({ rating, maxRating, onRate }) => {
  return (
    <div className="star_container">
      {Array(maxRating)
        .fill(null)
        .map((el, i) => (
          <div
            className="star"
            onClick={() => {
              onRate?.(i + 1);
            }}
            style={{
              fill: rating > i ? "var(--color)" : undefined
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
