import * as signale from "signale"
import * as inquirer from "inquirer"

const getDate = () => {
  const date = new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  }
}

const questions = [
  {
    type: "confirm",
    name: "toBeDelivered",
    message: "Is this for delivery?",
    default: false,
  },
  {
    type: "input",
    name: "phone",
    message: "What's your phone number?",
    validate: function(value: any) {
      var pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      )
      if (pass) {
        return true
      }

      return "Please enter a valid phone number"
    },
  },
  {
    type: "list",
    name: "size",
    message: "What size do you need?",
    choices: ["Large", "Medium", "Small"],
    filter: function(val: any) {
      return val.toLowerCase()
    },
  },
  {
    type: "input",
    name: "quantity",
    message: "How many do you need?",
    validate: function(value: any) {
      var valid = !isNaN(parseFloat(value))
      return valid || "Please enter a number"
    },
    filter: Number,
  },
  {
    type: "expand",
    name: "toppings",
    message: "What about the toppings?",
    choices: [
      {
        key: "p",
        name: "Pepperoni and cheese",
        value: "PepperoniCheese",
      },
      {
        key: "a",
        name: "All dressed",
        value: "alldressed",
      },
      {
        key: "w",
        name: "Hawaiian",
        value: "hawaiian",
      },
    ],
  },
  {
    type: "rawlist",
    name: "beverage",
    message: "You also get a free 2L beverage",
    choices: ["Pepsi", "7up", "Coke"],
  },
  {
    type: "input",
    name: "comments",
    message: "Any comments on your purchase experience?",
    default: "Nope, all good!",
  },
  {
    type: "list",
    name: "prize",
    message: "For leaving a comment, you get a freebie",
    choices: ["cake", "fries"],
    when: function(answers: any) {
      return answers.comments !== "Nope, all good!"
    },
  },
]

inquirer.prompt(questions).then(answers => {
  console.log("\nOrder receipt:")
  console.log(JSON.stringify(answers, null, "  "))
})

// signale.success('Operation successful');
// signale.debug('Hello', 'from', 'L59');
// signale.pending('Write release notes for %s', '1.2.0');
// signale.fatal(new Error('Unable to acquire lock'));
// signale.watch('Recursively watching build directory...');
// signale.complete({prefix: '[task]', message: 'Fix issue #59', suffix: '(@klauscfhq)'});
