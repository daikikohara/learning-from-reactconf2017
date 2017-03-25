import React from 'react';
import {Container, Buttons, GreenButtons} from './components';
import {DefaultButton, BigButton, ThemedButton} from '../../components/Buttons';

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
        <GreenButtons>
          <ThemedButton>
            Green Button
          </ThemedButton>
        </GreenButtons>
        <Buttons>
          <ThemedButton>
            Default Themed Button
          </ThemedButton>
        </Buttons>
      </Container>
    );
  }
}

export default Main;

