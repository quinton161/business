// Minimal zero-dependency static file server for the cloned Webflow site.
// Serves files from ./site with clean-URL support (/about -> site/about.html).
import http from 'node:http'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, 'site')
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

async function tryFile(p) {
  try {
    const stat = await fs.stat(p)
    if (stat.isFile()) return p
    if (stat.isDirectory()) {
      const idx = path.join(p, 'index.html')
      const s = await fs.stat(idx)
      if (s.isFile()) return idx
    }
  } catch {
    /* not found */
  }
  return null
}

async function resolve(urlPath) {
  // Decode and strip query, block path traversal.
  let decoded = decodeURIComponent(urlPath.split('?')[0])
  if (decoded.includes('\0')) return null
  const rel = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '')
  const base = path.join(ROOT, rel)
  if (!base.startsWith(ROOT)) return null

  // 1. exact file / directory index
  let found = await tryFile(base)
  if (found) return found
  // 2. clean URL -> append .html
  if (!path.extname(base)) {
    found = await tryFile(base + '.html')
    if (found) return found
  }
  return null
}

const server = http.createServer(async (req, res) => {
  try {
    const target = req.url === '/' ? '/index.html' : req.url
    let file = await resolve(target)
    if (!file) {
      // Fall back to custom 404 page if present, else index.
      file = (await resolve('/404.html')) || (await resolve('/index.html'))
      if (file) res.statusCode = 404
    }
    if (!file) {
      res.statusCode = 404
      res.end('Not found')
      return
    }
    const ext = path.extname(file).toLowerCase()
    res.setHeader('Content-Type', TYPES[ext] || 'application/octet-stream')
    const data = await fs.readFile(file)
    res.end(data)
  } catch (err) {
    res.statusCode = 500
    res.end('Server error')
  }
})

server.listen(PORT, HOST, () => {
  console.log(`Static site server running at http://${HOST}:${PORT}/`)
})
