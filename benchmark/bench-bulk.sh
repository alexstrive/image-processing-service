#!/bin/zsh

# Cached
./bench-runner.js -c -i 1 -f 0.5x
./bench-runner.js -c -i 1 -f 1.5x
./bench-runner.js -c -i 1 -f 2x

./bench-runner.js -c -i 2 -f 0.5x
./bench-runner.js -c -i 2 -f 1.5x
./bench-runner.js -c -i 2 -f 2x

./bench-runner.js -c -i 3 -f 0.5x
./bench-runner.js -c -i 3 -f 1.5x
./bench-runner.js -c -i 3 -f 2x

./bench-runner.js -c -i 4 -f 0.5x
./bench-runner.js -c -i 4 -f 1.5x
./bench-runner.js -c -i 4 -f 2x

./bench-runner.js -c -i 5 -f 0.5x
./bench-runner.js -c -i 5 -f 1.5x
./bench-runner.js -c -i 5 -f 2x

# Non-cached
./bench-runner.js -i 1 -f 0.5x
./bench-runner.js -i 1 -f 1.5x
./bench-runner.js -i 1 -f 2x

./bench-runner.js -i 2 -f 0.5x
./bench-runner.js -i 2 -f 1.5x
./bench-runner.js -i 2 -f 2x

./bench-runner.js -i 3 -f 0.5x
./bench-runner.js -i 3 -f 1.5x
./bench-runner.js -i 3 -f 2x

./bench-runner.js -i 4 -f 0.5x
./bench-runner.js -i 4 -f 1.5x
./bench-runner.js -i 4 -f 2x

./bench-runner.js -i 5 -f 0.5x
./bench-runner.js -i 5 -f 1.5x
./bench-runner.js -i 5 -f 2x
