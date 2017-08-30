#!/usr/bin/env node
var build = require(process.argv[2]);
Math.random = require('ostrich-twister-prng').random;


var args = process.argv.slice(3).map(function bash_to_javascript(a) {
    var n = Number.parseFloat(a);
    if (!Number.isNaN(n)) {
        return n;
    }

    var n = Number.parseInt(a);
    if (!Number.isNaN(n)) {
        return n;
    }

    return a;
});

console.error('arguments before conversion: ' + process.argv.slice(3))
console.error('arguments after conversion: ' + args.join(','))

try {
    build.runner.apply(build, args);
} catch (e) {
    console.log(e);
    process.exit(1);
}

process.exit(0);
