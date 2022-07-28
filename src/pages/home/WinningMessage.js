import { useState } from 'react';
import styled from 'styled-components';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../firebase/config';
import { useHistory } from 'react-router-dom';

const StyledDiv = styled.div`
  height: 12vh;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  height: 50px;
  width: 50px;
`;

const Styledh3 = styled.h3`
  display: flex;
  align-items: center;
`;

const StyledForm = styled.form`
  padding: 5px;
  display: flex;
  gap: 5px;
`;

const StyledBtn = styled.button`
  font-family: Poppins, sans-serif;
  background: #fff;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #fee2e2;
  }
`;

const StyledInput = styled.input`
  outline: 1px solid #000;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  font-family: Poppins, sans-serif;
`;

export default function WinningMessage({ timeTaken }) {
  const [userName, setUserName] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, 'highscores', userName), {
      timeTaken,
    });

    history.push('/highscores');
  };
  return (
    <StyledDiv>
      <Styledh3>
        <StyledImage src={require('../../img/winner.png')} alt="" />
        Congratulations - you found everyone in a time of {timeTaken}
      </Styledh3>
      <p>
        To enter the leaderboards, please enter you name and click submit.
        Thanks for playing!
      </p>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="user-name">Name:</label>
        <StyledInput
          utocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          type="text"
          id="user-name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <StyledBtn type="submit">Submit</StyledBtn>
      </StyledForm>
    </StyledDiv>
  );
}
