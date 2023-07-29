import fs from 'fs'
import path from 'path'

function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x)
}

function flattenArray(input) {
  return input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  )
}

function map(fn) {
  return (input) => input.map(fn)
}

function walkDir(fullPath) {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath)
}

function pathJoinPrefix(prefix) {
  return (extraPath) => path.join(prefix, extraPath)
}

export function getAllFilesRecursively(folder) {
  return pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder)
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function getFiles(type) {
  let root = process.cwd()
  let prefixPaths = path.join(root, 'data', type)
  let files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  )
}
