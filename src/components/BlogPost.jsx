import { useState } from "react";
import CommentSection from "./CommentSection";

function BlogPost({ title, content, author, date, initialComments = [], postId }) {
   const [likes, setLikes] = useState(0);
   
   const postStyle = {
       backgroundColor: "white",
       borderRadius: "8px",
       padding: "25px",
       margin: "15px 0",
       boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
   };
   
   const buttonStyle = {
       backgroundColor: "#4a76cf",
       color: "white",
       border: "none",
       padding: "8px 16px",
       borderRadius: "4px",
       cursor: "pointer",
       fontSize: "14px",
   };
   
   return (
       <div>
           <article style={postStyle}>
               <h2 style={{ color: "#333", marginBottom: "15px" }}>{title}</h2>
               <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "15px" }}>{content}</p>
               <p style={{ color: "#666", fontSize: "14px" }}><strong>Author:</strong> {author}</p>
               <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}><strong>Date:</strong> {date}</p>
               <button onClick={() => setLikes(likes + 1)} style={buttonStyle}>
                   👍 {likes} Likes
               </button>
           </article>
           <CommentSection initialComments={initialComments} postId={postId} />
       </div>
   );
}

export default BlogPost;
