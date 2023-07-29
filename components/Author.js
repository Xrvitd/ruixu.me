import authorInfo from '@/data/authorInfo'

export function Author({ className, children }) {
  const trimmed = trimAuthor(children)
  const info = authorInfo.find((author) => author.name === trimmed)

  const css = `${className} ${trimmed === 'Rui Xu' && 'font-bold'}`

  return (
    <>
      {info ? (
        <a href={info.url} className={`${className} hover:underline ${css}`}>
          {children}
        </a>
      ) : (
        <span className={`${className} ${css}`}>{children}</span>
      )}
    </>
  )
}

function trimAuthor(str) {
  let chars = [' ', ',', '*']
  let pattern = new RegExp(
    '^[' + chars.join('') + ']+|[' + chars.join('') + ']+$',
    'g'
  )
  return str.replace(pattern, '')
}
