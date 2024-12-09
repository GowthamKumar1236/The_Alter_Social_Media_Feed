import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Simulating fetching posts from an API
  const fetchPosts = async () => {
    setLoading(true);
    // Placeholder for actual API call
    const newPosts = await new Array(20).fill(null).map((_, index) => ({
      id: index + 1,
      text: `Post ${index + 1}`,
      image: null,
      video: null,
      timestamp: new Date(),
    }));
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleScroll = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop === e.target.documentElement.scrollHeight) {
      fetchPosts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Feed;
