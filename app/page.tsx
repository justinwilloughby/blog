import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Justin Willoughby
      </h1>
      <p className="mb-4">
        {`I'm a senior solutions architect and full-stack developer specializing in identity and access management.
          I'm curious, I love to learn how things work by building them myself, and I enjoy sharing what I've learned with others here.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
