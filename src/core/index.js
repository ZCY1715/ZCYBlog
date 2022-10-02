import { distinct, formateTime } from '../utils'
import SHA1 from '../utils/sha1'


// 博文数据及操作
export class PostSet {

  Mds = []
  tags = []
  categories = []

  constructor() {
    this.initPosts()
  }

  initPosts() {

    const postsFrontmatter = import.meta.glob('./sources/posts/*/*/index.md', { import: 'frontmatter', eager: true })
    const postsFiles = import.meta.glob('./sources/posts/*/*/index.md')

    let posts = Object.keys(postsFiles).map(key => {
      return {
        id: SHA1(key),
        key,
        target: postsFiles[key],
        frontmatter: postsFrontmatter[key],
      }
    })

    // 发布设置为 false 或无发布时间字段则不展示
    posts = posts.filter(item => {
      const { publishTime, publish } = item.frontmatter
      return Boolean(publishTime) && [true, undefined].includes(publish)
    })

    // 按时间从后往前
    posts.sort((pre, cur) => {
      return new Date(cur.frontmatter.publishTime).getTime() - new Date(pre.frontmatter.publishTime).getTime()
    })

    this.Mds = []
    for (const post of posts) {
      let { title, categories, tags, description, img, publishTime, updateTime, toc, comment } = post.frontmatter

      publishTime = formateTime(new Date(publishTime))
      if (updateTime) {
        updateTime = formateTime(new Date(updateTime))
      }

      if (!title) {
        title = post.key.match(/\/sources\/posts\/.*\/(.*?)\/index\.md$/)[1]
      }

      if (tags) {
        if (!(tags instanceof Array)) {
          tags = [tags]
        }
      } else {
        tags = []
      }
      this.tags = distinct([...this.tags, ...tags])

      const defaultCategory = post.key.match(/posts\/(.+?)\/.+?\/index\.md$/)[1]
      if (categories) {
        if (categories instanceof Array) {
          categories.unshift(defaultCategory)
        } else {
          categories = [defaultCategory, categories]
        }
      } else {
        categories = [defaultCategory]
      }
      this.categories = distinct([...this.categories, ...categories])

      if (toc === null || toc === undefined)
        toc = true

      if (comment === null || comment === undefined)
        comment = true

      this.Mds.push({
        id: post.id,
        target: post.target,
        frontmatter: {
          title,
          categories,
          tags,
          description,
          img,
          publishTime,
          updateTime,
          toc,
          comment
        }
      })
    }
  }
  import(id) {
    return this.Mds.find(item => item.id === id)?.target
  }
  getMdById(id) {
    return this.Mds.find(item => item.id === id)?.frontmatter
  }
  getPreMdById(id) {
    const index = this.Mds.findIndex(item => item.id === id) - 1
    return index < 0 ?
      null :
      {
        id: this.Mds[index].id,
        ...this.Mds[index].frontmatter
      }
  }
  getNextMdById(id) {
    const index = this.Mds.findIndex(item => item.id === id) + 1
    return index <= 0 || index >= this.Mds.length ?
      null :
      {
        id: this.Mds[index].id,
        ...this.Mds[index].frontmatter
      }
  }
  getMds() {
    return this.Mds.map(item => ({
      id: item.id,
      ...item.frontmatter
    }))
  }
  getMDsByTag(tag) {
    const mds = this.Mds.filter(item => item.frontmatter.tags.includes(tag))
    return mds.map(item => ({
      id: item.id,
      ...item.frontmatter
    }))
  }
  getMDsByCategory(category) {
    const mds = this.Mds.filter(item => item.frontmatter.categories.includes(category))
    return mds.map(item => ({
      id: item.id,
      ...item.frontmatter
    }))
  }
  searchMdsByKeyword(keyword) {
    keyword = keyword.toLocaleLowerCase()
    if (!keyword) return []
    keyword = keyword.trim()
    const mds = this.Mds.filter(item => {
      const { title, tags, categories } = item.frontmatter
      for (const target of [title, ...tags, ...categories]) {
        if (~target.toLocaleLowerCase().indexOf(keyword)) {
          return true
        }
      }
      return false
    })
    return mds.map(item => ({
      id: item.id,
      ...item.frontmatter
    }))
  }
}

const pagesFiles = import.meta.glob('./sources/pages/*/index.md', { eager: true })
const keys = Object.keys(pagesFiles)
const frontmatters = keys.reduce((obj, key) => {
  const { frontmatter } = pagesFiles[key]
  if (frontmatter.path) {
    obj[key] = frontmatter
  }
  return obj
}, {})
const pagesRouter = Object.keys(frontmatters).map(key => ({
  path: frontmatters[key].path,
  component: pagesFiles[key].default,
  name: frontmatters[key].path.toLocaleUpperCase(),
}))
let pagesInfo = Object.keys(frontmatters).map(key => {
  let { title, rank, path, config } = frontmatters[key]
  const arr = key.match(/pages\/(.+)\/index.md/)[1].split('.')
  if (!title)
    title = arr[1]
  if (!rank)
    rank = Number(arr[0])
  return {
    title,
    rank,
    pageName: path.toLocaleUpperCase(),
    config
  }
})
pagesInfo.sort((a, b) => a.rank - b.rank)
pagesInfo = pagesInfo.map(item => ({
  title: item.title,
  pageName: item.pageName,
  config: item.config
}))

export const pages = { pagesRouter, pagesInfo }
