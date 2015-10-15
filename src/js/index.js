import Hello from './hello.js';

$(document).ready(function() {
  // hello
  const hello = Hello($('[data-module=hello]'));
  console.dir(hello({}));

  Rx.Observable.fromEvent(hello({}).node, 'btn.click', (event, model) => model)
  .subscribe(model => {
      var x = R.over(R.lens(R.path(['text', 'visible']), R.assocPath(['text','visible'])), R.not)(model);
      console.dir(x);
      return x;
    },
    function(err) {
      console.error(err);
    },
    function() {
      console.log('Completed');
    }
  );
});
