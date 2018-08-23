import React from 'react'
import { renderToString } from 'react-dom/server'

export default ctx => {
  ctx.body = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width,initial-scale=1'>
  </head>
  <body>
    <h1>Hello</h1>
    <div id=root></div>
    <script src='/main.js'></script>
  </body>
  `
}
