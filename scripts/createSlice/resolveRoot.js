const path = require("path");

module.exports = (...segments) =>
    path.resolve(__dirname, "..", "..", ...segments); // здесь просто выходим до корня проекта из текущего положения файла
