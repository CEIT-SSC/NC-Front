import { useReducer, useState } from "react";

const FOLDER = "folder";
const FILE = "file";

function useTerminal() {
  let initilDirectories = {
    path: "ssc",
    ssc: {
      type: FOLDER,
      childs: {
        NC: {
          type: FOLDER,
          childs: {
            "welcome.txt": {
              type: FILE,
              content: "welcome to Noob Chalenge",
            },
            "tss.txt": {
              type: FILE,
              content:
                "tsssssssssssssssssssssssssss . What does it mean? Find it yourself !",
            },
          },
        },
      },
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "cd":
        return { ...state }; // todo
      case "pwd":
        return { ...state }; // todo
      case "ls":
        return { ...state }; // todo
      case "ls -a":
        return { ...state }; // todo
      case "rm":
        return { ...state }; // todo
      case "mkdir":
        return { ...state }; // todo
      case "cat":
        return { ...state }; // todo
      case "touch":
        return { ...state }; // todo
      default:
        throw new Error("invalid action");
    }
  };

  const [response, setresponse] = useState("");
  const [direcories, dispatch] = useReducer(reducer, initilDirectories);
  return { response, dispatch };
}

export default useTerminal;
