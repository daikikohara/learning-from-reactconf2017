import styled from 'styled-components';
import DefaultButton from './DefaultButton';

const ThemedButton = styled(DefaultButton)`
  background: ${props => props.theme.main};
`;

ThemedButton.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

export default ThemedButton;

