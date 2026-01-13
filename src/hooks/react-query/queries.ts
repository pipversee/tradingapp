import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addArticle, addLesson, addStockUpdate, addTrade, archiveTrade, deleteArticles, deleteLessons, deleteStockUpdate, deleteTrade, getAllArticles, getAllLessons, getAllStockUpdates, getAllTrades } from "../../../appwrite/api";
import { QUERY_KEYS } from "./QueryKeys";
import { fetchIndianStockNews } from "@/services/newsApi";

// --- Trades ---

export const useCreateTrade = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tradeData: {
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
      // date: string;
    }) => addTrade(tradeData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_TRADES],
      });
    },
  });
};

export const useArchiveTrade = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      tradeResult
    }: {
      id: string;
      tradeResult: string;
    }) => await archiveTrade(id, tradeResult),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_TRADES] });
    },
  });
};

export const useGetTrades = () => useQuery({
  queryKey: [QUERY_KEYS.GET_TRADES],
  queryFn: getAllTrades,
});

export const useDeleteTrade = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTrade(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_TRADES] });
    },
  });
};

export const useCreateLesson = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (lesson: {
      lessonTitle: string;
      clickbait: string;
      file: File[];
      category: string;
      readTime: string;
      content: string;
    }) => addLesson(lesson),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_LESSONS],
      });
    },
  });
};

export const useGetLessons = () =>
  useQuery({
    queryKey: [QUERY_KEYS.GET_LESSONS],
    queryFn: getAllLessons,
  });

export const useDeleteLesson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteLessons(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_LESSONS] });
    },
  });
};

export const useCreateStockUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (stockUpdate: {
      file: File[]; 
      updateTitle: string; 
      updateContent: string; 
      updateReadTime: string; 
      updateStockSymbol: string; 
      expectedReturn: string
    }) => addStockUpdate(stockUpdate),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_STOCK_UPDATES],
      });
    },
  });
};

export const useGetStockUpdates = () =>
  useQuery({
    queryKey: [QUERY_KEYS.GET_STOCK_UPDATES],
    queryFn: getAllStockUpdates,
  });

export const useDeleteStockUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteStockUpdate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_STOCK_UPDATES] });
    },
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (article: {
      articleTitle: string; 
      clickbait: string;
      file: File[]; 
      category: string; 
      readTime: string; 
      content: string; 
    }) => addArticle(article),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ARTICLES],
      });
    },
  });
};

export const useGetAricles = () =>
  useQuery({
    queryKey: [QUERY_KEYS.GET_ARTICLES],
    queryFn: getAllArticles,
  });

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteArticles(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_ARTICLES] });
    },
  });
};

export const useStockNews = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_STOCKS_NEWS],
    queryFn: fetchIndianStockNews,
    initialPageParam: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.length * 10;
      return totalFetched < lastPage.totalArticles ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60 * 12
  })
}