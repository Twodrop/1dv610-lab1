
const alphabet = require('./alphabet')

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