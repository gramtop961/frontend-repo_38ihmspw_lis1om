import { useState } from 'react'

export default function Toolbar({ onRefresh, onSearch }) {
  const [q, setQ] = useState('')

  function submit(e) {
    e.preventDefault()
    onSearch?.(q)
  }

  return (
    <div className="w-full max-w-5xl mx-auto -mt-16 md:-mt-24 px-4">
      <div className="bg-white shadow-lg border border-orange-100 rounded-xl p-4 md:p-5 flex flex-col md:flex-row gap-3 items-stretch">
        <form onSubmit={submit} className="flex-1 flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages, features, pricing, merchant..."
            className="flex-1 rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
          />
          <button type="submit" className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
            Search
          </button>
        </form>
        <button onClick={onRefresh} className="px-4 py-2 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition">
          Refresh Content
        </button>
      </div>
    </div>
  )
}
