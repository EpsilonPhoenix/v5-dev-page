import { team, getDiscordAvatarUrl } from '@/data/team';
import { useMemo } from 'react';

export default function Home() {
  const developers = useMemo(() => team.filter((m) => m.role === 'Developer'), []);
  const contributors = useMemo(() => team.filter((m) => m.role === 'Contributor'), []);

  const roleTokens = (role: string) => {
    const isDev = role === 'Developer';
    return {
      overlay: isDev
        ? 'bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-transparent'
        : 'bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-transparent',
      ring: isDev
        ? 'ring-blue-500/30 dark:ring-blue-400/30'
        : 'ring-fuchsia-500/30 dark:ring-fuchsia-400/30',
      auraHover: isDev ? 'group-hover:bg-blue-500/20' : 'group-hover:bg-fuchsia-500/20',
      chipBorder: isDev
        ? 'border-blue-500/20 dark:border-blue-400/20'
        : 'border-fuchsia-500/20 dark:border-fuchsia-400/20',
      chipBg: isDev
        ? 'bg-blue-500/10 dark:bg-blue-400/10'
        : 'bg-fuchsia-500/10 dark:bg-fuchsia-400/10',
      chipText: isDev
        ? 'text-blue-700 dark:text-blue-300'
        : 'text-fuchsia-700 dark:text-fuchsia-300',
    };
  };

  const Card = (member: (typeof team)[number]) => {
    const t = roleTokens(member.role);
    return (
      <div key={member.userId} className="group relative">
        <div
          aria-hidden
          className={`absolute -inset-px rounded-2xl ${t.overlay} opacity-0 blur transition duration-500 group-hover:opacity-100`}
        />
        <div className="relative rounded-2xl border border-zinc-200/60 bg-white/70 p-6 shadow-lg shadow-zinc-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-900/10 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/50">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={getDiscordAvatarUrl(member.userId, member.avatarHash)}
                alt={member.name}
                className={`h-28 w-28 rounded-full object-cover ring-2 ${t.ring} ring-offset-2 ring-offset-white transition duration-300 group-hover:scale-[1.02] dark:ring-offset-zinc-900`}
                loading="lazy"
                decoding="async"
              />
              <span
                aria-hidden
                className={`pointer-events-none absolute -inset-1 -z-10 rounded-full bg-blue-500/0 blur-lg transition ${t.auraHover}`}
              />
            </div>

            <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {member.name}
            </h3>

            <span
              className={`mt-2 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${t.chipBorder} ${t.chipBg} ${t.chipText}`}
            >
              {member.role}
            </span>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent dark:via-white/10" />

          <div className="mt-4 flex justify-center">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {member.note}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // keeps the contributors centered in a 4 person grid. probably not the smartest idea 😅
  const lgCols = 4;
  const remainderLg = contributors.length % lgCols;
  const padLeftLg = remainderLg === 0 ? 0 : Math.floor((lgCols - remainderLg) / 2);

  return (
    <main className="relative min-h-[100dvh] overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(59,130,246,0.15),transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(96,165,250,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-10 sm:pt-28">
          <div className="text-center">
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400">
                V5 Dev People
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Honorable mentions to chatgpt, gemini, and claude
            </p>
          </div>

          {/* Developers */}
          <div className="relative mt-14">
            <h2 className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
              Developers
            </h2>

            {/* The background things */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-[-6rem] h-[22rem] w-[42rem] -translate-x-1/2 rounded-[50%] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-3xl dark:from-blue-400/15 dark:via-indigo-400/10" />
              <div className="absolute right-[-6rem] top-[20%] h-[12rem] w-[12rem] rounded-full bg-blue-400/15 blur-2xl dark:bg-blue-400/10" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {developers.map((m) => Card(m))}
            </div>
          </div>

          {/* Contributors */}
          <div className="relative mt-16">
            <h2 className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
              Contributors
            </h2>

            {/* More background things */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-[-5rem] top-[-3rem] h-[18rem] w-[26rem] rounded-[50%] bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-transparent blur-3xl dark:from-fuchsia-400/15 dark:via-violet-400/10" />
              <div className="absolute right-[-4rem] bottom-[-2rem] h-[14rem] w-[20rem] rounded-[50%] bg-gradient-to-tr from-violet-500/15 to-transparent blur-3xl dark:from-violet-400/10" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: padLeftLg }).map((_, i) => (
                <div key={`pad-lg-${i}`} aria-hidden className="hidden lg:block" />
              ))}
              {contributors.map((m) => Card(m))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="relative overflow-hidden rounded-xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 to-white p-6 text-center shadow-lg dark:border-white/10 dark:from-zinc-900/60 dark:to-zinc-900">
              <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                Want to contribute? Fuck off.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}