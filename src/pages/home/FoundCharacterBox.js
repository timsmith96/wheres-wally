import styled from 'styled-components';

const StyledFoundCharacterBox = styled.div`
  position: absolute;
  height: ${(props) => props.height}%;
  width: ${(props) => props.width}%;
  border: 3px solid #000;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

export default function FoundCharacterBox({ left, top, height, width }) {
  return (
    <StyledFoundCharacterBox
      left={left}
      top={top}
      height={height}
      width={width}
    ></StyledFoundCharacterBox>
  );
}
