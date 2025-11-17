export default function Cards({ pages, loading }) {
  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-40 bg-neutral-100 rounded-xl animate-pulse" />
        ))}
      </div>
    )
  }

  if (!pages?.length) {
    return (
      <div className="text-center text-neutral-600 py-16">No pages yet. Try Refresh Content.</div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {pages.map((p) => (
        <a key={p.id || p.url} href={p.url} target="_blank" rel="noreferrer" className="group block rounded-xl border border-neutral-200 hover:border-orange-300 hover:shadow-md transition overflow-hidden">
          {p.image ? (
            <img src={p.image} alt={p.title || p.url} className="w-full h-40 object-cover" />
          ) : (
            <div className="w-full h-40 bg-gradient-to-br from-orange-50 to-neutral-100" />
          )}
          <div className="p-4">
            <h3 className="font-semibold text-neutral-900 group-hover:text-orange-600 line-clamp-2">{p.title || p.url}</h3>
            {p.description && <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{p.description}</p>}
            {p.keywords_matched?.length ? (
              <div className="flex flex-wrap gap-1 mt-2">
                {p.keywords_matched.slice(0, 5).map((k) => (
                  <span key={k} className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{k}</span>
                ))}
              </div>
            ) : null}
          </div>
        </a>
      ))}
    </div>
  )
}
