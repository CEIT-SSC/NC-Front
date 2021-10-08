import { useReducer, useState } from "react";
import { CD, LS, LS_all, PWD, RM, MKDIR, TOUCH, CAT } from ".actions";

const FOLDER = "folder";
const FILE = "file";

let initilDirectories = {
  ssc: {
    type: FOLDER,
    children: {
      NC: {
        type: FOLDER,
        children: {
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

/* a costum hook that handels operations like "cd" , 'ls '  and ... 
  also contains path of working. */
function useTerminal() {
  /* simplify the path. 'tss/../tss/../tss/./../tss' whould be 'tss'
   this method uses path of this terminal . so if curretn path is 'ssc/NC' and pathToCheck is 'tss/../tss' then if would be 
   simplified as 'ssc/NC/tss' */
  function simplifyPath(pathToCheck) {
    const pathToCheckArray = pathToCheck.split("/");
    let currentPathArray = path.split("/");
    for (let directory of pathToCheckArray) {
      if (directory === ".") continue;
      else if (directory === "..") {
        if (currentPathArray.length > 1) currentPathArray.pop();
      } else {
        currentPathArray.push(directory);
      }
    }
    return currentPathArray.join("/");
  }

  /* 
  checks if this directory or file exists. if this path does exist then would return {ok:true, body: simplifiedPath}
  else would return {ok:false, body: the_file_that_wasent_found}.
  this method strats from currentPath to check the path.
  */
  function doesExist(pathToCheck) {
    const pathToCheckArray = simplifyPath(pathToCheck).split("/").slice(1); // the slice(1) is for passing the 'ssc' which makes trouble
    let currentDirectory = direcories.ssc;
    let pathQueried = ["ssc"];
    for (let directory of pathToCheckArray) {
      if (
        currentDirectory.type === FOLDER &&
        directory in currentDirectory.children
      ) {
        currentDirectory = currentDirectory.children[directory];
        pathQueried.push(directory); // this array is used for printing the path that the file hasent been found
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

  /* 
   starts from currentPath and return the Folder or File that is specified by pathToCheck
    would returen {ok: true , body: directory_or_file_obj} if found the target .
    else would return {ok: false, body: reason_of_failier}
  */
  function getDirectory(pathToCheck) {
    const res = doesExist(pathToCheck);
    let directory;
    if (res.ok) {
      const pathToCheckArray = simplifyPath(res.body).split("/").slice(1);
      let currentDirectory = direcories.ssc;
      for (directory of pathToCheckArray) {
        currentDirectory = currentDirectory.children[directory];
      }
      return { ok: true, body: currentDirectory };
    }
    return { ok: false, body: res.body };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case CD:
        let res = doesExist(action.payload); // check if this path does exist
        if (res.ok) {
          setResponse({ ok: true, body: res.body });
          setPath(res.body);
        } else {
          setResponse({ ok: false, body: res.body });
        }
        return state; // nothing to do with state in this action

      case PWD:
        setResponse({ ok: true, body: path });
        return state; // nothing to do with state in this action

      case LS: // if valid path would return {ok:true, body: array_of_files_and_Folders_contained} else {ok:false, body: reason_of_failier}
        let targetDirectory = getDirectory(action.payload);
        if (targetDirectory.ok) {
          let resArray = [];
          if (targetDirectory.body.type === FOLDER) {
            for (let child in targetDirectory.body.children)
              if (!child.startsWith(".")) resArray.push(child);
          }
          setResponse({ ok: true, body: resArray });
        } else setResponse({ ok: false, body: targetDirectory.body });
        return state; // nothing to do with state in this action

      case LS_all: // if valid path would return {ok:true, body: array_of_files_and_Folders_contained} else {ok:false, body: reason_of_failier}
        targetDirectory = getDirectory(action.payload);
        if (targetDirectory.ok) {
          let resArray = [];
          if (targetDirectory.body.type === FOLDER) {
            for (let child in targetDirectory.body.children)
              resArray.push(child);
          }
          setResponse({ ok: true, body: resArray });
        } else setResponse({ ok: false, body: targetDirectory.body });
        return state; // nothing to do with state in this action

      case RM:
        res = doesExist(action.payload);
        if (res.ok) {
          let pathToCheckArray = res.body.split("/").slice(1);
          let targetToRemove = pathToCheckArray.pop();
          let newState = { ...state };
          let currentDirectory = newState.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.children[child];
          }
          delete currentDirectory.children[targetToRemove];
          setResponse({ ok: true, body: "deleted" });
          return newState; // new state after removing the file or directory
        } else {
          setResponse({ ok: false, body: res.body });
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
            currentDirectory = currentDirectory.children[child];
          }
          currentDirectory.children[nameOfFolderToBuild] = {
            type: FOLDER,
            children: {},
          };
          setResponse({ ok: true, body: "added" });
          return newState; // new state after removing the file or directory
        } else {
          setResponse({ ok: false, body: res.body });
          return state; // no change happend
        }

      case TOUCH:
        pathToMake = action.payload.split("/");
        nameOfFolderToBuild = pathToMake.pop();
        res = doesExist(pathToMake.join("/"));
        if (res.ok) {
          let pathToCheckArray = res.body.split("/").slice(1);
          let newState = { ...state };
          let currentDirectory = newState.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.children[child];
          }
          currentDirectory.children[nameOfFolderToBuild] = {
            type: File,
            content: "",
          };
          setResponse({ ok: true, body: "added" });
          return newState; // new state after removing the file or directory
        } else {
          setResponse({ ok: false, body: res.body });
          return state; // no change happend
        }

      case CAT:
        targetDirectory = getDirectory(action.payload);
        if (targetDirectory.ok) {
          if (targetDirectory.body.type === FILE) {
            setResponse({ ok: true, body: targetDirectory.body.content });
          } else {
            setResponse("not a FILE");
          }
        } else setResponse({ ok: false, body: targetDirectory.body });
        return state; // nothing to do with state in this action

      default:
        throw new Error("invalid action");
    }
  };
  const [response, setResponse] = useState({ ok: true, body: "" });
  const [path, setPath] = useState("ssc");
  const [direcories, dispatch] = useReducer(reducer, initilDirectories);

  return { response, dispatch };
}

export default useTerminal;
