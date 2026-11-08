import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/portfolio/site-header";
import { getPost, posts } from "@/lib/writing";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Razan Mohamed`,
    description: post.summary
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = getPost((await params).slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background technical-grid">
      <SiteHeader />

      <article className="mx-auto w-full max-w-2xl px-6 pb-24 pt-28 md:px-12 md:pt-36">
        <Link
          href="/#writing"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          All writing
        </Link>

        <header className="mt-8 animate-fade-up border-b border-velvet-edge pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-velvet-gold">
            {post.date}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-velvet-text md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-foreground/75">{post.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="mt-10 space-y-6 text-base leading-8 text-foreground/80 md:text-lg">
          {post.body.split(/\n\s*\n/).map((block, index) => {
            const lines = block.trim().split("\n");

            if (block.startsWith("## ")) {
              return (
                <h2 key={index} className="pt-4 text-2xl font-semibold text-velvet-lilac">
                  {block.slice(3)}
                </h2>
              );
            }

            if (lines.every((line) => line.startsWith("- "))) {
              return (
                <ul key={index} className="list-disc space-y-2 pl-6 marker:text-primary">
                  {lines.map((line) => (
                    <li key={line}>{line.slice(2)}</li>
                  ))}
                </ul>
              );
            }

            return <p key={index}>{block}</p>;
          })}
        </div>

        <footer className="mt-16 border-t border-velvet-edge pt-8">
          <Link
            href="/#contact"
            className="font-mono text-sm text-primary hover:underline"
          >
            Enjoyed this? Let&apos;s talk →
          </Link>
        </footer>
      </article>
    </main>
  );
}
