import React from 'react';
import {Container, Buttons, GreenButtons} from './components';
import {
  DefaultButton,
  BigButton,
  ExtendedButton,
  ThemedButton,
} from '../../components/Buttons';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDefaultButtonActive: false,
      isBigButtonActive: false,
      isExtendedButtonActive: false,
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

  toggleExtendedButton() {
    this.setState({
      isExtendedButtonActive: !this.state.isExtendedButtonActive,
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
          <ExtendedButton
            onClick={() => this.toggleExtendedButton()}
            active={this.state.isExtendedButtonActive}
          >
            Extended Button
          </ExtendedButton>
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

