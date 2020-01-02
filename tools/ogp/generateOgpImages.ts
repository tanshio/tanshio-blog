import * as fs from 'fs'
import * as fsExtra from 'fs-extra'
import rimraf from 'rimraf'
import { POST_PATH } from './template'
const IMAGES_PATH = './__screenshots__/Atoms/Ogp-posts/'
const filenames = fs.readdirSync(IMAGES_PATH, { withFileTypes: true })

const dirList = filenames.filter((file) => file.isDirectory())
// console.log(dirList)

dirList.forEach((d) => {
  const filename = fs.readdirSync(IMAGES_PATH + d.name)[0]
  const filePath = `${IMAGES_PATH}${d.name}/${filename}`
  const offset = 5
  const dir = filename.substr(offset, filename.length - offset - 4)
  const year = filename.substr(0, 4)
  const ogpPath = `${POST_PATH}/${year}/${dir}/ogp.png`
  fsExtra.copyFileSync(filePath, ogpPath)
})

// rimraf(IMAGES_PATH, () => {})
