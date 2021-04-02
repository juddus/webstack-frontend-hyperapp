import {app, h, text} from 'hyperapp';

function increaseCount(state: number) {
  return state + 1;
}

function startApp() {
  const appEl = document.getElementById('app');
  appEl &&
    app({
      init: 0,
      view: (state: number) =>
        h('div', {}, [h('button', {onclick: increaseCount}, text(state))]),
      node: appEl,
    });
}

startApp();

export {increaseCount};
