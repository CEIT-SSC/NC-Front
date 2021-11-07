function scoreLine(name, score, room, rank) {
  return (
    <div>
      <span className="righSide">
        <span>{rank}</span>
        <span>{name}</span>
      </span>

      <span className="leftSide">
        <span>{room}</span>
        <span>{score}</span>
      </span>
    </div>
  );
}

export default scoreLine;
