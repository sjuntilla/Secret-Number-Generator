'use strict';
module.exports = function () {
    let num = (Math.random() * 1000000);

    const secretNum = function () {
        return num;

    }
    return secretNum;

};