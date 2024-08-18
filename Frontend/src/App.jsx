import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Set up Axios base URL
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNews = async () => {
    try {
      const response = await axios.get('/api/news');
      setNews(response.data.articles);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1 className='font-extrabold'>NEWS APPLICATION</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
