import { getPosts } from "@/services/wordpress";
import PostComponent from "@/components/Post";
import { Post } from "@/types";

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Headless WordPress Site</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
