import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // State to store news data and loading/error status
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch news
  const getNews = async () => {
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const response = await axios.get('https://initial-web-projects.onrender.com/api/news', {
        withCredentials: true // Include credentials if needed
      });
      setNews(response.data.articles); // Adjust according to the API response structure
    } catch (error) {
      setError('Error fetching news');
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={getNews}>Get News</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {news.length > 0 ? (
          <ul>
            {news.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
}

export default App;
