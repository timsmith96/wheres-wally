import styles from './Home.module.css';
import { useState } from 'react';
import PopupBox from './Popupbox';
import calcClickLocation from '../../logic/calcClickLocation';
import fetchBoxCoords from '../../logic/fetchBoxCoords';
import isClickInBox from '../../logic/isClickInBox';
import FoundCharacterBox from './FoundCharacterBox';
import DisplayMessage from './DisplayMessage';
import ToFindBar from './ToFindBar';
import { useEffect, useRef } from 'react';
import WinningMessage from './WinningMessage';
import msToTime from '../../logic/msToTime';

export default function Home() {
  const [displayBox, setDisplayBox] = useState(false);
  const [clickLocation, setClickLocation] = useState({});
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [displayMessage, setDisplayMessage] = useState('');
  const [currentCharacter, setCurrentCharacter] = useState('');
  const [characterFound, setCharacterFound] = useState(false);
  const [timeTaken, setTimeTaken] = useState('');

  const initialTime = useRef(performance.now());

  useEffect(() => {
    const timeInMs = performance.now() - initialTime.current;
    const humanTime = msToTime(timeInMs);
    setTimeTaken(humanTime);
  }, [foundCharacters]);

  const handleClick = (e) => {
    setDisplayBox(!displayBox);
    setClickLocation(calcClickLocation(e));
  };

  const handleCharacterClick = async (name) => {
    // get box coords from firestore
    const boxCoords = await fetchBoxCoords(name);
    setCurrentCharacter(name);
    // checking if where the user clicked in inside the box of selected character
    if (isClickInBox(boxCoords, clickLocation.x, clickLocation.y)) {
      setCharacterFound(true);
      const foundCharacter = { name, boxCoords };
      setDisplayBox(false);
      setFoundCharacters([...foundCharacters, foundCharacter]);
    } else {
      setCharacterFound(false);
    }
    setDisplayMessage(true);
    setTimeout(() => {
      setDisplayMessage(false);
      setDisplayBox(false);
    }, 3000);
  };

  const foundCharacterBoxes = foundCharacters.map((character) => {
    return (
      <FoundCharacterBox
        left={character.boxCoords.x1}
        top={character.boxCoords.y1}
        width={character.boxCoords.x2 - character.boxCoords.x1}
        height={character.boxCoords.y2 - character.boxCoords.y1}
        key={character.name}
      />
    );
  });

  return (
    <div>
      {foundCharacters.length === 3 ? (
        <WinningMessage timeTaken={timeTaken} />
      ) : (
        <ToFindBar found={foundCharacters} />
      )}
      <div className={styles['img-container']}>
        <div className={styles['img-wrapper']}>
          {displayMessage && (
            <DisplayMessage
              name={currentCharacter}
              toFind={3 - foundCharacters.length}
              success={displayMessage}
              found={characterFound}
            />
          )}
          <img
            onClick={handleClick}
            src={require('../../img/wally.jpg')}
            alt="wally"
          />
          {displayBox && (
            <PopupBox
              left={clickLocation.x}
              top={clickLocation.y}
              onClick={handleCharacterClick}
              found={foundCharacters}
            />
          )}
          {foundCharacterBoxes}
        </div>
      </div>
    </div>
  );
}
