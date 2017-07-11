# ostrich-node-environment
Node environment for running benchmarks from the ostrich suite.

Replaces the Math.random function with the Mersenne-Twister implementation using https://github.com/Sable/ostrich-twister-prng.js.

Default options:
  * `--max-old-space-size=4096`: Introduced because some benchmarks such as [bfs](https://github.com/Sable/bfs-benchmark.git) require more memory than node provides by default.
