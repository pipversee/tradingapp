"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { useArchiveTrade, useDeleteArticle, useDeleteLesson, useDeleteStockUpdate, useDeleteTrade, useGetAricles, useGetLessons, useGetStockUpdates, useGetTrades } from "@/hooks/react-query/queries";
import { toast } from "sonner";

export type Trade = {
  $id: string;
  $createdAt: string;
  tradeName: string;
  tradeSymbol: string;
  tradeType: string;
  entryPrice: string;
  stopLoss: string;
  tradeTp1: string;
  tradeTp2: string;
  tradeTp3: string;
  tradeDescription: string;
  tradeStatus: "active" | "archived";
  tradeResult: "Not known yet" | "profitable" | "loss";
  positionType: string;
};

type Lesson = {
  $id: string;
  $createdAt: string;
  lessonTitle: string;
  clickbait: string;
  file: File[];
  imageUrl: string;
  category: string;
  readTime: string;
  content: string;
};

type Article = {
  $id: string;
  $createdAt: string;
  articleTitle: string;
  clickbait: string;
  file: File[];
  imageUrl: string;
  category: string;
  readTime: string;
  content: string;
};

type StockUpdate = {
  $id: string;
  $createdAt: string;
  updateTitle: string;
  updateStockSymbol: string;
  file: File[];
  imageUrl: string;
  expectedReturn: string;
  updateReadTime: string;
  updateContent: string;
};

interface AdminContextType {
  trades: Trade[];
  lessons: Lesson[];
  stockUpdates: StockUpdate[];
  articles: Article[];
  deleteTradeFn: UseMutateFunction<{ status: string } | undefined, Error, string, unknown>;
  handleArchive: (id: string, tradeResult: string) => void;
  deleteJournalTrade: (id: string) => void;
  deleteLesson: (id: string) => void;
  deleteStockUpdate: (id: string) => void;
  deleteArticle: (id: string) => void;
}

