import styled from "styled-components";

const Input = styled.input`
  width: 251px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${(props) => props.borderColor};
  padding: 0 20px;
  font-size: 1.6rem;

  &::placeholder {
    color: ${(props) => props.borderColor};
  }
`;

export { Input };
