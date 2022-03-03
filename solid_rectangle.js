const solidLines = function (column) {
    return "*".repeat(column);
};

const solidRectangle = function (row, column) {
    let structure = "";
    for (let i = 0; i < row; i++) {
        structure += solidLines(column) + "\n";
    }
    return structure;
};

const row = 7;
const column = 20;

console.log(solidRectangle(row, column));