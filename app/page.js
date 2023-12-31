import { Greeting } from './components/Greeting'
import { Intro } from './components/Intro'
import Image from 'next/image'
import { ProfileCard } from 'components/ProfileCard'
import { Recent } from './components/Recent'
import TalksAndInternships from './components/TalksAndInternships'
import Twemoji from '@/components/Twemoji'
import Publications from '@/components/Publications'
import { ProfileCardInfo } from '@/components/ProfileCard/ProfileCardInfo'

export default function Home() {
  return (
    <div className="mt-8 px-2 md:px-0  md:mt-16">
      <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
        <div className="md:pr-8 xl:col-span-2">
          <Greeting />
          <div className="text-lg leading-8 text-gray-600 ">
            <Intro />
            <div className="xl:hidden px-2 py-2">
              <ProfileCardInfo />
            </div>
            <Recent />
          </div>
        </div>
        <div className="hidden xl:block">
          <ProfileCard />
        </div>
      </div>
      <TalksAndInternships />
      <Publications />
    </div>
  )
}
