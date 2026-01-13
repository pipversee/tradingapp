"use client";

import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, Trash2 } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/navbar';
import { multiFormatDateString } from '@/lib/utils';


const Articles = () => {
  const { data: isAdmin } = useSession()
  const { articles, deleteArticle } = useAdmin()

  return (
    <main className="min-h-screen bg-black selection:bg-white/20">
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
        <div className="w-full mx-auto px-4">
          {/* Header */}
          <div className="text-center md:text-start w-full space-y-3 mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl md:max-w-xl font-serif leading-[125%] text-foreground">
              Gain Knowledge with Our <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent'>In-Detail Articles</span>
            </h2>
            <p className="text-[18px] text-center md:text-start text-muted-foreground font-clean max-w-2xl">
              Stay ahead of the market with in-depth articles covering stocks, trends, and smart investing strategies. Clear insights, real analysis—no noise, just what actually helps you make better decisions.
            </p>
          </div>


          {/* article Posts Grid */}
          {articles.length === 0 ? (
            <div className='w-full py-16 text-center mx-auto border-t border-t-white/22 overflow-hidden'>
              <p className='text-lg text-gray-600'>No articles to show right now...</p>
            </div>
          ) : null}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={article.$id}
                className="group max-h-120 hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-2 border-white/24 hover:border hover:border-white/40 animate-bounce-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Featured Image */}
                <div className="relative -mt-6 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.articleTitle}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-comic font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-sans font-bold text-foreground group-hover:text-green-600 transition-colors line-clamp-2">
                    {article.articleTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground h-12 font-clean line-clamp-3">
                    {article.clickbait}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      {/* <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span className="font-clean">{article.date.split("T")[0]}</span>
                      </div> */}
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span className="font-clean">{article.readTime} mins readtime</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span className="font-clean">{multiFormatDateString(article.$createdAt)}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="flex justify-end items-end gap-2">
                    <Link href={`/articles/${article.$id}`}>
                      <Button variant="default" size="sm" className="group">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    {isAdmin ? (
                      <Button variant="outline" size="sm" className="group bg-linear-to-r from-green-500 to-green-700 mt-2" onClick={() => deleteArticle(article.$id)}>
                        <span>Delete</span>
                        <Trash2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Articles
