export default function sortHighscores(highscores) {
  console.log('sorting highscores');
  return highscores.sort((a, b) => {
    return (
      new Date('1970/01/01 ' + a.data().timeTaken) -
      new Date('1970/01/01 ' + b.data().timeTaken)
    );
  });
}

// '1970/01/01 ' +
