
const PortfolioSkeleton = () => {
  return (
    <main className="min-h-screen animate-pulse bg-[#030407] px-5 py-8 text-white">

      {/* Navbar skeleton */}
      <div className="mx-auto flex max-w-6xl justify-between">
        <div className="h-8 w-32 rounded bg-zinc-800" />
        <div className="h-8 w-24 rounded bg-zinc-800" />
      </div>

      {/* Hero skeleton */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 py-20 md:grid-cols-2">
        <div className="space-y-5">
          <div className="h-5 w-32 rounded bg-zinc-800" />
          <div className="h-10 w-4/5 rounded bg-zinc-800" />
          <div className="h-10 w-full rounded bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-3/4 rounded bg-zinc-800" />
          <div className="h-10 w-32 rounded-full bg-zinc-800" />
        </div>

        <div className="mx-auto h-64 w-64 rounded-full bg-zinc-800" />
      </section>

      {/* About skeleton */}
      <section className="mx-auto max-w-6xl py-12">
        <div className="mx-auto mb-10 h-8 w-48 rounded bg-zinc-800" />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-52 rounded-xl bg-zinc-800" />
          <div className="space-y-4">
            <div className="h-5 w-3/4 rounded bg-zinc-800" />
            <div className="h-4 w-full rounded bg-zinc-800" />
            <div className="h-4 w-full rounded bg-zinc-800" />
            <div className="h-4 w-2/3 rounded bg-zinc-800" />
          </div>
        </div>
      </section>

      {/* Skills skeleton */}
      <section className="mx-auto max-w-6xl py-12">
        <div className="mx-auto mb-10 h-8 w-40 rounded bg-zinc-800" />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="h-20 rounded-xl border border-zinc-800 bg-zinc-900"
            />
          ))}
        </div>
      </section>

      {/* Projects skeleton */}
      <section className="mx-auto max-w-6xl py-12">
        <div className="mx-auto mb-10 h-8 w-48 rounded bg-zinc-800" />

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl border border-zinc-800"
            >
              <div className="h-40 bg-zinc-800" />
              <div className="space-y-4 p-5">
                <div className="h-5 w-3/4 rounded bg-zinc-800" />
                <div className="h-4 w-full rounded bg-zinc-800" />
                <div className="h-4 w-2/3 rounded bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education skeleton */}
      <section className="mx-auto max-w-6xl py-12">
        <div className="mx-auto mb-10 h-8 w-56 rounded bg-zinc-800" />

        <div className="mx-auto max-w-2xl space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-zinc-800 p-5"
            >
              <div className="h-4 w-24 rounded bg-zinc-800" />
              <div className="mt-4 h-5 w-3/4 rounded bg-zinc-800" />
              <div className="mt-3 h-4 w-full rounded bg-zinc-800" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact skeleton */}
      <section className="mx-auto max-w-6xl py-12">
        <div className="mx-auto mb-10 h-8 w-40 rounded bg-zinc-800" />

        <div className="mx-auto max-w-xl space-y-4">
          <div className="h-12 rounded-lg bg-zinc-800" />
          <div className="h-12 rounded-lg bg-zinc-800" />
          <div className="h-28 rounded-lg bg-zinc-800" />
          <div className="h-10 w-32 rounded-full bg-zinc-800" />
        </div>
      </section>

    </main>
  );
};

export default PortfolioSkeleton;
