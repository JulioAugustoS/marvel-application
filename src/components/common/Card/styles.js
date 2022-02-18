import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% / 4 - 17px);
  height: 430px;
  background: ${(props) => props.color || "#FFF"};
  margin-bottom: 27px;
  border-radius: 8px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% / 3 - 17px);
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: calc(100% / 2 - 17px);
  }

  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const Top = styled.img`
  width: 100%;
  height: 300px;
  resize: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Bottom = styled.div`
  height: calc(430px - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  p {
    font-size: 2.4rem;
    color: #fff;
    text-align: center;
  }
`;
