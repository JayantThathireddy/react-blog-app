import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function CommentSection({ initialComments = [], postId }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const { user } = useAuth();
    // Normalize incoming initial comments so each item has { name, text }
    const normalize = (c) => (c && c.body ? { name: c.name || "Anonymous", text: c.body } : c);
    const [comments, setComments] = useState(initialComments.map(normalize));
   
   const sectionStyle = {
       backgroundColor: "white",
       padding: "25px",
       borderRadius: "8px",
       boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
       marginTop: "20px",
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();
      // Use logged-in user's name if available, otherwise fallback to name state (though form is hidden if not logged in)
      const authorName = user ? user.username : name.trim();

      if (authorName && comment.trim() !== "") {
          const newComment = { name: authorName, text: comment.trim() };
          
          // If postId is provided, POST to API
          if (postId) {
              const apiComment = {
                  name: authorName,
                  body: comment.trim(),
                  postId: postId,
              };
              
              fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(apiComment),
              })
                  .then((res) => res.json())
                  .then((data) => {
                      // Add the returned comment to the list
                      setComments([...comments, { name: data.name, text: data.body }]);
                      setName("");
                      setComment("");
                  })
                  .catch((error) => {
                      console.error("Error posting comment:", error);
                      // Still add locally even if API fails
                      setComments([...comments, newComment]);
                      setName("");
                      setComment("");
                  });
          } else {
              // No postId, just add locally
              setComments([...comments, newComment]);
              setName("");
              setComment("");
          }
      }
   };
   
   return (
       <div style={sectionStyle}>
           <h3 style={{ color: "#333", marginBottom: "15px" }}>Comments</h3>
           
           {user ? (
               <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                   <p style={{ marginBottom: "10px", color: "#666", fontSize: "14px" }}>
                       Commenting as: <strong>{user.username}</strong>
                   </p>
                   <textarea
                       value={comment}
                       onChange={(e) => setComment(e.target.value)}
                       placeholder="Add a comment"
                       required
                       style={{
                           width: "100%",
                           padding: "12px",
                           borderRadius: "4px",
                           border: "1px solid #ddd",
                           marginBottom: "10px",
                           minHeight: "80px",
                           fontSize: "14px",
                           fontFamily: "Arial, Helvetica, sans-serif",
                           resize: "vertical",
                       }}
                   />
                   <button
                       type="submit"
                       style={{
                           backgroundColor: "#f5a623",
                           color: "white",
                           border: "none",
                           padding: "10px 24px",
                           borderRadius: "4px",
                           cursor: "pointer",
                           fontSize: "14px",
                           fontWeight: "500",
                       }}
                   >
                       Submit
                   </button>
               </form>
           ) : (
               <p style={{ color: "#666", marginBottom: "20px", fontStyle: "italic" }}>
                   Please <Link to="/login" style={{ color: "#4a76cf" }}>login</Link> to leave a comment.
               </p>
           )}

           <h4 style={{ color: "#333", marginBottom: "10px" }}>Existing Comments:</h4>
           {comments.length === 0 ? (
               <p style={{ color: "#666", fontStyle: "italic" }}>
                   No comments yet. Be the first to comment!
               </p>
           ) : (
               <ul style={{ listStyle: "none", paddingLeft: "0", marginTop: "10px" }}>
                   {comments.map((c, i) => (
                       <li
                           key={i}
                           style={{
                               padding: "10px",
                               marginBottom: "10px",
                               backgroundColor: "#f9f9f9",
                               borderRadius: "4px",
                               borderLeft: "3px solid #4a76cf",
                           }}
                       >
                           <strong style={{ color: "#333" }}>{c.name}</strong>
                           <p style={{ color: "#666", margin: "5px 0 0 0" }}>{c.text}</p>
                       </li>
                   ))}
               </ul>
           )}
       </div>
   );
}

export default CommentSection;
