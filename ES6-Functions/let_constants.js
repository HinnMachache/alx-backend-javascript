function taskFirst() {
  const task = 'I prefer const when I can';
  let response = 'But sometimes \'Let\' can do';

  return [task, response];
}

// const [task, response] = taskFirst();
// console.log(task);
// console.log(response);

const obj = {
  num: 89,
  b: () => console.log(this.num, this),
  c() {
    console.log(`num = ${this.num}, ${this}`)
  },
};

obj.b();
obj.c();