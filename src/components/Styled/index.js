import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  :root {
    --subHeaderBG: lightblue;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
  }

  .App {
    max-width: min(1200px, 95%);
    margin: 0 auto;
  }
`;

export const Header = styled.h1`
  text-align: center;
`;

export const SubHeader = styled.h2`
  text-align: center;
  font-size: 2rem;
  padding: .5em;
  margin-bottom: 0;
  background: var(--subHeaderBG);
`;

export const Row = styled.div`
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Col = styled.div`
  margin-bottom: 50px;
  /* transition: 0.5s; */

  &:nth-child(1) {
    display: ${({whatIsFullScreen}) => whatIsFullScreen === 'preview' ? 'none' : 'flex'};
    flex-direction: column;
    @media (min-width: 800px) {
      width: ${({whatIsFullScreen}) => whatIsFullScreen === 'editor' ? '100%' : '49%'};
    }
  }
  &:nth-child(2) {
    display: ${({whatIsFullScreen}) => whatIsFullScreen === 'editor' ? 'none' : 'block'};
    @media (min-width: 800px) {
      width: ${({whatIsFullScreen}) => whatIsFullScreen === 'preview' ? '100%' : '49%'};
    }
  }
`;

export const StyledEditor = styled.textarea`
  resize: false;
  padding: 20px;
  width: 100%;
  flex-grow: 1;
  resize: none;
  flex-basis: 500px;
`;

export const StyledPreview = styled.div`
  border: 1px solid gray;
  padding: 20px;
  overflow-x: scroll;
`;

export const Icons = styled.span`
  float: right;
  cursor: pointer;
`;
