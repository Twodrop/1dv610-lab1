
const alphabet = require('./alphabet')
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

function print2DArray (array) {
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array[i].length; y++) {
            const element = array[i][y];
            process.stdout.write(element == 1 ? "██" : "  ");
        }
        process.stdout.write("\n")

    }
}

print2DArray(alphabet["a"])



const rl = readline.createInterface({ input, output });

rl.question('Enter name: ', (answer) => {
  const name = answer.split('');

  name.forEach((e) => {
    print2DArray(alphabet[e])
    process.stdout.write("\n")
  });
  
  rl.close();
});