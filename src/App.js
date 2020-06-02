import React, { useState } from 'react';
import marked from 'marked';
import {
  Header, Global, Row,
  Col, SubHeader,
  StyledEditor, StyledPreview,
  Icons
} from './components/Styled';
import defaultText from './const';

function App() {
  const [rawText, setRawText] = useState(defaultText);
  const [whatIsFullScreen, setFullScreen] = useState('');
  const toggleEditor = () => !whatIsFullScreen ? setFullScreen('editor') : setFullScreen('');
  const togglePreview = () => !whatIsFullScreen ? setFullScreen('preview') : setFullScreen('');

  const changeHandler = ({target: {value}}) => setRawText(value);

  return (
    <div className="App">
      <Global />
      <Header>Simple Markdown Previewer</Header>
      <Row>
        <Col whatIsFullScreen={whatIsFullScreen}>
          <SubHeader>
            Editor
            <Icons onClick={toggleEditor}>
              {whatIsFullScreen === 'editor' ? <ion-icon name="arrow-back-outline" /> : <ion-icon name="expand-outline" />}
            </Icons>
          </SubHeader>
          {/* <StyledEditor contentEditable="true" id="editor" onInput={changeHandler}>{rawText}</StyledEditor> */}
          <StyledEditor id="editor" defaultValue={rawText} onChange={changeHandler}></StyledEditor>
        </Col>

        <Col whatIsFullScreen={whatIsFullScreen}>
          <SubHeader>
            Preview
            <Icons onClick={togglePreview}>
            {whatIsFullScreen === 'preview' ? <ion-icon name="arrow-forward-outline" /> : <ion-icon name="expand-outline" />}
            </Icons>
          </SubHeader>
          <StyledPreview id="preview" dangerouslySetInnerHTML={{__html: marked(rawText, {breaks: true})}}></StyledPreview>
        </Col>
      </Row>
    </div>
  );
}

export default App;
