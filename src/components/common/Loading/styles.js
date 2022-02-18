import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.color || "#FFF"};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    color: #fff;
  }
`;
