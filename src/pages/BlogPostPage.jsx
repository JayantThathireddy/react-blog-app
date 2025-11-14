import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);

  //api call copied from canvas
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Error fetching posts:', error));
}, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <Link to={`/post/${post.id}`} style={{ fontWeight: "bold", color: "#1a4f8b" }}>
              {post.title}
            </Link>
            <p>
            <em> By user {post.userId}</em>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostsPage;
