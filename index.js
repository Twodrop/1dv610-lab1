const alphabet = require("./alphabet");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

function print2DArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let y = 0; y < array[i].length; y++) {
      const element = array[i][y];
      let red = Math.round(230+(0.1*y));
      let green = 81+(1*y);
      let blue = 0;
      const color = `\x1b[38;2;${red};${green};${blue}m`
      process.stdout.write(element == 1 ? color + "██" : "  ");
    }
    process.stdout.write("\n");
  }
}

function mergeHorizontally(grids) {
  const gap = 1;
  const height = grids[0].length;
  const spacer = Array(gap).fill(0);
  const result = [];

  for (let row = 0; row < height; row++) {
    let merged = [];
    for (const grid of grids) {
      merged = merged.concat(grid[row], spacer);
    }
    result.push(merged);
  }

  return result;
}

const rl = readline.createInterface({ input, output });

rl.question("Enter name: ", (answer) => {
  const name = answer.toLowerCase().split("");

  let mergeArray = [];
  name.forEach((e) => mergeArray.push(alphabet[e]));
  mergeArray = mergeHorizontally(mergeArray);
  print2DArray(mergeArray);
  rl.close();
});


