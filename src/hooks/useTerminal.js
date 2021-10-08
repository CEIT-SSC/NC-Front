import { useReducer, useState } from "react";
import { CD, LS, LS_all, PWD } from ".actions";

const FOLDER = "folder";
const FILE = "file";

function useTerminal() {
  const [response, setResponse] = useState("");
  const [path, setPath] = useState("ssc");
  const [direcories, dispatch] = useReducer(reducer, initilDirectories);

  let initilDirectories = {
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
  function simplifyPath(pathToCheck) {
    const pathToCheckArray = pathToCheck.split("/");
    let currentPathArray = path.split("/");
    for (let directory of pathToCheckArray) {
      if (directory === ".") continue;
      else if (directory === ".." && currentPathArray.length > 1)
        currentPathArray.pop();
      else {
        currentPathArray.push(directory);
      }
    }
    return currentPathArray.join("/");
  }

  function doesExist(pathToCheck) {
    const pathToCheckArray = simplifyPath(pathToCheck).split("/");
    let currentDirectory = direcories.ssc;
    let pathQueried = ["ssc"];
    for (let directory of pathToCheckArray) {
      if (
        currentDirectory.type === FOLDER &&
        directory in currentDirectory.childs
      ) {
        currentDirectory = currentDirectory.childs[directory];
        pathQueried.push(directory);
      } else
        return {
          ok: false,
          body:
            "there is no '" +
            directory +
            "' in '" +
            pathQueried.join("/") +
            "'",
        };
    }
    return { ok: true, body: pathToCheckArray.join("/") };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case CD:
        const res = doesExist(action.payload);
        if (res.ok) {
          setResponse(res.body);
          setPath(res.body);
        } else {
          setResponse(res.body);
        }
        return state; // nothing to do with state in this action
      case PWD:
        setResponse(path);
        return state; // nothing to do with state in this action
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

  return { response, dispatch };
}

export default useTerminal;
