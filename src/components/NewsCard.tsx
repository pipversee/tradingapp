import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const NewsCard = ({ news }: any) => {
  return (
    <div>
      <div className="bg-black max-w-9xl px-6 py-4 border border-white/22 rounded-base shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-8 w-full md:w-6xl h-full">
        <div className='flex-1 flex flex-col gap-y-2 md:gap-y-3 justify-between'>
          <div>
            <h5 className=" text-white max-w-xl line-clamp-2 text-xl font-semibold font-sans tracking-tight">{news?.title}</h5>
            <p className="mb-1 max-w-xl line-clamp-3 text-muted-foreground">{news?.description}</p>
            <p className="mb-3 max-w-xl line-clamp-3 text-sm text-foreground">Source: {news?.source.name}</p>
          </div>
          <div>
            <a href={news.url} target='_blank'>
              <Button className='px-8' variant={'default'}>
                Read more <ArrowRight />
              </Button>
            </a>
          </div>
        </div>
        <div className="relative w-full md:w-48 h-48 md:h-32 shrink-0">
          <Image
            src={news?.image || 'https://picsum.photos/200'}
            alt={news?.title || 'news image'}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className='object-cover rounded-sm'
          />
        </div>
      </div>

    </div>
  )
}

export default NewsCard
