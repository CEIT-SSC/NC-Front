import { useReducer, useState } from "react";
import { CD, LS, LS_all, PWD, RM, MKDIR, TOUCH } from ".actions";

const FOLDER = "folder";
const FILE = "file";
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

function useTerminal() {
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

  function getDirectory(pathToCheck) {
    const res = doesExist(pathToCheck);
    let directory;
    if (res.ok) {
      const pathToCheckArray = simplifyPath(res.body).split("/");
      let currentDirectory = direcories.ssc;
      for (directory of pathToCheckArray) {
        currentDirectory = currentDirectory.childs[directory];
      }
      return { ok: true, body: currentDirectory };
    }
    return { ok: false, body: res.body };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case CD:
        let res = doesExist(action.payload);
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

      case LS:
        let targetDirectory = getDirectory(action.payload);
        if (targetDirectory.ok) {
          let resArray = [];
          if (targetDirectory.body.type === FOLDER) {
            for (let child in targetDirectory.body.childs)
              if (!child.startsWith(".")) resArray.push(child);
          }
          setResponse(resArray);
        } else setResponse(targetDirectory.body);
        return state; // nothing to do with state in this action

      case LS_all:
        targetDirectory = getDirectory(action.payload);
        if (targetDirectory.ok) {
          let resArray = [];
          if (targetDirectory.body.type === FOLDER) {
            for (let child in targetDirectory.body.childs) resArray.push(child);
          }
          setResponse(resArray);
        } else setResponse(targetDirectory.body);
        return state; // nothing to do with state in this action

      case RM:
        res = doesExist(action.payload);
        if (res.ok) {
          let pathToCheckArray = res.body.split("/");
          let targetToRemove = pathToCheckArray.pop();
          let newState = { ...state };
          let currentDirectory = newState.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.childs[child];
          }
          delete currentDirectory.childs[targetToRemove];
          setResponse("deleted");
          return newState; // new state after removing the file or directory
        } else {
          setResponse(res.body);
          return state; // no change happend
        }
      case MKDIR:
        let pathToMake = action.payload.split("/");
        let nameOfFolderToBuild = pathToMake.pop();
        res = doesExist(pathToMake.join("/"));
        if (res.ok) {
          let pathToCheckArray = res.body.split("/");
          let newState = { ...state };
          let currentDirectory = newState.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.childs[child];
          }
          currentDirectory.childs[nameOfFolderToBuild] = {
            type: FOLDER,
            childs: {},
          };
          setResponse("added");
          return newState; // new state after removing the file or directory
        } else {
          setResponse(res.body);
          return state; // no change happend
        }
      case "cat":
        return { ...state }; // todo
      case TOUCH:
        pathToMake = action.payload.split("/");
        nameOfFolderToBuild = pathToMake.pop();
        res = doesExist(pathToMake.join("/"));
        if (res.ok) {
          let pathToCheckArray = res.body.split("/");
          let newState = { ...state };
          let currentDirectory = newState.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.childs[child];
          }
          currentDirectory.childs[nameOfFolderToBuild] = {
            type: File,
            content: "",
          };
          setResponse("added");
          return newState; // new state after removing the file or directory
        } else {
          setResponse(res.body);
          return state; // no change happend
        }
      default:
        throw new Error("invalid action");
    }
  };
  const [response, setResponse] = useState("");
  const [path, setPath] = useState("ssc");
  const [direcories, dispatch] = useReducer(reducer, initilDirectories);

  return { response, dispatch };
}

export default useTerminal;
