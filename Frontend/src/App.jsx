import React from 'react';
import axios from 'axios';

function App() {
  
  const getNews = async () => {
    try {
      const response = await axios.get('https://initial-web-projects.onrender.com/api/news', {
        withCredentials: true // Include credentials if needed
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div>
      <button onClick={getNews}>Get News</button>
    </div>
  );
}

export default App;
