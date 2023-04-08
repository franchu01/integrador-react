import styled from "styled-components";

export const LogBigContainer = styled.div`
  display: flex;
  border-radius: 8px;
  position: fixed;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const LogContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #edf2f4;
  padding: 30px;
  border-radius: 12px;
  width: 35%;
  gap: 5px;

  h2 {
    color: #ba181b;
  }
`;

export const ExitContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  font-weight: bold;
  color: #ba181b;

  :hover {
    transform: scale(1.2);
  }
`;

export const RelativeContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

// #ba181b
// #edf2f4
// #0b090a
