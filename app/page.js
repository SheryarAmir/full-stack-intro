import prisma from "@/lib/prisma";  
import Post from "./components/Post"// Assuming prisma is set up correctly
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },  // Ensure 'published' matches your schema
    include: {
      author: {
        select: { name: true }
      }
    }
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log({ posts });

  return (
    <div className="">
      <main>
          <Link href={'/add-post'}>Add Post</Link>
        <h1>Feed</h1>
        
         {
          posts.map((post)=>{
            return (
              <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              // autherName:{post.author.name}
              />
            )
          })
         }
      </main>
    </div>
  );
}
