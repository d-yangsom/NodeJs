const os = require('os')

//Platform
console.log(os.platform()) //darwin

//CPU Arch
console.log(os.arch())

//CPU Info

console.log(os.cpus())
/*
[ { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz',
    speed: 2300,
    times:
     { user: 7602850, nice: 0, sys: 3268870, idle: 24512850, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz',
    speed: 2300,
    times:
     { user: 3937750, nice: 0, sys: 1331520, idle: 30114630, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz',
    speed: 2300,
    times:
     { user: 7395020, nice: 0, sys: 2688000, idle: 25300890, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz',
    speed: 2300,
    times:
     { user: 4067350, nice: 0, sys: 1251470, idle: 30065090, irq: 0 } } ]
*/

// Free Memory
console.log(os.freemem()) //584204288 = 5GB

// Total memory
console.log(os.totalmem()) //858 9934592 = 8GB

//Home dir
console.log(os.homedir()) ///var/root

//Up time
console.log(os.uptime()) //35627 sec