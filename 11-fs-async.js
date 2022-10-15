const { readFile, writeFile, write } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("error");
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("error");
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result for async: ${first} | ${second}`,
      (err, result) => {
        if (err) {
          console.log("error");
          return;
        }
        console.log(result);
      }
    );
  });
});

console.log("VAMOSSS");
