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

function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 200)
    }, n);
  })
}

function step1(n) {
  console.log(`step1 with ${n}`);
  return sleep(n)
}

function step2(n) {
  console.log(`step2 with ${n}`);
  return sleep(n)
}

function step3(n) {
  console.log(`step3 with ${n}`);
  return sleep(n)
}

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