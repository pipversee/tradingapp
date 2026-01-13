"use client";

import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { getLessonById, getStockUpdateById } from '../../../../appwrite/api';
import { multiFormatDateString } from '@/lib/utils';

type Lesson = {
  updateTitle: string;
  updateStockSymbol: string;
  imageUrl: string;
  expectedReturn: string;
  updateReadTime: string;
  updateContent: string;
  // date: string;
  $createdAt: string;
}

function StockUpdates() {
  const { id } = useParams<{ id: string }>()
  const [stockUpdate, setStockUpdate] = useState<Lesson | null>(null)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStockUpdate = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (id) {
          const fetchedStockUpdate = await getStockUpdateById(id);

          // Optional: Validate structure of lesson here
          if (!fetchedStockUpdate?.updateTitle || !fetchedStockUpdate?.updateContent) {
            throw new Error("Incomplete update data.");
          }

          setStockUpdate({
            updateTitle: (fetchedStockUpdate as any).updateTitle ?? (fetchedStockUpdate as any).update_title ?? (fetchedStockUpdate as any).title ?? "",
            // date: (fetchedStockUpdate as any).date ?? "",
            updateContent: (fetchedStockUpdate as any).updateContent ?? "",
            updateStockSymbol: (fetchedStockUpdate as any).updateStockSymbol ?? (fetchedStockUpdate as any).summary ?? "",
            expectedReturn: (fetchedStockUpdate as any).expectedReturn ?? "",
            imageUrl: (fetchedStockUpdate as any).imageUrl ?? (fetchedStockUpdate as any).image_url ?? "",
            updateReadTime: (fetchedStockUpdate as any).updateReadTime ?? (fetchedStockUpdate as any).update_read_time ?? "",
            $createdAt: (fetchedStockUpdate as any).$createdAt ?? (fetchedStockUpdate as any).createdAt ?? ""
          });
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Failed to load lesson';
        setError(message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStockUpdate();
  }, [id])

  if (!stockUpdate) return (
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
            {/* <ArrowBigLeftIcon className="w-4 h-4 ml-2 mr-2 group-hover:animate-wiggle" /> */}
          </button>

          {/* Article Header */}
          <article className="animate-scale-in">

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4 mt-2 animate-slide-up">
                {stockUpdate.updateTitle}
              </h1>

              {/* <h1 className="text-lg font-sans text-muted-foreground md:text-xl font-normal mb-4 mt-2 animate-slide-up">
                {stockUpdate.clickbait}
                </h1> */}

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 animate-slide-up">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{stockUpdate.updateReadTime} mins readtime</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{multiFormatDateString(stockUpdate.$createdAt)}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <img
                src={stockUpdate.imageUrl}
                alt={stockUpdate.updateTitle}
                className="w-full h-64 md:h-96 object-cover rounded-sm shadow-lg hover-bounce"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none animate-slide-up">
              <div
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: stockUpdate.updateContent }}
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default StockUpdates
