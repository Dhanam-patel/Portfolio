import React from "react";
import styled from "styled-components";

const Arrow = ({ isOpen, tooltipText }) => {
  return (
    <StyledWrapper>
      <div className="tooltip">
        <button>
          <span className={`arrow ${isOpen ? "rotate" : ""}`}>▼</span>
        </button>

        <div className="tooltiptext">{tooltipText}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  button {
    color: #6b7280;
    border: none;
    padding: 5px 10px;
    border-radius: 13px;
    font-size: 16px;
    background: transparent;
    cursor: pointer;
  }

  button:hover {
    background-color: #2a2c2f;
  }

  .arrow {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .arrow.rotate {
    transform: rotate(180deg);
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext {
    visibility: hidden;
    width: max-content;
    font-size: 12px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    padding: 6px 10px;
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 10;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export default Arrow;