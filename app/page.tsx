export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        We&apos;ve moved
      </h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        This site now lives at a new home.
      </p>
      <a
        href="https://craigo.dev"
        className="rounded-full bg-foreground px-6 py-3 text-lg font-medium text-background transition-opacity hover:opacity-80"
      >
        craigo.dev
      </a>
    </div>
  );
}
