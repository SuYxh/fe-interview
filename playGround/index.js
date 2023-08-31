/**
function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('first')
    }, 1000);
  })
}

function doSomethingElse(p) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(p + 'second')
    }, 1000);
  })
}

function doThirdThing(p) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(p + 'third')
    }, 1000);
  })
}

doSomething()
  .then(result => {
    // 处理第一个异步操作的结果
    console.log('1', result);
    return doSomethingElse(result);
  })
  .then(anotherResult => {
    // 处理第二个异步操作的结果
    console.log('2', anotherResult);
    return doThirdThing(anotherResult);
  })
  .then(finalResult => {
    // 处理最终的结果
    console.log(`最终结果为: ${finalResult}`);
  })
  .catch(error => {
    // 处理错误
    console.error(`发生错误: ${error}`);
  });
*/


/** 
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
});

const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('请求超时'));
  }, 5000); // 设置5秒的超时时间
});

Promise.race([fetchData, timeout])
  .then(result => {
    // 处理结果
  })
  .catch(error => {
    // 处理超时错误
    console.error(error);
  });
*/


/** 
function transformedData(data) {
  return data 
}


function middleware1(data) {
  return new Promise(resolve => {
    // 进行操作
    resolve(transformedData(data));
  });
}

function middleware2(data) {
  return new Promise(resolve => {
    // 进行操作
    resolve(transformedData(data));
  });
}

function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('first')
    }, 1000);
  })
}

doSomething()
  .then(result => middleware1(result))
  .then(modifiedResult => middleware2(modifiedResult))
  .then(finalResult => {
    // 处理最终结果
    console.log(`最终结果为: ${finalResult}`);
  })
  .catch(error => {
    // 处理错误
    console.error(`发生错误: ${error}`);
  });

*/


/** 
function concurrentControl(tasks, limit) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedTasks = 0;
    let runningTasks = 0;

    function runTask(task) {
      return new Promise((taskResolve) => {
        task().then((result) => {
          results.push(result);
          completedTasks++;
          runningTasks--;

          if (completedTasks === tasks.length) {
            resolve(results);
          } else {
            runNextTask();
          }

          taskResolve();
        }).catch(reject);
      });
    }

    function runNextTask() {
      while (runningTasks < limit && completedTasks + runningTasks < tasks.length) {
        const task = tasks[completedTasks + runningTasks];
        runningTasks++;
        runTask(task);
      }
    }

    runNextTask();
  });
}

// 示例任务函数
function delayTask(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} 完成`);
      resolve(name);
    }, delay);
  });
}

// 定义一组任务
const tasks = [
  () => delayTask("任务1", 2000),
  () => delayTask("任务2", 1000),
  () => delayTask("任务3", 3000),
  () => delayTask("任务4", 1500),
  () => delayTask("任务5", 2500)
];

// 设置并发限制为2，执行任务
concurrentControl(tasks, 2).then((results) => {
  console.log("所有任务完成");
  console.log(results);
}).catch((error) => {
  console.error(error);
});
*/

// async function testAsync() {
//   return 'hello'
// }
// const result = testAsync()
// console.log(result);
// result.then(res => {
//   console.log(res);
// })

// function sleep(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n + 200)
//     }, n);
//   })
// }

// function step1(n) {
//   console.log(`step1 with ${n}`);
//   return sleep(n)
// }

// function step2(n) {
//   console.log(`step2 with ${n}`);
//   return sleep(n)
// }

// function step3(n) {
//   console.log(`step3 with ${n}`);
//   return sleep(n)
// }

// function handleStep() {
//   console.time('handleStep');
//   const time1 = 300
//   step1(time1)
//     .then(time2 => step2(time2))
//     .then(time3 => step3(time3))
//     .then(res => {
//       console.log(`res is ${res}`);
//       console.timeEnd('handleStep');
//     })
// }

// handleStep()

// async function handleStep() {
//   console.time('handleStep');
//   const time1 = 300
//   const time2 = await step1(time1)
//   const time3 = await step1(time2)
//   const res = await step1(time3)
//   console.log(`res is ${res}`);
//   console.timeEnd('handleStep');
// }

// handleStep()

/** 

Promise.prototype.myCatch = function (onRejected) {
  return this.then(undefined, onRejected)
}

Promise.prototype.myFinally = function (onFinally) {
  return this.then(
    value => {
      return Promise.resolve(onFinally()).then(() => value)
    },
    reason => {
      return Promise.resolve(onFinally()).then(() => {throw reason})
    }
  )
}

Promise.prototype.myAll = function (iterable) {
  const tasks = Array.from(iterable)
  if (tasks.length === 0) {
    return Promise.resolve([])
  }
  if (tasks.every(task => !(task instanceof Promise))) {
    return Promise.resolve(tasks)
  }

  return new Promise((resolve, reject) => {
    let values = new Array(tasks.length).fill(null)
    let fulfillCount = 0

    tasks.forEach((task, index, arr) => {
      if (task instanceof Promise) {
        task.then(value => {
          fulfillCount ++
          values[index] = value

          if (fulfillCount === arr.length) {
            resolve(values)
          }
        }, reason => {
          reject(reason)
        })
      } else {
        fulfillCount ++
        values[index] = task
      }
    })
  })
}

*/

