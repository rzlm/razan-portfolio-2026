export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  // Blocks are separated by a blank line. Start a block with "## " for a
  // heading, or write every line as "- item" for a bulleted list.
  body: string;
};

export const posts: Post[] = [
  {
    slug: "designing-learning-tools-that-scale",
    title: "Designing Learning Tools That Scale",
    date: "May 2026",
    summary:
      "Reflections on turning classroom needs into software systems that support students, instructors, and long-term program growth.",
    tags: ["Education", "Software"],
    body: `Running training programs for thousands of students taught me that the hardest part of an education tool is rarely the code. It is understanding what instructors and students actually need, and building something that still works when the program doubles in size.

## Start with the workflow, not the feature

Before writing anything, map out how a course actually runs: who creates content, who reviews it, how students find it, and where things fall through the cracks. Most of the useful software ideas show up as friction in that map.

## Design for the next cohort

A tool that works for one class often breaks for ten. A few habits that help:

- Keep content separate from the code that displays it
- Make the common path fast and the rare path possible
- Measure what students actually use before adding more

## What I'd tell my past self

Scale is not just about traffic. It is about whether the next person running the program can understand and maintain what you built.`
  },
  {
    slug: "what-student-builders-learn-from-startups",
    title: "What Student Builders Learn From Startups",
    date: "April 2026",
    summary:
      "Notes from working with founders, translating early product ideas into technical roadmaps, and finding the smallest useful launch path.",
    tags: ["Startups", "Product"],
    body: `Working alongside founders at the Laurier StartUp Lab changed how I think about building software. In a class, the problem is defined for you. In a startup, figuring out the problem is most of the job.

## Ideas are not roadmaps

Founders arrive with a vision. The technical work is turning that vision into a sequence of small, testable steps, and being honest about which steps can wait.

## The smallest useful launch

The best question I learned to ask is: what is the smallest thing we can put in front of a real user this month? It forces trade-offs early, while they are still cheap.

## Lessons I'm keeping

- Ship something small before building something big
- Write down assumptions so you can check them later
- Good documentation is a feature, not an afterthought`
  },
  {
    slug: "making-ai-workflows-easier-to-trust",
    title: "Making AI Workflows Easier to Trust",
    date: "March 2026",
    summary:
      "A practical look at how interface design, documentation, and validation loops make AI-assisted tools more usable.",
    tags: ["AI", "UX"],
    body: `AI tools are powerful, but people only rely on them when they understand what the tool did and why. Trust is a design problem as much as a model problem.

## Show your work

When an AI system generates a lesson plan or a summary, showing the sources it drew from lets people check the output instead of taking it on faith.

## Build in validation loops

Every AI workflow I've worked on got better once there was a clear point where a human reviews, edits, or approves the result. Those checkpoints catch mistakes and teach you where the system is weak.

## Document the limits

- Say what the tool is good at, and what it is not
- Make it easy to report a bad output
- Treat the first version as an experiment, not a finished product`
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
