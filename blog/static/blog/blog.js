for(let i = 0; i < 10; i += 1) {
  console.log('for loop i: ' + i)
}

let j = 0
while(j < 10) {
  console.log('while loop j: ' + j)
  j += 1
}

let k = 10

do {
  console.log('do while k: ' + k)
} while(k < 10)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach((value => {
  console.log('For each value ' + value)
}))

const doubled = numbers.map(value => value * 2)

console.log('Here are the doubled numbers')

console.log(doubled)

class Greeter {
  constructor (name) {
    this.name = name
  }

  getGreeting () {
    if (this.name === undefined) {
      return 'Hello, no name'
    }

    return 'Hello, ' + this.name
  }

  showGreeting (greetingMessage) {
    console.log(greetingMessage)
  }

  greet () {
    this.showGreeting(this.getGreeting())
  }
}

const g = new Greeter('Patchy')  // Put your name here if you like
g.greet()

class DelayedGreeter extends Greeter {
  delay = 2000

  constructor (name, delay) {
    super(name)
    if (delay !== undefined) {
      this.delay = delay
    }
  }

  greet () {
    setTimeout(
      () => {
        this.showGreeting(this.getGreeting())
      }, this.delay
    )
  }
}

const dg2 = new DelayedGreeter('Patchy 2 Seconds')
dg2.greet()

const dg1 = new DelayedGreeter('Patchy 1 Second', 1000)
dg1.greet()