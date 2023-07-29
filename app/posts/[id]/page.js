import { getAllPostIds, getPostData } from 'utils/posts'

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id)

  return (
    <>
      <h1 className="font-extrabold text-3xl mb-1">{postData.title}</h1>

      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  )
}
