# Alternative Solution 3: Express Server with Proper SPA Handling

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('All routes will work properly:');
  console.log('- http://localhost:3000/');
  console.log('- http://localhost:3000/menu');
  console.log('- http://localhost:3000/deals');
  console.log('- http://localhost:3000/favourite');
});
