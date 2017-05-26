import DefaultButton from './DefaultButton';

const ExtendedButon = DefaultButton.extend`
  background: midnightblue;
  font-size: 4rem;
  color: white;
  &:hover { text-shadow: 0 0 4px white; }
`;

export default ExtendedButon;

