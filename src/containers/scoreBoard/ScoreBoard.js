import React from "react";
import { useState } from "react";
import ScoreLine from "../../components/scoreBoard/ScoreLine";
import stryleModule from "./scoreBoard.module.css";

const initialState = [
  { name: "اسم شرکت کننده", score: "150", room: "ترمینال" },
  {
    name: " اسم شرکت کننده خیلی طولانییییییییییییییییییییییییییی",
    score: "100",
    room: "ترمینال",
  },
  { name: "اسم شرکت کننده", score: "90", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  {
    name: " اسم شرکت کننده که اسم بلد نبوده بذاره",
    score: "84",
    room: "ترمینال",
  },
  { name: "اسم شرکت کننده که مرض داشته", score: "84", room: "ترمینال" },
  { name: "اسم", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "الگوریتم" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
  { name: "اسم شرکت کننده", score: "84", room: "ترمینال" },
];

function ScoreBoard() {
  const [linesInfos, setLinesInfos] = useState(initialState);
  let rank = 0;
  return (
    <section>
      <div className={`${stryleModule.table}`}>
        <ScoreLine
          name="شرکت کننده"
          score="امتیاز"
          room="روم"
          rank="رتبه"
          isHeader={true}
        />
        {linesInfos.map((lineInfo) => {
          rank++;
          return (
            <ScoreLine
              name={lineInfo.name}
              score={lineInfo.score}
              room={lineInfo.room}
              rank={rank}
            />
          );
        })}
      </div>
    </section>
  );
}
export default ScoreBoard;
