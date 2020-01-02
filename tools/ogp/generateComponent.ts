import { POST_PATH, templateLoopPosition, templateMain } from './template'
import * as fs from 'fs'
import * as fsExtra from 'fs-extra'

// fs.readdir('./src/posts', (err, files) => {
//   if (err) throw err
//   console.log(files)
// })

const filenames = fs.readdirSync(POST_PATH)
console.log(filenames)

type listType = {
  year: string
  dir: string
  path: string
  title: string
}

let list: listType[] = []

filenames.forEach((year, i) => {
  const posts = fs.readdirSync(POST_PATH + '/' + year)
  const checkedOgpList = posts.filter((dir) => {
    const path = `${POST_PATH}/${year}/${dir}/ogp.png`
    const hasOgp = fs.existsSync(path)
    if (hasOgp) {
      fsExtra.copySync(path, `./src/images/${year}/${dir}/ogp.png`)
    }
    return !hasOgp
  })

  checkedOgpList.forEach((dir) => {
    const md = fs.readFileSync(`${POST_PATH}/${year}/${dir}/index.md`, 'utf8')
    const mdTitle = md.split(/\r\n|\r|\n/)[1]
    const offset = 'title: "'.length
    const title = mdTitle.substr(offset, mdTitle.length - offset - 1)
    list.push({
      year,
      dir: `${POST_PATH}/${year}/${dir}/`,
      path: dir,
      title,
    })
  })
})

const ogpList = list.map((item, i) => {
  return templateLoopPosition(
    i,
    item.title,
    `${item.year}/${item.year}-${item.path}`
  )
})

fs.writeFileSync(
  './src/components/atomic/atoms/Ogp/ogp.stories.tsx',
  templateMain + ogpList.join('\n')
)
