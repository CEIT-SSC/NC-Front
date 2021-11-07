import styleModul from "./ScoreLine.module.css";

function ScoreLine({ name, score, room, rank, isHeader = false }) {
  return (
    <div
      className={
        isHeader
          ? `${styleModul.header} ${styleModul.linescore}`
          : `${styleModul.linescore}`
      }
    >
      <span className={`${styleModul.leftSide}`}>
        <span>{score}</span>
        <span className={``}>{room}</span>
      </span>
      <span className={`${styleModul.rightSide}`}>
        <span>{name}</span>
        <span>{rank}</span>
      </span>
    </div>
  );
}

export default ScoreLine;
