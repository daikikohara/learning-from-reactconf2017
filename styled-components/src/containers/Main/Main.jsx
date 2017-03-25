import React from 'react';
import {Container, Buttons} from './components';
import {DefaultButton, BigButton} from '../../components/Buttons';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDefaultButtonActive: false,
      isBigButtonActive: false,
    };
  }

  toggleDefaultButton() {
    this.setState({
      isDefaultButtonActive: !this.state.isDefaultButtonActive,
    });
  }

  toggleBigButton() {
    this.setState({
      isBigButtonActive: !this.state.isBigButtonActive,
    });
  }

  render() {
    return (
      <Container>
        <Buttons>
          <DefaultButton
            onClick={() => this.toggleDefaultButton()}
            active={this.state.isDefaultButtonActive}
          >
            Default Button
          </DefaultButton>
          <BigButton
            onClick={() => this.toggleBigButton()}
            active={this.state.isBigButtonActive}
          >
            Big Button
          </BigButton>
        </Buttons>
      </Container>
    );
  }
}

export default Main;

