export async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
