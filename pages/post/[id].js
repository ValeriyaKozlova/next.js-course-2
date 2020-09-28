import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/mainLayout";
import Link from "next/link";

export default function Post({ post: serverPost }) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);
  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout title={"Post"}>
        <h1>Post {post.title}</h1>
        <hr />
        <p>{post.body}</p>
        <Link href="/posts">
          <a>Go back to all posts</a>
        </Link>
      </MainLayout>
    );
  }
}

// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null };
//   }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//   return { post };
// };

export async function getServerSideProps({ query, req }) {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return { props: {post} };
}