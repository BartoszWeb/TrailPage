import styled from "styled-components";

export const StyledLogo = styled.a`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  max-height: 100%;
`;
export const FormContainer = styled.form`
  max-width: 600px;
  margin: 5em auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em 4em;
  box-shadow: 0 0 2em 0 #dadada;
  @media (max-width: 1100px) {
    width: 90%;
    padding: 2em;
    margin: 9em auto;
  }
`;

export const StyledParagraph = styled.h2`
  margin: 0.5em 0 1em 0;
  font-size: 1.3rem;
  font-weight: ${ ({ theme }) => theme.font.thin };
`;


export const FormButton = styled.button`
  margin: 1em 0;
  background-color: #ffde00;
  padding: 1em 2em;
  border-radius: 0.2em;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ffea58;
  }
`;

export const Error = styled.small`
  margin-top: 0.1em;
  margin-left: 2px;
  color: red;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 4em;
  border: 1px dashed #8c8c8c;
  border-radius: 4px;
  padding-left: 0.5em;

  :focus {
    border: 1px solid #ddb01a;
    outline: none;
  }

  :valid ~ label, :focus ~ label {
    transform: translateY(-15px);
    font-weight: 700;
    font-size: 0.7rem;
  }
`;

export const StyledTextArea = styled.textarea`
  font-family: Lato, sans-serif;
  width: 100%;
  height: 10em;
  border: 1px dashed #8c8c8c;
  border-radius: 4px;
  padding-left: 0.5em;
  padding-top: 1.3em;

  :focus {
    border: 1px solid #ddb01a;
    outline: none;
  }

  :valid ~ label, :focus ~ label {
    transform: translateY(-15px);
    font-weight: 700;
    font-size: 0.7rem;
  }
`;



export const FormLabel = styled.label`
  color: #515151;
  display: inline-block;
  padding: 0;
  border-radius: 0;
  font-weight: 300;
  position: absolute;
  pointer-events: none;
  left: 9px;
  top: 18px;
  will-change: transform;
  transition: all .3s ease;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 0.5em;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: calc(75 / 150 * 100%);
`;

export const LogoContainer = styled.div`
  width: 150px;
`;