import type { Post } from "@/types";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <article>
      <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
