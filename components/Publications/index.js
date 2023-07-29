import Image from 'next/image'
import { pubList } from './pubList'
import PublicationCard from './PublicationCard'

export default function Publications() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-gray-700 p-4 pl-2 pb-6">
        Publications
      </h1>
      <ul className="space-y-6">
        {pubList.map((pub) => (
          <PublicationCard key={pub.title.normal} data={pub} />
        ))}
      </ul>
    </div>
  )
}