// console.log(typeof 2); // number
// console.log(typeof true); // boolean
// console.log(typeof 'str'); // string
// console.log(typeof []); // object
// console.log(typeof function () {}); // function
// console.log(typeof {}); // object
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// var num = new Number(2);
// console.log(num);
// console.log(num instanceof Number); // true


// console.log(2 instanceof Number);  // false
// console.log(true instanceof Boolean);  // false
// console.log('str' instanceof String);  // false

// console.log([] instanceof Array);  // true
// console.log(function () {} instanceof Function);  // true
// console.log({} instanceof Object);  // true

// console.log((2).constructor === Number); // true
// console.log((true).constructor === Boolean); // true
// console.log(('str').constructor === String); // true
// console.log(([]).constructor === Array); // true
// console.log((function () {}).constructor === Function); // true
// console.log(({}).constructor === Object); // true


// function Fn() {}

// Fn.prototype = new Array()

// let f = new Fn()

// console.log(f.constructor === Fn); // false
// console.log(f.constructor === Array); // true


// console.log(Object.prototype.toString.call(2)); // [object Number]
// console.log(Object.prototype.toString.call(true)); // [object Boolean]
// console.log(Object.prototype.toString.call('str')); // [object String]
// console.log(Object.prototype.toString.call([])); // [object Array]
// console.log(Object.prototype.toString.call(function () {})); // [object Function]
// console.log(Object.prototype.toString.call({})); // [object Object]
// console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
// console.log(Object.prototype.toString.call(null)); // [object Null]

// console.log(undefined == null);
// console.log(undefined === null);
// console.log(void 0 === undefined);
// console.log(void 1);


// function myInstanceof(left, right) {
//   // 获取对象的原型
//   let proto = Object.getPrototypeOf(left)
//   // 获取构造函数的原型
//   let prototype = right.prototype

//   while(true) {
//     if (!proto) {
//       return false
//     }
//     if (proto === prototype) {
//       return true
//     }
//     // 如果没有找到，继续从其原型上找
//     proto = Object.getPrototypeOf(proto)
//   }
// }

// console.log([] instanceof Array);
// console.log({} instanceof Object);
// console.log(2 instanceof Number);

// console.log(myInstanceof([], Array));
// console.log(myInstanceof({}, Object));
// console.log(myInstanceof(2, Number));



// const a = 'abc'
// a.length // 3
// a.toUpperCase() // 'ABC'

// if(JSON.stringify(obj) === '{}') {
//   console.log('空对象');
// }

// if(!Object.keys(obj)) {
//   console.log('空对象');
// }

// const obj = {
//   name: 'jarvis',
//   getName() {
//     return () => {
//       console.log(this.name);
//       console.log(this === obj);
//     }
//   }
// }

// obj.getName()()


// const a = { b: 1, c: 2 }
// const aa = Object.assign({}, a)
// const aa = { ...a }
// console.log(aa);

// console.log(...[1,2,3]); // 1 2 3
// console.log(...[1,2,3, [4,5], 6]); // 1 2 3 [4, 5] 6

// function add(x, y) {
//   return x + y 
// }
// const num = [1, 2]
// add(...num)

// const [first, ...rest] = [1,2,3,4,5,6]
// console.log(first); // 1
// console.log(rest); // [2,3,4,5,6]

// function f() {
//   const args = [...arguments]
//   console.log(args);
// }

// const nums = [7, 8, 3, 1]
// console.log(Math.min(...nums)); // 1
// console.log(Math.max(...nums)); // 8

// const onWatch = (obj, setBind, getLogger) => {
//   const handler = {
//     get(target, property, receiver) {
//       getLogger(target, property)
//       return Reflect.get(target, property, receiver)
//     },
//     set(target, property, value, receiver) {
//       setBind(value, property)
//       return Reflect.set(target, property, value)
//     }
//   }

//   return new Proxy(obj, handler)
// }

// const obj = { a: 1 }
// const p = onWatch(obj, (v, property) => {
//   console.log(`监听到属性${property}该变为${v}`);
// }, (target, property) => {
//   console.log(`${property} = ${target[property]}`);
// })

// setTimeout(() => {
//   p.a = 2
//   console.log('p.a', p.a);
// }, 1000);

