import Image from 'next/image'

export default function PublicationCard({ data }) {
  const { image, title, authors, journal, highlightInfo, links } = data

  return (
    <li className="flex flex-col   md:flex-row p-4 border border-gray-300 hover:border-gray-400 ">
      <div className="md:w-1/4 flex items-center ">
        <Image
          src={image.src}
          alt={data.title.normal}
          width={image.width}
          height={image.height}
        />
      </div>
      <div className="md:w-3/4 md:pl-5 flex flex-col justify-between space-y-1 py-2">
        <div className="space-y-1">
          <p>
            {title.highlight && (
              <span className="font-bold text-red-600 pr-2">
                {title.highlight}
              </span>
            )}
            <a
              href={data.title.link}
              className="text-lg font-bold text-gray-800 hover:underline"
            >
              {data.title.normal}
            </a>
          </p>
          <p className="text-gray-700 leading-5">
            {data.authors.map((author, index) => (
              <span key={author}>
                {` ${author} ${index !== data.authors.length - 1 ? ',' : ''}`}
              </span>
            ))}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-600">
            <span>{journal.normal}</span>
            {journal.highlight && (
              <span className="font-bold pl-2">{journal.highlight}</span>
            )}
          </p>
          {highlightInfo && highlightInfo.length > 0 && (
            <div className="font-bold text-red-600 pt-3">
              {highlightInfo.map((info) => (
                <p key={info}>{info}</p>
              ))}
            </div>
          )}
          {links && links.length > 0 && (
            <p className="space-x-3 ">
              {links.map(({ text, url }) => (
                <a
                  key={text}
                  href={url}
                  className="text-gray-500 hover:underline whitespace-nowrap"
                >
                  [ {text} ]
                </a>
              ))}
            </p>
          )}
        </div>
      </div>
    </li>
  )
}
