const sum = function sum() {
  const sum =  0;
  arguments.forEach(el =>
    {sum += el;}
  );
  return sum;
};

const sum = function sum(...args) {
  let sum = 0;
  args.forEach(el => sum += el);
  return sum;
};

const bind = function bind() {

};


Function.prototype.myBind1 = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function () {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.protoype.curriedSum = function (numArgs) {
  let numbers = [];
  const _curriedSum = function (num) {
    numbers.push(num);
  }
};
