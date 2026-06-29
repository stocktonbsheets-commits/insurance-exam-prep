import { PageHero } from "../page-hero";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero title="Why I built this" />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-16">
      <div className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300">
        <p>
          I've studied for these exams myself, and I found the courses out
          there exhausting. They're word-heavy — page after page of dense
          reading — with a handful of quiz questions bolted on at the end
          and barely any real video instruction. By the time you actually
          get tested on the material, you've already lost momentum just
          getting through the reading.
        </p>
        <p>
          What actually works, in my experience, is practice: taking
          questions that feel like the real exam, getting told immediately
          why you got something wrong, and doing it again until it sticks.
          Reading should support that — not be the entire course.
        </p>
        <p>
          So that's what this is built around. Every module lets you skip
          straight to the quiz if you want to. Every question comes with an
          explanation the moment you answer it, right or wrong. There's a
          missed-question review mode so you keep drilling exactly what
          you're weak on instead of re-reading everything. And the practice
          exam is timed at the same per-question pace and pass bar as the
          real Idaho test — a shorter run at the same speed and difficulty,
          so there are fewer surprises on exam day.
        </p>
        <p>
          The content itself is still rigorous — every Idaho Insurance Law
          module cites real Idaho Code and IDAPA sections, and every module
          is checked against Pearson VUE's official Idaho content outline so
          nothing major is missing. But the format is built for people who,
          like me, would rather practice their way to passing than read
          their way there.
        </p>
        <p>
          My goal is to make the licensing process easier and quicker for
          the next person who has to go through it — including the new
          agents at Sheets Advisory Group, the agency I've connected this
          course with.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-background p-6 text-sm text-zinc-600 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:text-zinc-400 dark:ring-white/[.1]">
        Questions, corrections, or feedback on the content? Email{" "}
        <a
          href="mailto:contact@idahoexamprep.org"
          className="text-brand-600 hover:underline dark:text-brand-300"
        >
          contact@idahoexamprep.org
        </a>
        .
      </div>
      </main>
    </div>
  );
}
