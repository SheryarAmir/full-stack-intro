import prisma from "@/lib/prisma";  // Assuming prisma is set up correctly

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
        <h1>Feed</h1>
        {/* Render posts here if needed */}
      </main>
    </div>
  );
}
