import React from 'react';
import {ThemeProvider} from 'styled-components';
import Buttons from './Buttons';

const theme = {
  main: 'mediumseagreen',
};

const GreenButtons = props => {
  return (
    <ThemeProvider theme={theme}>
      <Buttons>
        {props.children}
      </Buttons>
    </ThemeProvider>
  );
};

GreenButtons.propTypes = {
  children: React.PropTypes.element,
};

export default GreenButtons;

