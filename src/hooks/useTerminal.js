import { useState } from "react";

const FOLDER = "folder";
const FILE = "file";

/* a costum hook that handels operations like "cd" , 'ls '  and ... 
  also contains path of working. */
function useTerminal() {
  let initial = {
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

  const [directories, setDirectories] = useState(initial);
  const [path, setPath] = useState("ssc");

  /* simplify the path. 'tss/../tss/../tss/./../tss' whould be 'tss'
   this method uses path of this terminal . so if curretn path is 'ssc/NC' and pathToCheck is 'tss/../tss' then if would be 
   simplified as 'ssc/NC/tss' */
  function simplifyPath(pathToCheck) {
    pathToCheck = path + "/" + pathToCheck;
    let pathToCheckArray = pathToCheck.split("/");

    let simplifiedArray = [];
    for (let directory of pathToCheckArray) {
      if (directory === ".") continue;
      else if (directory === "..") {
        if (simplifiedArray.length > 1) simplifiedArray.pop();
      } else {
        simplifiedArray.push(directory);
      }
    }
    return simplifiedArray.join("/");
  }

  /* 
  checks if this directory or file exists. if this path does exist then would return {ok:true, body: simplifiedPath}
  else would return {ok:false, body: the_file_that_wasent_found}.
  this method strats from currentPath to check the path.
  */
  function doesExist(pathToCheck, mustBeFolder = true) {
    let pathToCheckArray = simplifyPath(pathToCheck).split("/"); // the slice(1) is for passing the 'ssc' which makes trouble
    const firstDirectory = pathToCheckArray[0];
    pathToCheckArray = pathToCheckArray.slice(1);
    let currentDirectory = directories.ssc;
    let pathQueried = ["ssc"];
    let directory;
    for (directory of pathToCheckArray) {
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
    if (currentDirectory.type === FOLDER || !mustBeFolder)
      return {
        ok: true,
        body:
          firstDirectory +
          (pathToCheckArray.length > 0
            ? "/" + pathToCheckArray.join("/")
            : pathToCheckArray.join("/")),
      };
    else {
      pathQueried.pop();
      return {
        ok: false,
        body:
          "there is no folder as '" +
          directory +
          "' in '" +
          pathQueried.join("/") +
          "'",
      };
    }
  }

  /* 
   starts from currentPath and return the Folder or File that is specified by pathToCheck
    would returen {ok: true , body: directory_or_file_obj} if found the target .
    else would return {ok: false, body: reason_of_failier}
  */
  function getDirectory(pathToCheck) {
    const res = doesExist(pathToCheck, false);
    let directory;
    if (res.ok) {
      const pathToCheckArray = res.body.split("/").slice(1);
      let currentDirectory = directories.ssc;
      for (directory of pathToCheckArray) {
        if (directory === "") {
          continue;
        }
        currentDirectory = currentDirectory.children[directory];
      }
      return { ok: true, body: currentDirectory };
    }
    return { ok: false, body: res.body };
  }

  function makeNewFileDirectory(dataOfObj, pathToMake) {
    pathToMake = pathToMake.split("/");
    let nameOfFolderToBuild = pathToMake.pop();
    let newPathkhoooooodaaaaaaaaaaa = ".";
    if (pathToMake.length > 0)
      newPathkhoooooodaaaaaaaaaaa = pathToMake.join("/");
    let res = doesExist(newPathkhoooooodaaaaaaaaaaa);
    if (res.ok) {
      let pathToCheckArray = res.body.split("/").slice(1);
      let currentDirectory = directories.ssc;
      for (let child of pathToCheckArray) {
        currentDirectory = currentDirectory.children[child];
      }
      currentDirectory.children[nameOfFolderToBuild] = dataOfObj;
      setDirectories({ ...directories });
      return "added";
    } else {
      return res.body;
    }
  }

  const commands = {
    sayhello: {
      description: "says Hello to the presented name .",
      usage: "sayhello <string> ",
      fn: function () {
        return `hello ${Array.from(arguments).join(" ")}`;
      },
    },

    pwd: {
      description: "returns the live path user is at",
      usage: " ",
      fn: function () {
        return path; // nothing to do with state in this action
      },
    },

    mkdir: {
      description: "creates a new directory",
      usage: "mkdir newFolder",
      fn: function () {
        return makeNewFileDirectory(
          {
            type: FOLDER,
            children: {},
          },
          arguments[0]
        );
      },
    },

    ls: {
      description: "prints a list of what a directory contains",
      usage: " ls | ls newFolder ",
      fn: function () {
        let inputPath = ".";
        let showAll = false;
        if (arguments.length > 0) {
          for (let arg of arguments) {
            if (arg === "-a" || arg === "--all") showAll = true;
            else {
              inputPath = arg;
            }
          }
        }

        let targetDirectory = getDirectory(inputPath);
        if (targetDirectory.ok) {
          let resArray = [];
          if (targetDirectory.body.type === FOLDER) {
            for (let child in targetDirectory.body.children)
              if (showAll || !child.startsWith(".")) {
                if (targetDirectory.body.children[child].type === FOLDER)
                  resArray.push("./" + child);
                else resArray.push(child);
              }
          }
          return resArray.join(" ");
        } else return targetDirectory.body;
      },
    },

    rm: {
      description: "removes a file or directory from memory",
      usage: " rm FileToRemove.txt ",
      fn: function () {
        let res = doesExist(arguments[0]);
        if (res.ok) {
          let pathToCheckArray = res.body.split("/").slice(1);
          let targetToRemove = pathToCheckArray.pop();
          let currentDirectory = directories.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.children[child];
          }
          delete currentDirectory.children[targetToRemove];
          setDirectories({ ...directories });
          return "deleted";
        } else {
          return res.body;
        }
      },
    },

    cd: {
      description: "changes the directory to the destinated directory",
      usage: " cd NC/newFolder",
      fn: function () {
        let inputPath = ".";
        if (arguments.length > 0) inputPath = arguments[0];
        let res = doesExist(inputPath); // check if this path does exist
        if (res.ok) {
          setPath(res.body);
          return "";
        } else {
          return res.body;
        }
      },
    },

    cat: {
      description: "prints details of a file",
      usage: " ",
      fn: function () {
        let targetDirectory = getDirectory(arguments[0]);
        if (targetDirectory.ok) {
          if (targetDirectory.body.type === FILE) {
            return targetDirectory.body.content;
          } else {
            return "not a FILE";
          }
        } else return targetDirectory.body;
      },
    },

    touch: {
      description: "creat new file",
      usage: "touch newFile.txt",
      fn: function () {
        return makeNewFileDirectory(
          { type: FILE, content: "new file created by touch" },
          arguments[0]
        );
      },
    },

    echo: {
      description: "prints the given string into terminal or given file",
      usage: 'echo "hello world" | echo "hello world" >> filePath.txt',
      fn: function () {
        let content = [];
        let filePath = "";
        let mustPrintToFile = false;
        let i;
        arguments[0] = arguments[0].slice(1);
        for (i = 0; i < arguments.length; i++) {
          if (arguments[i] === ">>") {
            mustPrintToFile = true;
            break;
          }
          content.push(arguments[i]);
        }

        if (!mustPrintToFile) {
          return content.join(" ").slice(0, -1);
        }
      },
    },
  };

  return commands;
}

export default useTerminal;
