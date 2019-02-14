setImmediate(() => console.log('Now'));
process.nextTick(() => console.log('Hello'));//access event queue directly with this function

console.log('world');