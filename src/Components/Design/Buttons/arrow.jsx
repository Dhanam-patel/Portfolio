import React from 'react';
import styled from 'styled-components';

const Tooltip = (props) => {
  return (
    <StyledWrapper>
      <div className="tooltip">
        {/* <button>▲▼▽△</button> */}
        <button>{props.text}</button>
        <div className="tooltiptext">{props.tooltipText}</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .tooltip button {
    color: #6B7280;
    border: none;
    padding: 5px 10px;
    border-radius: 13px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s ease-out;
  }

  .tooltip button:hover {
    background-color: #2a2c2f;
    transform: scale(1.05);
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext {
    visibility: hidden;
    width: max-content;          /* auto width based on content */
    max-width: 160px;           /* optional safety */
    font-size: 12px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    padding: 6px 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;

    left: 50%;
    transform: translateX(-50%);   /* 🔥 perfect centering */

    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);   /* center arrow */
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }`;

export default Tooltip;
