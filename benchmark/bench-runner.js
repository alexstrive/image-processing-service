#!/usr/bin/env node

const { program } = require('commander');

const autocannon = require('autocannon');
const fs = require('fs');

program
  .option('-i, --imageId <num>')
  .option('-f, --factor <char>')
  .option('-c, --cached');

program.parse();

const options = program.opts();

const factor = options.factor ?? '0.5x';
const imageId = options.imageId ?? 1;
const isCached = options.cached ?? false;

const instance = autocannon(
  {
    url: `http://localhost/${imageId}/${factor}`,
    connections: 1,
    pipelining: 1,
    duration: 60,
  },
  (err, results) => {
    fs.writeFileSync(
      `${isCached ? 'cache.' : ''}${imageId}-${factor}.json`,
      JSON.stringify(results)
    );
  }
);

autocannon.track(instance, { renderProgressBar: true });
