#!/usr/bin/env node
var build = require(process.argv[2]);
Math.random = require('ostrich-twister-prng').random;


var args = process.argv.slice(3).map(function bash_to_javascript(a) {
    var n = Number.parseInt(a);
    if (n !== NaN) {
        return n;
    }

    n = Number.parseFloat(a);
    if (n !== NaN) {
        return n;
    }

    return a;
});

try {
    build.runner.apply(build, args);
} catch (e) {
    console.log(e);
    process.exit(1);
}

process.exit(0);
