// Minimal static server for the Super Cool Storage one-pager.
// Railway sets PORT; we bind to it and serve everything in /public.
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

// SPA-ish fallback: any unknown path returns the one-pager.
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Super Cool Storage running on :${port}`));
