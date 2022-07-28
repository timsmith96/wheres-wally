import styled from 'styled-components';
import styles from './ToFindBar.module.css';

const StyledDiv = styled.div`
  height: 12vh;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 10px;
  align-items: center;
`;

const StyledImgContainer = styled.div`
  height: 55px;
  width: 55px;
  display: ${(props) => (props.isFound ? 'none' : 'block')};
`;

const StyledImagesContainer = styled.div`
  display: flex;
  gap: 30px;
  align-self: flex-start;
`;

export default function ToFindBar({ found }) {
  const characters = ['wally', 'wizard', 'wilma'];

  const foundArray = found.map((character) => {
    return character.name;
  });

  const toFindIcons = characters.map((character) => {
    const isFound = foundArray.includes(character);
    return (
      <StyledImgContainer key={character} isFound={isFound}>
        <img
          className={styles.img}
          src={require(`../../img/to-find-${character}.${
            character === 'wilma' ? 'png' : 'jpg'
          }`)}
          alt={`${character}`}
        />
      </StyledImgContainer>
    );
  });

  return (
    <StyledDiv>
      <h2>To find:</h2>
      <StyledImagesContainer>{toFindIcons}</StyledImagesContainer>
    </StyledDiv>
  );
}
