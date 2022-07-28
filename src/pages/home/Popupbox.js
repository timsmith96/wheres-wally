import styled from 'styled-components';

const StyledPopupBox = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  border: 1px solid black;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  z-index: 2;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  border-bottom: 1px solid #000;
  text-decoration: ${(props) => (props.isFound ? 'line-through' : 'none')};
  pointer-events: ${(props) => (props.isFound ? 'none' : 'auto')};
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    background: #fee2e2;
  }
`;

export default function PopupBox({ left, top, onClick, found }) {
  const characters = ['wally', 'wizard', 'wilma'];

  // mapping over found from props to create an array containing just found characters names instead of the objects they are coming in as
  const foundArray = found.map((character) => {
    return character.name;
  });

  const styledParagraphs = characters.map((character) => {
    const isFound = foundArray.includes(character);
    return (
      <StyledParagraph
        onClick={(e) => onClick(e.target.id)}
        key={character}
        id={character}
        isFound={isFound}
      >
        {character}
      </StyledParagraph>
    );
  });

  return (
    <StyledPopupBox left={left} top={top}>
      {styledParagraphs}
    </StyledPopupBox>
  );
}
