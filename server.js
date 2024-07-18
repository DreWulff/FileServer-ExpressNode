const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define the directory where files are stored
const filesDirectory = path.join(__dirname, 'files');

// Middleware to serve static files
app.use('/files', express.static(filesDirectory));

// Endpoint to download a specific file
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(filesDirectory, filename);
  
  res.download(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});