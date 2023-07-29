import { Twemoji } from 'components/Twemoji'

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 xl:block xl:px-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        Rui Xu (徐瑞)
      </h3>
      <h5 className="py-2 text-gray-700 dark:text-gray-400">Master Student</h5>
      <div className="mb-2 mt-4 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <path d="M22 9L12 5L2 9l10 4l10-4v6" />
              <path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4" />
            </g>
          </svg>

          <p className="px-2">
            <a
              target="_blank"
              href="http://www.sdu.edu.cn/"
              rel="noreferrer"
              className="hover:underline"
            >
              Shandong University
            </a>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <p className="px-2">
            Qingdao
            <span className="absolute ml-1 inline-flex pt-px">
              <Twemoji emoji="flag-china" />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            strokeWidth={2}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 32.17a21.33 21.33 0 0 1-5.81-.71a2.63 2.63 0 0 0-1.45.24c-1.35.76-2.64 1.62-4.17 2.58c.28-1.27.46-2.38.78-3.45a1.31 1.31 0 0 0-.6-1.74c-4.65-3.28-6.61-8.2-5.14-13.26c1.36-4.68 4.69-7.51 9.22-9a15.47 15.47 0 0 1 16.89 4.94a15.09 15.09 0 0 1 2.71 7.55m-18.13-3a1.79 1.79 0 0 0-1.72-1.78a1.73 1.73 0 0 0-1.81 1.68a1.71 1.71 0 0 0 1.7 1.78a1.76 1.76 0 0 0 1.83-1.68Zm9.3-1.78a1.79 1.79 0 0 0-1.75 1.76a1.75 1.75 0 0 0 1.8 1.7a1.73 1.73 0 1 0 0-3.46Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M40.83 42.05c-1.22-.54-2.35-1.36-3.55-1.49s-2.45.57-3.69.69a12.36 12.36 0 0 1-10-3.27C18.22 33 19 25.46 25.17 21.41c5.49-3.6 13.55-2.4 17.42 2.6a9.88 9.88 0 0 1-1.14 13.8c-1.19 1.06-1.62 1.94-.86 3.33a4 4 0 0 1 .24.91Zm-14-13.52a1.44 1.44 0 1 0 0-2.88a1.44 1.44 0 1 0 0 2.88Zm9-2.88A1.43 1.43 0 0 0 34.44 27a1.42 1.42 0 1 0 2.84.12a1.43 1.43 0 0 0-1.41-1.47Z"
            />
          </svg>
          <a className="px-2" href={`mailto:xrvitd@163.com`}>
            xrvitd
          </a>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a className="px-2" href={`mailto:xrvitd@163.com`}>
            xrvitd@163.com
          </a>
        </div>

        <div className="flex items-center  text-gray-700 dark:text-gray-200">
          <p className="flex space-x-3 px-2 pl-4 justify-end w-full">
            <a
              target="_blank"
              href="https://github.com/xrvitd"
              rel="noreferrer"
              className="hover:underline"
              data-umami-event="profile-card-github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                  <path d="M9 20.027c-3 .973-5.5 0-7-3" />
                </g>
              </svg>
            </a>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <a
              target="_blank"
              href="https://twitter.com/xrvitd"
              rel="noreferrer"
              className="hover:underline"
              data-umami-event="profile-card-linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.53s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5c0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01Z"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
