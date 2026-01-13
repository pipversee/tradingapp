"use client";

import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { getArticleById } from '../../../../appwrite/api';
import { multiFormatDateString } from '@/lib/utils';

type Article = {
  articleTitle: string;
  clickbait: string;
  imageUrl: string;
  category: string;
  readTime: string;
  content: string;
  $createdAt: string;
}

function Article() {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (id) {
          const fetchedArticle = await getArticleById(id);

          // Optional: Validate structure of article here
          if (!fetchedArticle?.articleTitle || !fetchedArticle?.content) {
            throw new Error("Incomplete article data.");
          }

          setArticle({
            articleTitle: (fetchedArticle as any).articleTitle ?? (fetchedArticle as any).article_title ?? (fetchedArticle as any).title ?? "",
            content: (fetchedArticle as any).content ?? "",
            clickbait: (fetchedArticle as any).clickbait ?? (fetchedArticle as any).summary ?? "",
            category: (fetchedArticle as any).category ?? "",
            imageUrl: (fetchedArticle as any).imageUrl ?? (fetchedArticle as any).image_url ?? "",
            readTime: (fetchedArticle as any).readTime ?? (fetchedArticle as any).read_time ?? "",
            $createdAt: (fetchedArticle as any).$createdAt ?? (fetchedArticle as any).createdAt ?? ""
          });
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Failed to load article';
        setError(message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id])

  if (!article) return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="border-3 border-gray-200 border-t-[rgb(250,226,95)] rounded-full w-16 h-16 animate-spin" />
    </div>
  );

  return (
    <>
      <div className="min-h-screen px-6 md:px-12 py-3 bg-background">

        <div className="container mx-auto px-4 py-0 mt-3 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-8 hover-bounce group bg-black text-muted-foreground hover:bg-black hover:text-white transition-all duration-100 border-white/18"
          >
            <ArrowLeft className="w-4 h-4 ml-2 mr-2 group-hover:animate-wiggle" />
          </button>

          {/* Article Header */}
          <article className="animate-scale-in">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4 mt-2 animate-slide-up">
                {article.articleTitle}
              </h1>

              <h1 className="text-lg font-sans text-muted-foreground md:text-xl font-normal mb-4 mt-2 animate-slide-up">
                {article.clickbait}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 animate-slide-up">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} mins readtime</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{multiFormatDateString(article.$createdAt)}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.articleTitle}
                className="w-full h-64 md:h-96 object-cover rounded-sm shadow-lg hover-bounce"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none animate-slide-up">
              <div
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Article
