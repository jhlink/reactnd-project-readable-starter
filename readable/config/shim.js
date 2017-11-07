import 'raf/polyfill';

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};
