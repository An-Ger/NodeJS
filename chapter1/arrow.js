const { findSourceMap } = require("module");

//箭头函数和父作用域共享this
const arrow = (param) => {};
const arrow2 = (param) => {};
const arrow3 = (param) => console.log(param);
const arrow4 = (param) => ({ param: param });
const arrow5 = (param1, param2) => {};

const arrow6 = ({ id, movie }) => {
  console.log(id, movie);
};

const luke = {
  id: 2,
  say: function () {
    setTimeout(function () {
      console.log("id:", this.id);
    }, 50);
  },
  sayWithThis: function () {
    let that = this;
    setTimeout(function () {
      console.log("this id:", that.id);
    }, 500);
  },
  sayWithArrow: function () {
    setTimeout(() => {
      console.log("arrow id:", this.id);
    }, 1500);
  },
  sayWithGlobalArrow: () => {
    setTimeout(() => {
      console.log("global arrow id:", this.id);
    }, 2000);
  }
};
luke.say();
luke.sayWithThis();
luke.sayWithArrow();
luke.sayWithGlobalArrow();
//this指向到箭头函数定义所属作用域而不是在运行的时候
