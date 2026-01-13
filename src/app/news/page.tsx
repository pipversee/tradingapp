"use client";

import NewsCard from '@/components/NewsCard'
import Navbar from '@/components/sections/navbar'
import { Button } from '@/components/ui/button';
import { useStockNews } from '@/hooks/react-query/queries'
import Image from 'next/image'
import React from 'react'

const News = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useStockNews();

  return (
    <div>
      <Navbar />
      {/* Floor Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none hidden md:block">
        <Image
          alt="Floor background"
          src="https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbg-hero-1.jpg&w=3840&q=100&dpl=dpl_4tUqZd5uM7Tom4zJTxfJ7UkQvKFx"
          fill
          priority
          className="object-cover opacity-80 transition-opacity duration-500"
          style={{ objectPosition: 'center top' }}
        />
      </div>

      <section className="mx-auto max-w-5xl px-2 md:px-14 pb-8 md:h-full md:max-h-237.5 md:max-w-7xl pt-14 md:pt-20 relative z-30">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="text-center md:text-start w-full space-y-3 mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl md:max-w-xl font-serif leading-[125%] text-foreground">
              Stay ahead with our&nbsp;
              <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent z-10'>
                Latest News
              </span>
            </h2>
            <p className="text-[18px] text-center md:text-start text-muted-foreground font-clean max-w-2xl">
              Stay updated with the latest Indian stock market news, key corporate announcements, and market-moving insights — all in one place. Get concise, reliable updates that help you understand market trends without the noise.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 justify-center items-center'>
          {data?.pages.map((page) =>
            page.articles.map((news: any) => (
              <NewsCard news={news} />
            ))
          )}
          <div className='flex w-full justify-end items-end py-3'>
            {hasNextPage && (
              <Button
                variant={'default'}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2 border rounded-sm"
              >
                {isFetchingNextPage ? "Loading..." : "View More"}
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
