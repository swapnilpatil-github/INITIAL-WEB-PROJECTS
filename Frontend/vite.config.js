export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://initial-web-projects.onrender.com'
    }
  }
});
