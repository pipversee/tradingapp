"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, FileText, Target } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import TradeCard from '@/components/TradeCard';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/sections/navbar';
import { multiFormatDateString } from '@/lib/utils';
import { MagicCard } from '@/components/ui/magic-card';

const Trades = () => {

  let admin;
  try {
    admin = useAdmin();
  } catch {
    return null;
  }

  const { trades, handleArchive } = admin;
  const [selectedTrade, setSelectedTrade] = useState<typeof trades[number] | null>(null);

  const activeTrades = trades.filter((t) => t.tradeStatus === "active");
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
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="text-center md:text-start w-full space-y-3 mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl md:max-w-xl font-serif leading-[125%] text-foreground">
              Our <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent z-10'>Active Trades</span>
            </h2>
            <p className="text-[18px] text-center md:text-start text-muted-foreground font-clean max-w-2xl">
              Every trade tells a story. Here's the list of all the trades that we are currently in. <br />
              *Only one trade will be shared here everyday. For more trades, <a href='#' target='_blank' className='underline text-green-600 transition-all duration-150 hover:text-green-700'>join our community</a>*
            </p>
          </div>

          {/* Trade Cards Grid */}
          {activeTrades.length === 0 ? (
            <div className='container py-16 text-center mx-auto border-t border-t-white/22 overflow-hidden'>
              <p className='text-lg text-gray-600'>Not participating in the market right now...</p>
            </div>
          ) : null}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTrades.map((trade, index) => (
              <div
                key={trade?.$id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MagicCard 
                  gradientColor={"#262626"}
                  className="p-1"
                >
                  <TradeCard trade={trade} onArchive={() => handleArchive(trade.$id, trade.tradeResult)} toShowDelete={false} onViewDetails={() => setSelectedTrade(trade)} />
                </MagicCard>
              </div>
            ))}
          </div>

          <div className='px-4'>
            <Dialog open={!!selectedTrade}  onOpenChange={(open) => { if (!open) setSelectedTrade(null); }}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                {selectedTrade && (
                  <>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 font-sans">
                        <span className='font-sans'>{selectedTrade.tradeName}</span>
                        <Badge variant="outline" className="font-sans border border-white/22">
                          {selectedTrade.tradeSymbol.toUpperCase()}
                        </Badge>
                        <Badge variant={selectedTrade.positionType === 'long' ? 'default' : 'secondary'}>
                          {selectedTrade.positionType.toUpperCase()}
                        </Badge>
                      </DialogTitle>
                      <DialogDescription className='text-muted-foreground text-start pt-2'>
                        Here's a description of the trade in which we are currently in.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Trade Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-white/22">
                          <Target className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="text-sm text-muted-foreground">Entry Price</div>
                            <div className="font-semibold">{selectedTrade.entryPrice}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-white/22">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="text-sm text-muted-foreground">Trade Date</div>
                            <div className="font-semibold">{multiFormatDateString(selectedTrade.$createdAt)}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-white/22">
                          <Target className="h-5 w-5 text-golden" />
                          <div>
                            <div className="text-sm text-muted-foreground">Target Price 1</div>
                            <div className="font-semibold">{selectedTrade.tradeTp1}</div>
                            {selectedTrade.tradeTp2 ? (
                              <>
                                <div className="text-sm text-muted-foreground">Target Price 2</div>
                                <div className="font-semibold">{selectedTrade.tradeTp2}</div>
                              </>
                            ) : null}

                            {selectedTrade.tradeTp3 ? (
                              <>
                                <div className="text-sm text-muted-foreground">Target Price 3</div>
                                <div className="font-semibold">{selectedTrade.tradeTp3}</div>
                              </>
                            ) : null}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-white/22">
                          <Target className="h-5 w-5 text-golden" />
                          <div>
                            <div className="text-sm text-muted-foreground">Stop Loss</div>
                            <div className="font-semibold">{selectedTrade.stopLoss || 'Not set'}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-white/22">
                          <Target className="h-5 w-5 text-golden" />
                          <div>
                            <div className="text-sm text-muted-foreground">Trade Duration</div>
                            <div className="font-semibold">{selectedTrade.tradeType || 'Not set'}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-white/22">
                          <Target className="h-5 w-5 text-golden" />
                          <div>
                            <div className="text-sm text-muted-foreground">Position Type</div>
                            <div className="font-semibold">{selectedTrade.positionType || 'Not set'}</div>
                          </div>
                        </div>
                      </div>

                      {/* Trade Reason */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <h4 className="font-semibold font-sans">Trade Description</h4>
                        </div>
                        <div
                          className="prose prose-sm max-w-none text-muted-foreground leading-relaxed p-3 bg-muted/50 rounded-lg"
                          dangerouslySetInnerHTML={{ __html: selectedTrade.tradeDescription }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Trades
