import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/40 border border-white/50 shadow-xl rounded-2xl px-6 py-5 md:px-10 md:py-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-800">
            SME SaaS Insights from Mezzofy
          </h1>
          <p className="mt-3 md:mt-4 text-neutral-700 md:text-lg">
            Automatically curated pages focused on SMEs: pricing, features, merchant tools, and more.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}
