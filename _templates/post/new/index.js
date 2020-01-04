const json = require('../../../static/search')

const categories = json
  .reduce((acc, current) => {
    current.categories.forEach((category) => {
      if (acc.indexOf(category) === -1) {
        acc.push(category)
      }
    })
    return acc
  }, [])
  .sort()

const tags = json
  .reduce((acc, current) => {
    current.tags.forEach((tag) => {
      if (acc.indexOf(tag) === -1) {
        acc.push(tag)
      }
    })
    return acc
  }, [])
  .sort()

module.exports = {
  prompt: async ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'タイトル',
      },
      {
        type: 'input',
        name: 'slug',
        message: 'スラッグを入力してください',
      },
      {
        type: 'input',
        name: 'date',
        message: '日付を入力してください 例: 2020-01-01',
        validate: (str) =>
          str.length === 10 &&
          str.substr(4, 1) === '-' &&
          str.substr(7, 1) === '-',
      },
      {
        type: 'MultiSelect',
        name: 'categories',
        message: 'カテゴリーを選択（スペースで選択）',
        choices: categories,
      },
      {
        type: 'MultiSelect',
        name: 'tags',
        message: 'タグを選択（スペースで選択）',
        choices: tags,
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const questions = []

      return inquirer
        .prompt(questions)
        .then((nextAnswers) => Object.assign({}, answers, nextAnswers))
    })
  },
}
