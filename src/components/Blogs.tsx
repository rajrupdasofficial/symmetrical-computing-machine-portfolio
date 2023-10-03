import React, { useState, useEffect } from "react";
import "../assets/css/blogpage.scss";
import NavBar from "./Nav";
import Layout from "./Layout";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  // Infinite scroll logic
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight && !isLoading) {
      // Fetch more blog posts here (similar to the useEffect below)
      setIsLoading(true);
      setTimeout(() => {
        // Simulated new data
        const newPosts = [
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
          { id: 3, title: "Post 3", content: "Content of Post 3" },
          { id: 4, title: "Post 4", content: "Content of Post 4" },
        ];
        setBlogPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setIsLoading(false);
      }, 1000);
    }
  };

  // Simulate fetching blog posts (you can replace this with actual API calls)
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      // Example data (you can replace this with actual data)
      const newPosts = [
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
      ];
      setBlogPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setIsLoading(false);
    }, 1000); // Simulated delay
  }, []); // Empty dependency array to run only once when the component mounts

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate a 5-second loading time (adjust as needed)
  }, []);
  return (
    <>
      {loading ? (
        <div className="container">
          <div className="progress progress-striped">
            <div className="progress-bar"></div>
          </div>
        </div>
      ) : (
        <Layout title="blogs | read latest blogs and trending news free">
          <NavBar />
          <div className="blog-page">
            <div className="blog-left" onScroll={handleScroll}>
              {blogPosts.map((post) => (
                <div className="blog-card" key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                </div>
              ))}
              {isLoading && <p>Loading...</p>}
            </div>
            <div className="blog-right">
              <div className="recent-posts">
                <h3>Recent Posts</h3>
                <ul>
                  {blogPosts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                      <a href="#">{post.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="popular-topics">
                <h3>Popular Topics</h3>
                <ul>
                  {/* Render up to 4 popular topics here */}
                  {/* ... */}
                </ul>
              </div>
              <div className="search">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Blog;
