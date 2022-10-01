---

# 默认为文件名称
title: 

tags:
  - upload
  - 单文件
  - 多文件
  - 文件夹
  - 拖拽

# 类别中已包含文件夹名称
categories:

description: 前端封装上传单文件，多文件，文件夹以及拖拽上传！开箱即用

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-26 19:00:10
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

## 直接调用即可!

```js
/**
 * 点击上传 | 拖拽上传 
 * 单文件 | 多文件 | 文件夹
 */
class uploader {
  el = null
  pattern = null
  options = null
  acceptType = null
  callback = null
  /**
   * @param {{ el: HTMLElement, mode: "Click"|"Drag", pattern: "SingleFile"|"MultiFile"|"Folder", acceptType : String , options: {onDragEnter: Function, onDragOver: Function, onDragLeave: Function, onDrop: Function }}} config
   * @param {Function} callback
   */
  constructor(config, callback) {
    const { el, mode, pattern, acceptType, options } = config
    if (!el) throw new Error("no element!")
    this.el = el
    this.pattern = pattern || "SingleFile"
    this.options = options || {}
    this.acceptType = acceptType || ""
    this.callback = callback
    switch (mode || "Click") {
      case "Click":
        this.clickModeFn()
        break
      case "Drag":
        this.dragModeFn()
        break
      default:
        throw new Error("mode not accepted!")
    }
  }

  watchElRemove(callback) {
    const parentNode = this.el.parentNode
    const observer = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach(() => {
        if (!parentNode.contains(this.el)) {
          callback && callback()
          this.el = null
          observer.disconnect()
        }
      })
    })
    observer.observe(parentNode, {
      childList: true
    })
  }

  clickModeFn() {
    const inputFile = document.createElement("input")
    inputFile.setAttribute("type", "file")
    this.acceptType && inputFile.setAttribute("accept", this.acceptType)
    inputFile.style.display = "none"
    switch (this.pattern) {
      case "SingleFile":
        break
      case "MultiFile":
        inputFile.setAttribute("multiple", true)
        break
      case "Folder":
        inputFile.setAttribute("webkitdirectory", true)
        break
      default:
        throw new Error("pattern not accepted!")
    }

    const changeHandle = ({ target }) => {
      let values = null
      switch (this.pattern) {
        case "SingleFile":
          values = {
            file: target.files[0],
            path: target.files[0].name
          }
          break
        case "MultiFile":
          values = Array.from(target.files, item => ({
            file: item,
            path: item.name
          }))
          break
        case "Folder":
          values = Array.from(target.files, item => ({
            file: item,
            path: item.webkitRelativePath
          }))
          break
      }
      this.callback && this.callback(values)
      target.value = ""
    }

    inputFile.addEventListener("change", changeHandle)
    this.parentNode.appendChild(inputFile)
    const clickHandle = () => { inputFile.click() }
    this.el.addEventListener("click", clickHandle)
    this.watchElRemove(() => {
      inputFile.removeEventListener("change", changeHandle)
      inputFile.remove()
      this.el.removeEventListener("click", clickHandle)
    })
  }

  dragModeFn() {
    const { onDragEnter, onDragOver, onDragLeave, onDrop } = this.options

    const getFileFromFolder = (entry, path) => {
      return new Promise((resolve, reject) => {
        if (entry.isFile) {
          entry.file(file => {
            resolve([
              {
                file: new File([file], file.name, { type: file.type }),
                path: path + file.name
              }
            ])
          })
        } else if (entry.isDirectory) {
          const dirReader = entry.createReader()
          dirReader.readEntries(async entries => {
            const files = []
            for (const item of entries) {
              files.push(...(await getFileFromFolder(item, path + entry.name + "/") || []))
            }
            resolve(files)
          })
        } else {
          reject("The file type is not supported!")
        }
      })

    }

    const AfterDropFn = async e => {
      const files = []
      for (const item of e.dataTransfer.items) {
        item.getAsEntry = (function () {
          return item.getAsEntry || item.webkitGetAsEntry
        })()
        const entry = item.getAsEntry()
        files.push(...(await getFileFromFolder(entry, "") || []))
      }
      this.callback && this.callback(files)
    }

    var canOverBehavior = true
    const DragEnterFn = e => {
      e.preventDefault()
      onDragEnter && onDragEnter(e.target)
      canOverBehavior = true
    }
    const DragOverFn = e => {
      e.preventDefault()
      if (!canOverBehavior) return
      onDragOver && onDragOver(e.target)
      canOverBehavior = false
    }
    const DragLeaveFn = e => {
      e.preventDefault()
      onDragLeave && onDragLeave(e.target)
      canOverBehavior = true
    }
    const DropFn = async e => {
      e.preventDefault()
      onDrop && onDrop(e.target)
      await AfterDropFn(e)
      canOverBehavior = true
    }
    this.el.addEventListener('dragenter', DragEnterFn)
    this.el.addEventListener('dragover', DragOverFn)
    this.el.addEventListener('dragleave', DragLeaveFn)
    this.el.addEventListener("drop", DropFn)

    this.watchElRemove(() => {
      this.el.removeEventListener('dragenter', DragEnterFn)
      this.el.removeEventListener('dragover', DragOverFn)
      this.el.removeEventListener('dragleave', DragLeaveFn)
      this.el.removeEventListener("drop", DropFn)
    })

  }

}

```

