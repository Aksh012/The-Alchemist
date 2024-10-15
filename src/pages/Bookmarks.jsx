import React, { useEffect, useState } from 'react';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const userId = 'USER_ID'; // Replace with the actual user ID from your authentication system

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch(`http://localhost:5000/bookmarks/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bookmarks');
        }
        const data = await response.json();
        setBookmarks(data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error.message);
      }
    };

    fetchBookmarks();
  }, [userId]);

  return (
    <div>
      <h1>Your Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark._id}>{bookmark.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default  Bookmarks;
