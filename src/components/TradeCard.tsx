"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, ArrowRight, Archive } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { archiveTrade } from '../../appwrite/api';
import { useSession } from 'next-auth/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface TradeCardProps {
  trade: {
    $id: string;
    tradeName: string;
    tradeSymbol: string;
    tradeType: string;
    entryPrice: string;
    stopLoss: string;
    tradeTp1: string;
    tradeTp2: string;
    tradeTp3: string;
    tradeDescription: string;
    tradeResult: "Not known yet" | "profitable" | "loss";
    positionType: string;
  }
  onArchive: (id: string) => void;
  toShowDelete: boolean;
  onViewDetails: (trade: unknown) => void;
}

const TradeCard = ({ trade, onArchive, toShowDelete, onViewDetails }: TradeCardProps) => {
  const isProfitable = trade.tradeResult === 'profitable';
  const { data: session } = useSession()
  const [showArchiveDialog, setShowArchiveDialog] = useState(false)
  const [tradeResultInput, setTradeResultInput] = useState('')


  const handleArchive = async () => {
    try {
      if (!tradeResultInput) {
        toast("Error moving trade to journal. Inputs cannot be empty");
        return
      }

      await archiveTrade(trade.$id, trade.tradeResult);
      onArchive(trade.$id); // local UI update
      toast("Trade Archived successfully.");
      setShowArchiveDialog(false);
    } catch (error) {
      toast("Failed archiving trade.");
    }
  };

  const handleDelete = async () => {
    try {
      onArchive(trade.$id); // UI update
      toast("Trade Deleted successfully.");
    } catch (error) {
      console.log(error);
      toast("Failed  to delete trade.");
    }
  }

  return (
    <>
      <Card className="group hover:border-0 border-0 transition-all duration-300 hover:-translate-y-2 bg-gradient-card animate-bounce-in">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className='flex flex-row gap-2'>
              <CardTitle className="text-lg font-comic font-bold text-foreground">
                {trade.tradeSymbol.toUpperCase()}
              </CardTitle>
              <Badge
                variant={trade.positionType === 'Long' || trade.positionType === 'long' || trade.positionType === 'spot' || trade.positionType === 'Spot' ? 'default' : 'secondary'}
                className="font-comic"
              >
                {trade.positionType.toUpperCase()}
              </Badge>
            </div>
            {session && !toShowDelete ? (
              <div className='cursor-pointer transition-all duration-200 hover:scale-110' onClick={() => setShowArchiveDialog(true)}>
                <Archive />
              </div>
            ) : null}
            {session && toShowDelete ? (
              <div className='cursor-pointer transition-all duration-200 hover:scale-110' onClick={handleDelete}>
                <Trash2 />
              </div>
            ) : null}
          </div>
          <p className="text-sm text-muted-foreground font-clean">{trade.tradeName}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Entry/Exit Prices */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-clean">Entry</p>
              <p className="text-sm font-semibold font-comic">{trade.entryPrice}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-clean">TP 1</p>
              <p className="text-sm font-semibold font-comic">{trade.tradeTp1}</p>
            </div>
            {trade.tradeTp2 ? (
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-clean">TP 2</p>
                <p className="text-sm font-semibold font-comic">{trade.tradeTp2}</p>
              </div>
            ) : null}
            {trade.tradeTp3 ? (
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-clean">TP 3</p>
                <p className="text-sm font-semibold font-comic">{trade.tradeTp3}</p>
              </div>
            ) : null}
          </div>


          <div className="pt-2 border-t border-golden/20">
            <Button variant="default" size="sm" className="w-full group mt-2" onClick={() => onViewDetails(trade)}>
              <span>View More Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </CardContent>
      </Card>

      <Dialog open={showArchiveDialog} onOpenChange={setShowArchiveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='font-serif font-medium'>How was your trade?</DialogTitle>
            <DialogDescription className='text-muted-foreground text-start pt-2'>
              I hope it went well.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <p className='mt-2 mb-1 font-semibold text-sm'>Select Trade Result</p>
            <Select
              onValueChange={(value: string) => setTradeResultInput(value)}
              defaultValue={tradeResultInput}
              value={tradeResultInput}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your trade result"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Profitable">Profitable</SelectItem>
                <SelectItem value="Loss">Loss</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant='default' onClick={handleArchive}>Move to Journal</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TradeCard;