export default function TalksAndInternships() {
  return (
    <div className="flex flex-col md:flex-row w-full p-4 pt-5">
      <div className="md:w-1/2  md:border-r border-gray-200">
        <h1 className="text-xl font-bold text-gray-700">Talks</h1>
        <ul className="list-inside list-disc pl-2">
          <li className="p-1">
            07/23. Invited Talk for Shanghai AI lab. RFEPS and GCNO.
          </li>
          <li className="p-1">
            07/23. Invited Talk for HIT (weihai). RFEPS and GCNO.
          </li>
          <li className="p-1">08/22. Invited Talk at GDC 2022. RFEPS.</li>
        </ul>
      </div>
      <div className="pt-3 md:w-1/2 md:pt-0 md:pl-4">
        <h1 className="text-xl font-bold text-gray-700">Internships</h1>
        <ul className="list-inside list-disc  pl-2">
          <li className="p-1">
            <span className="font-bold">Tencent Games.</span>
            <p>
              Research in Geometry Modeling, advised by Cheng Lin. Sep 2022 -
              Dec 2022
            </p>
          </li>
          <li>
            <span className="font-bold">Alibaba.</span>
            <p>
              Algorithm Engineer for Digital Twins with Unreal Development. May
              2020 - Sep 2020
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
