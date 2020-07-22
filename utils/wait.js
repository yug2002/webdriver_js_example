'use strict'

import * as data from '../data/constants/constants';

const delay = data.timeout;

export const waitFor = (predicate, milliseconds = delay) => new Promise (resolve => {
  const dl = 100;
  let mls = milliseconds;
  const f = async () => {
    mls -= dl;
    if (await predicate() || mls < dl) {
      resolve(true);
    }
    else {
      setTimeout(f, dl);
    }
  };
  f();
});