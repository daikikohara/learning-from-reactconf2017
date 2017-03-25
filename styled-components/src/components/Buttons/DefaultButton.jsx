import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.active ? 'gray' : 'white'};
  color: ${props => props.active ? 'white' : 'black'};
  margin: 1rem;
  font-size: 2rem;
  padding: 0.25rem 1rem;
  border: 2px solid ${props => props.active ? 'transparent' : 'black'};
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;

