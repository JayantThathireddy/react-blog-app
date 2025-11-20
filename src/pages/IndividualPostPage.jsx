import { useParams, Link } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { useEffect, useState } from "react";

function IndividualPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  // fetch the post, author, and comments from API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((postData) => {
        setPost(postData);

        // fetch user (author) info
        fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
          .then((res) => res.json())
          .then((userData) => setUser(userData));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          .then((res) => res.json())
          .then((commentsData) => setComments(commentsData));
      });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/blog">← Back to Posts</Link>

      <BlogPost
        title={post.title}
        content={post.body}
        author={user ? `${user.name} (${user.email})` : "Unknown Author"}
        date={`Post ID: ${post.id}`}
        initialComments={comments}
        postId={id}
      />
    </div>
  );
}

export default IndividualPostPage;
