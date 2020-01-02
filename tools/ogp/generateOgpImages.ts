import * as fs from 'fs'
import * as fsExtra from 'fs-extra'
import rimraf from 'rimraf'
const IMAGES_PATH = './__screenshots__/Atoms/Ogp-posts/'
const filenames = fs.readdirSync(IMAGES_PATH, { withFileTypes: true })

const dirList = filenames.filter((file) => file.isDirectory())
// console.log(dirList)

dirList.forEach((dir) => {
  // console.log(dir.name)
  const images = fs.readdirSync(IMAGES_PATH + dir.name)[0]
  console.log(images)
})

// rimraf(IMAGES_PATH, () => {})
