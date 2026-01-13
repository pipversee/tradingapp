"use client";

import Navbar from '@/components/sections/navbar'
import StockPill from '@/components/StockPill';
import { Button } from '@/components/ui/button';
import { MagicCard } from '@/components/ui/magic-card';
import { useAdmin } from '@/context/AdminContext';
import { multiFormatDateString } from '@/lib/utils';
import { ArrowRight, Calendar, Clock, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const StockUpdate = () => {
  const { data: isAdmin } = useSession()
  const { stockUpdates, deleteStockUpdate } = useAdmin()
  const theme = useTheme()


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
        <div className="mx-auto px-4">
          {/* Header */}
          <div className="text-center md:text-start w-full space-y-3 mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl md:max-w-xl font-serif leading-[125%] text-foreground">
              Stay Informed with Our <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent'>Daily Stock Updates</span>
            </h2>
            <p className="text-[18px] text-center md:text-start text-muted-foreground font-clean max-w-2xl">
              Daily stock updates with real market moves, not recycled news. Spot opportunities before the crowd reacts.
            </p>
          </div>

          {/* lesson Posts Grid */}
          {stockUpdates.length === 0 ? (
            <div className='w-full py-16 text-center mx-auto border-t border-t-white/22 overflow-hidden'>
              <p className='text-lg text-gray-600'>No stock updates to show right now...</p>
            </div>
          ) : null}

          {/* IMAGE */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stockUpdates.map((stockUpdate) => (
              <MagicCard
                gradientColor={"#262626"}
                className="p-0"
              >

                <div className="w-full flex flex-col max-w-md overflow-hidden rounded-2xl">
                  <div className="relative h-60 w-full">
                    <Image
                      src={stockUpdate.imageUrl}
                      alt="."
                      fill
                      className="object-cover p-2 rounded-2xl"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  <div className="space-y-3 p-4">
                    <h2 className="text-lg font-semibold leading-snug font-sans text-white">
                      {stockUpdate.updateTitle}
                    </h2>

                    {/* SOURCE */}
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <span>Admin</span>
                      <span>•</span>
                      <span className='flex justify-center items-center gap-0.5'>
                        <Clock className="w-3 h-3" />
                        {multiFormatDateString(stockUpdate.$createdAt)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        {/* <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span className="font-clean">{stockUpdate.date.split("T")[0]}</span>
                      </div> */}
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span className="font-clean">{stockUpdate.updateReadTime} mins readtime</span>
                        </div>
                      </div>
                    </div>

                    {/* TICKERS */}
                    <div className="flex flex-row w-full flex-wrap gap-2">
                      {
                        stockUpdate.updateStockSymbol
                          .split(',')
                          .map(s => s.trim())
                          .slice(0, 4)
                          .map((symbol, i) => (
                            <StockPill key={`${symbol}-${i}`} symbol={symbol} value="" />
                          ))
                      }
                    </div>

                    {/* Read More Button */}
                    <div className="flex justify-end items-end gap-2">
                      <Link href={`/stock-updates/${stockUpdate.$id}`}>
                        <Button variant="default" size="sm" className="group">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      {isAdmin ? (
                        <Button variant="outline" size="sm" className="group bg-linear-to-r from-green-500 to-green-700 mt-2" onClick={() => deleteStockUpdate(stockUpdate.$id)}>
                          <span>Delete</span>
                          <Trash2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default StockUpdate
