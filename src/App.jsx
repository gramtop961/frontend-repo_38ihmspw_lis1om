import { useEffect, useState, useCallback } from 'react'
import Hero from './components/Hero'
import Toolbar from './components/Toolbar'
import Cards from './components/Cards'

const API = import.meta.env.VITE_BACKEND_URL || ''

async function apiGet(path) {
  const res = await fetch(`${API}${path}`)
  if (!res.ok) throw new Error('Request failed')
  return res.json()
}

async function apiPost(path, body) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {}),
  })
  if (!res.ok) throw new Error('Request failed')
  return res.json()
}

function Header() {
  return (
    <header className="w-full py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500" />
          <span className="font-semibold text-neutral-900">Mezzofy SME Curator</span>
        </div>
        <a href="https://www.mezzofy.com" target="_blank" rel="noreferrer" className="text-sm text-neutral-600 hover:text-orange-600">Visit mezzofy.com</a>
      </div>
    </header>
  )
}

export default function App() {
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(false)

  const loadPages = useCallback(async (q) => {
    setLoading(true)
    try {
      const data = await apiGet(`/pages${q ? `?q=${encodeURIComponent(q)}` : ''}`)
      setPages(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      await apiPost('/crawl', { max_pages: 20 })
      await loadPages()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [loadPages])

  useEffect(() => {
    loadPages()
  }, [loadPages])

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Hero />
      <Toolbar onRefresh={refresh} onSearch={loadPages} />
      <Cards pages={pages} loading={loading} />
      <footer className="py-10 text-center text-sm text-neutral-500">
        Built with warm orange accents and a minimalist feel.
      </footer>
    </div>
  )
}
