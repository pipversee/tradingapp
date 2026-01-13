"use client";

import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { getLessonById } from '../../../../appwrite/api';
import { multiFormatDateString } from '@/lib/utils';

type Lesson = {
  lessonTitle: string;
  clickbait: string;
  imageUrl: string;
  category: string;
  readTime: string;
  content: string;
  $createdAt: string;
}

function Lessons() {
  const { id } = useParams<{ id: string }>()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLesson = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (id) {
          const fetchedLesson = await getLessonById(id);

          // Optional: Validate structure of lesson here
          if (!fetchedLesson?.lessonTitle || !fetchedLesson?.content) {
            throw new Error("Incomplete lesson data.");
          }

          setLesson({
            lessonTitle: (fetchedLesson as any).lessonTitle ?? (fetchedLesson as any).lesson_title ?? (fetchedLesson as any).title ?? "",
            content: (fetchedLesson as any).content ?? "",
            clickbait: (fetchedLesson as any).clickbait ?? (fetchedLesson as any).summary ?? "",
            category: (fetchedLesson as any).category ?? "",
            imageUrl: (fetchedLesson as any).imageUrl ?? (fetchedLesson as any).image_url ?? "",
            readTime: (fetchedLesson as any).readTime ?? (fetchedLesson as any).read_time ?? "",
            $createdAt: (fetchedLesson as any).$createdAt ?? (fetchedLesson as any).createdAt ?? ""
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

    fetchLesson();
  }, [id])

  if (!lesson) return (
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
                {lesson.lessonTitle}
              </h1>

              <h1 className="text-lg font-sans text-muted-foreground md:text-xl font-normal mb-4 mt-2 animate-slide-up">
                {lesson.clickbait}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 animate-slide-up">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Admin</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{lesson.date.split("T")[0]}</span>
                </div> */}
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.readTime} mins readtime</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{multiFormatDateString(lesson.$createdAt)}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <img
                src={lesson.imageUrl}
                alt={lesson.lessonTitle}
                className="w-full h-64 md:h-96 object-cover rounded-sm shadow-lg hover-bounce"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none animate-slide-up">
              <div
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Lessons
