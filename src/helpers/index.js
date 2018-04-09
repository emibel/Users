import shortid from 'shortid';
import api from 'api';

export const keyIndex = (array) => {
  return array
    .map(item => Object.assign(item, { id: shortid.generate() }));
}

export const sleep = (delay) => {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export const beforeLeave = msg => {
  api.actions.save({msg});
  sleep(10);
}
