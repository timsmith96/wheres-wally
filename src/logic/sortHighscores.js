export default function sortHighscores(highscores) {
  return highscores.sort((a, b) => {
    return (
      new Date('1970/01/01 ' + a.data().timeTaken) -
      new Date('1970/01/01 ' + b.data().timeTaken)
    );
  });
}