export const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const { data: rawTrades } = useGetTrades();
  const { data: rawLessons = [] } = useGetLessons();
  const { data: rawStockUpdates = [] } = useGetStockUpdates();
  const { data: rawArticles = [] } = useGetAricles();

  const { mutate: archiveTradeFn } = useArchiveTrade();
  const { mutate: deleteTradeFn } = useDeleteTrade();
  const { mutate: deleteLessonFn } = useDeleteLesson();
  const { mutate: deleteArticleFn } = useDeleteArticle();
  const { mutate: deleteStockUpdateFn } = useDeleteStockUpdate();


  // Normalize Appwrite RowList / DefaultRow[] into our Trade[]
  const trades: Trade[] = useMemo(() => {
    const rows = Array.isArray(rawTrades)
      ? rawTrades
      : (rawTrades as any)?.documents ?? (rawTrades as any)?.rows ?? (rawTrades as any)?.items ?? (rawTrades as any)?.data ?? [];

    return (rows as any[]).map((r) => ({
      $id: r.$id ?? r.id ?? "",
      $createdAt: r.$createdAt ?? r.createdAt ?? "",
      tradeName: String(r.tradeName ?? r.trade_name ?? r.name ?? ""),
      tradeSymbol: String(r.tradeSymbol ?? r.trade_symbol ?? r.symbol ?? ""),
      tradeType: String(r.tradeType ?? r.trade_type ?? ""),
      entryPrice: String(r.entryPrice ?? r.entry_price ?? ""),
      stopLoss: String(r.stopLoss ?? r.stop_loss ?? ""),
      tradeTp1: String(r.tradeTp1 ?? r.tp1 ?? ""),
      tradeTp2: String(r.tradeTp2 ?? r.tp2 ?? ""),
      tradeTp3: String(r.tradeTp3 ?? r.tp3 ?? ""),
      tradeDescription: String(r.tradeDescription ?? r.description ?? ""),
      tradeStatus: (r.tradeStatus ?? r.status ?? "active") as "active" | "archived",
      tradeResult: (r.tradeResult ?? r.result ?? "Not known yet") as "Not known yet" | "profitable" | "loss",
      positionType: String(r.positionType ?? r.position_type ?? "long"),
    }));
  }, [rawTrades]);

  // Normalize Appwrite RowList / DefaultRow[] into our Lesson[]
  const lessons: Lesson[] = useMemo(() => {
    const rows = Array.isArray(rawLessons)
      ? rawLessons
      : (rawLessons as any)?.documents ?? (rawLessons as any)?.rows ?? (rawLessons as any)?.items ?? (rawLessons as any)?.data ?? [];

    return (rows as any[]).map((r) => ({
      $id: r.$id ?? r.id ?? "",
      $createdAt: r.$createdAt ?? r.createdAt ?? "",
      lessonTitle: String(r.lessonTitle ?? r.lesson_title ?? r.title ?? ""),
      clickbait: String(r.clickbait ?? r.summary ?? ""),
      file: (r.file ?? r.files ?? []) as unknown as File[],
      category: String(r.category ?? r.cat ?? ""),
      imageUrl: String(r.imageUrl ?? r.cat ?? ""),
      readTime: String(r.readTime ?? r.read_time ?? ""),
      content: String(r.content ?? r.body ?? ""),
    }));
  }, [rawLessons]);

  const articles: Article[] = useMemo(() => {
    const rows = Array.isArray(rawArticles)
      ? rawArticles
      : (rawArticles as any)?.documents ?? (rawArticles as any)?.rows ?? (rawArticles as any)?.items ?? (rawArticles as any)?.data ?? [];

    return (rows as any[]).map((r) => ({
      $id: r.$id ?? r.id ?? "",
      $createdAt: r.$createdAt ?? r.createdAt ?? "",
      articleTitle: String(r.articleTitle ?? r.article_title ?? r.title ?? ""),
      clickbait: String(r.clickbait ?? r.summary ?? ""),
      file: (r.file ?? r.files ?? []) as unknown as File[],
      category: String(r.category ?? r.cat ?? ""),
      imageUrl: String(r.imageUrl ?? r.cat ?? ""),
      readTime: String(r.readTime ?? r.read_time ?? ""),
      content: String(r.content ?? r.body ?? ""),
    }));
  }, [rawArticles]);

  const stockUpdates: StockUpdate[] = useMemo(() => {
    const rows = Array.isArray(rawStockUpdates)
      ? rawStockUpdates
      : (rawStockUpdates as any)?.documents ?? (rawStockUpdates as any)?.rows ?? (rawStockUpdates as any)?.items ?? (rawStockUpdates as any)?.data ?? [];

    return (rows as any[]).map((r) => ({
      $id: r.$id ?? r.id ?? "",
      $createdAt: r.$createdAt ?? r.createdAt ?? "",
      updateTitle: String(r.updateTitle ?? r.update_title ?? r.title ?? ""),
      updateStockSymbol: String(r.updateStockSymbol ?? r.summary ?? ""),
      file: (r.file ?? r.files ?? []) as unknown as File[],
      expectedReturn: String(r.expectedReturn ?? r.cat ?? ""),
      imageUrl: String(r.imageUrl ?? r.cat ?? ""),
      updateReadTime: String(r.updateReadTime ?? r.update_read_time ?? ""),
      updateContent: String(r.updateContent ?? r.body ?? ""),
    }));
  }, [rawStockUpdates]);

  const handleArchive = (id: string, tradeResult: string) => {
    archiveTradeFn(
      { id, tradeResult },
      {
        onSuccess: () => toast("Trade archived"),
        onError: () => toast("Failed to archive"),
      }
    );
  };

  const deleteJournalTrade = (id: string) => {
    deleteTradeFn(id);
  };

  const deleteLesson = (id: string) => {
    deleteLessonFn(id);
  };

  const deleteArticle = (id: string) => {
    deleteArticleFn(id);
  };

  const deleteStockUpdate = (id: string) => {
    deleteStockUpdateFn(id);
  };


  const value: AdminContextType = {
    trades,
    lessons,
    stockUpdates,
    articles,
    deleteTradeFn,
    handleArchive,
    deleteJournalTrade,
    deleteLesson,
    deleteStockUpdate,
    deleteArticle
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used within AdminProvider");
  return context;
};