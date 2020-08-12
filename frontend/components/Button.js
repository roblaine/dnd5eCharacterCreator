import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.1em 0.2em;
  margin: 0 0.5em;
  border: 1px solid black;
  border-radius: 0.2em;

  a:hover,
  :hover {
    cursor: pointer;
  }
`;

class Button extends React.Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        <Link href={this.props.path}>
          <a>{this.props.text}</a>
        </Link>
      </StyledButton>
    );
  }
}

export default Button;
