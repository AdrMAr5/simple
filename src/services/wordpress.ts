import { GraphQLClient, gql } from 'graphql-request';
import { Post } from '@/types';

const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`);

interface GetPostsData {
  posts: {
    nodes: Post[];
  };
}

export async function getPosts(): Promise<Post[]> {
  const query = gql`
    query GetPosts {
      posts {
        nodes {
          id
          title
          content
        }
      }
    }
  `;

  const data = await client.request<GetPostsData>(query);
  return data.posts.nodes;
}
