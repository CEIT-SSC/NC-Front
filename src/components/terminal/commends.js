const commands = {
  sayhello: {
    description: "says Hello to the presented name .",
    usage: "sayhello <string> ",
    fn: function () {
      return `hello ${Array.from(arguments).join(" ")}`;
    },
  },
};

export { commands };
