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

  /* simplify the path. 'tss/../tss/../tss/./../tss' whould be 'tss'
   this method uses path of this terminal . so if curretn path is 'ssc/NC' and pathToCheck is 'tss/../tss' then if would be 
   simplified as 'ssc/NC/tss' */
  function simplifyPath(pathToCheck) {
    console.log("-----------enter simplify");
    pathToCheck = path + "/" + pathToCheck;
    let pathToCheckArray = pathToCheck.split("/");
    console.log(" path to check ", pathToCheck);
    console.log(" path array to check ", pathToCheckArray);

    let simplifiedArray = [];
    for (let directory of pathToCheckArray) {
      if (directory === ".") continue;
      else if (directory === "..") {
        if (simplifiedArray.length > 1) simplifiedArray.pop();
      } else {
        simplifiedArray.push(directory);
      }
    }
    console.log("resualt ", simplifiedArray.join("/"));
    console.log("-----------out of simplify");
    return simplifiedArray.join("/");
  }

  /* 
  checks if this directory or file exists. if this path does exist then would return {ok:true, body: simplifiedPath}
  else would return {ok:false, body: the_file_that_wasent_found}.
  this method strats from currentPath to check the path.
  */
  function doesExist(pathToCheck) {
    let pathToCheckArray = simplifyPath(pathToCheck).split("/"); // the slice(1) is for passing the 'ssc' which makes trouble
    const firstDirectory = pathToCheckArray[0];
    pathToCheckArray = pathToCheckArray.slice(1);
    let currentDirectory = directories.ssc;
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
    return {
      ok: true,
      body:
        firstDirectory +
        (pathToCheckArray.length > 0
          ? "/" + pathToCheckArray.join("/")
          : pathToCheckArray.join("/")),
    };
  }

  /* 
   starts from currentPath and return the Folder or File that is specified by pathToCheck
    would returen {ok: true , body: directory_or_file_obj} if found the target .
    else would return {ok: false, body: reason_of_failier}
  */
  function getDirectory(pathToCheck) {
    console.log("enter getDirectory");
    const res = doesExist(pathToCheck);
    console.log("res of doesExist ", res);
    let directory;
    if (res.ok) {
      const pathToCheckArray = res.body.split("/").slice(1);
      console.log("pathToCheckArray", pathToCheckArray);
      let currentDirectory = directories.ssc;
      for (directory of pathToCheckArray) {
        if (directory === "") {
          continue;
        }
        currentDirectory = currentDirectory.children[directory];
      }
      console.log("out getDirectory");
      return { ok: true, body: currentDirectory };
    }
    console.log("out getDirectory");
    return { ok: false, body: res.body };
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
        console.log("----- enter mkdir");
        let pathToMake = arguments[0].split("/");
        let nameOfFolderToBuild = pathToMake.pop();
        let newPathkhoooooodaaaaaaaaaaa = ".";
        if (pathToMake.length > 0)
          newPathkhoooooodaaaaaaaaaaa = pathToMake.join("/");
        let res = doesExist(newPathkhoooooodaaaaaaaaaaa);
        console.log(res);
        if (res.ok) {
          let pathToCheckArray = res.body.split("/").slice(1);
          let currentDirectory = directories.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.children[child];
          }
          currentDirectory.children[nameOfFolderToBuild] = {
            type: FOLDER,
            children: {},
          };
          console.log(directories);
          setDirectories({ ...directories });
          console.log("------- out mkdir");
          return "added";
        } else {
          console.log(directories);
          console.log("------- out mkdir");
          return res.body;
        }
      },
    },

    ls: {
      description: "prints a list of what a directory contains",
      usage: " ls | ls newFolder ",
      fn: function () {
        let inputPath = ".";
        if (arguments.length > 0) inputPath = arguments[0];

        let targetDirectory = getDirectory(inputPath);
        if (targetDirectory.ok) {
          let resArray = [];
          if (targetDirectory.body.type === FOLDER) {
            for (let child in targetDirectory.body.children)
              if (!child.startsWith(".")) resArray.push(child);
          }
          return resArray;
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
          return res.body;
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
        console.log("----- enter mkdir");
        let pathToMake = arguments[0].split("/");
        let nameOfFolderToBuild = pathToMake.pop();
        let newPathkhoooooodaaaaaaaaaaa = ".";
        if (pathToMake.length > 0)
          newPathkhoooooodaaaaaaaaaaa = pathToMake.join("/");
        let res = doesExist(newPathkhoooooodaaaaaaaaaaa);
        console.log(res);
        if (res.ok) {
          let pathToCheckArray = res.body.split("/").slice(1);
          let currentDirectory = directories.ssc;
          for (let child of pathToCheckArray) {
            currentDirectory = currentDirectory.children[child];
          }
          currentDirectory.children[nameOfFolderToBuild] = {
            type: File,
            content: "",
          };
          console.log(directories);
          setDirectories({ ...directories });
          console.log("------- out mkdir");
          return "added";
        } else {
          console.log(directories);
          console.log("------- out mkdir");
          return res.body;
        }
      },
    },
  };

  const [path, setPath] = useState("ssc");

  return commands;
}

export default useTerminal;
