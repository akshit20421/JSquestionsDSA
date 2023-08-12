const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    let dimensions, values;

    rl.question('Enter the dimensions (e.g., "5 5"): ', (dimInput) => {
        dimensions = dimInput.split(' ').map(Number);
        rl.question('Enter the values (e.g., "1 2 3"): ', (valInput) => {
            values = valInput.split(' ').map(Number);
            rl.close();
            processData(dimensions, values);
        });
    });
}

function processData(dimensions, values) {
    // Your data processing logic here
    const [rows, cols] = dimensions;
    console.log(`Dimensions: rows=${rows}, cols=${cols}`);
    console.log(`Values: [${values.join(', ')}]`);
}

main();

