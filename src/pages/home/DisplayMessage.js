import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${(props) => (props.found ? 'green' : 'red')};
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  width: 300px;
  margin: 0 auto;
  z-index: 5;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  color: #fff;
`;

const StyledSpan = styled.span`
  text-transform: capitalize;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DisplayMessage({ name, toFind, found }) {
  return (
    <StyledDiv found={found}>
      {found ? (
        <StyledContainer>
          <img src={require('../../img/success.png')} alt="happy robot" />
          <p>
            Astonishing! You found <StyledSpan>{name}</StyledSpan>. HUGE
            CONGRATULATIONS.{' '}
            {toFind === 0
              ? `You've found them all!`
              : `Only ${toFind} more to go...`}
          </p>
        </StyledContainer>
      ) : (
        <StyledContainer>
          <img src={require('../../img/fail.png')} alt="happy robot" />
          <p>
            That's not <StyledSpan>{name}</StyledSpan> - try again...
          </p>
        </StyledContainer>
      )}
    </StyledDiv>
  );
}
