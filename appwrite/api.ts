import { ID, Query } from "appwrite";
import { appwriteConfig, storage, tableDb } from "./config";

type TradeData = {
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
}

export async function addTrade(tradeData: TradeData) {
  try {
    const newTrade = await tableDb.createRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.tradesTableId!,
      rowId: ID.unique(),
      data: tradeData,
    })

    if (!newTrade) throw new Error

    return newTrade
  } catch (error) {
    throw error;
  }
}

export async function archiveTrade(tradeId: string, tradeResult: string) {
  try {
    const res = await tableDb.updateRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.tradesTableId!,
      rowId: tradeId,
      data: {
        tradeResult,
        tradeStatus: "archived",
      }
    })

    return res
  } catch (error) {
    console.log(error);
    throw Error
  }
}

export async function getAllTrades() {
  try {
    const allTrades = await tableDb.listRows({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.tradesTableId!,
      queries: [Query.orderDesc("$createdAt"), Query.limit(20)],
    })

    if (!allTrades) {
      return
    }

    return allTrades
  } catch (error) {
    throw error;
  }
}

export async function deleteTrade(tradeId: string) {
  try {
    await tableDb.deleteRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.tradesTableId!,
      rowId: tradeId
    })

    return { status: "ok" }
  } catch (error) {
    throw error;
  }
}

export async function addLesson(lesson: { file: File[]; lessonTitle: string; content: string; readTime: string; category: string; clickbait: string; }) {
  try {
    // Upload file to appwrite storage
    const uploadedFile = await uploadFile(lesson.file[0]);
    if (!uploadedFile) throw Error;

    // Get file Url
    const fileUrl = getFilePreview(uploadedFile.$id);

    if (!fileUrl) {
      await deleteFile(uploadedFile.$id)
      throw Error;
    }

    // Create Post
    const newPost = await tableDb.createRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.lessonsTableId!,
      rowId: ID.unique(),
      data: {
        lessonTitle: lesson.lessonTitle,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        content: lesson.content,
        readTime: lesson.readTime,
        category: lesson.category,
        clickbait: lesson.clickbait,
        // date: new Date().toISOString().split("T")[0],
      }
    });

    if (!newPost) {
      await deleteFile(uploadedFile.$id)
      throw Error;
    }

    return newPost;
  } catch (error) {
    console.log(error);
  }
}

export async function getLessonById(id: string) {
  try {
    const res = await tableDb.getRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.lessonsTableId!,
      rowId: id
    })

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLessons(blogId: string) {
  try {
    const lesson = await tableDb.getRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.lessonsTableId!,
      rowId: blogId
    })

    if (!lesson) {
      return { status: "error", message: "Blog not found" };
    }

    if (lesson.imageId) {
      const fileDeletion = await deleteFile(lesson.imageId);
      if (fileDeletion?.status !== "ok") {
        console.log("Failed to delete file from storage");
        return { status: "error", message: "Failed to delete file from storage" };
      }
    }

    await tableDb.deleteRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.lessonsTableId!,
      rowId: blogId
    })

    return { status: "ok" };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllLessons() {
  try {
    const allLessons = await tableDb.listRows({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.lessonsTableId!,
      queries: [Query.orderDesc("$createdAt"), Query.limit(30)],
    })

    return allLessons
  } catch (error) {
    console.log(error);
  }
}

export async function addStockUpdate(stockUpdate: { file: File[]; updateTitle: string; updateContent: string; updateReadTime: string; updateStockSymbol: string; expectedReturn: string }) {
  try {
    // Upload file to appwrite storage
    const uploadedFile = await uploadFile(stockUpdate.file[0]);
    if (!uploadedFile) throw Error;

    // Get file Url
    const fileUrl = getFilePreview(uploadedFile.$id);

    if (!fileUrl) {
      await deleteFile(uploadedFile.$id)
      throw Error;
    }

    // Create Post
    const newStockUpdate = await tableDb.createRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.stockUpdateTableId!,
      rowId: ID.unique(),
      data: {
        updateTitle: stockUpdate.updateTitle,
        updateStockSymbol: stockUpdate.updateStockSymbol,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        updateContent: stockUpdate.updateContent,
        updateReadTime: stockUpdate.updateReadTime,
        expectedReturn: stockUpdate.expectedReturn,
        // date: new Date().toISOString().split("T")[0],
      }
    });

    if (!newStockUpdate) {
      await deleteFile(uploadedFile.$id)
      throw Error;
    }

    return newStockUpdate;
  } catch (error) {
    console.log(error);
  }
}

export async function getStockUpdateById(id: string) {
  try {
    const res = await tableDb.getRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.stockUpdateTableId!,
      rowId: id
    })

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteStockUpdate(stockUpdateId: string) {
  try {
    const stockUpdate = await tableDb.getRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.stockUpdateTableId!,
      rowId: stockUpdateId
    })

    if (!stockUpdate) {
      return { status: "error", message: "Stock Update not found" };
    }

    if (stockUpdate.imageId) {
      const fileDeletion = await deleteFile(stockUpdate.imageId);
      if (fileDeletion?.status !== "ok") {
        console.log("Failed to delete file from storage");
        return { status: "error", message: "Failed to delete file from storage" };
      }
    }

    await tableDb.deleteRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.stockUpdateTableId!,
      rowId: stockUpdateId
    })

    return { status: "ok" };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllStockUpdates() {
  try {
    const allStockUpdates = await tableDb.listRows({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.stockUpdateTableId!,
      queries: [Query.orderDesc("$createdAt"), Query.limit(30)],
    })

    return allStockUpdates
  } catch (error) {
    console.log(error);
  }
}

export async function addArticle(article: { file: File[]; articleTitle: string; content: string; readTime: string; category: string; clickbait: string; }) {
  try {
    // Upload file to appwrite storage
    const uploadedFile = await uploadFile(article.file[0]);
    if (!uploadedFile) throw Error;

    // Get file Url
    const fileUrl = getFilePreview(uploadedFile.$id);

    if (!fileUrl) {
      await deleteFile(uploadedFile.$id)
      throw Error;
    }

    // Create Post
    const newArticle = await tableDb.createRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.articlesTableId!,
      rowId: ID.unique(),
      data: {
        articleTitle: article.articleTitle,
        clickbait: article.clickbait,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        category: article.category,
        readTime: article.readTime,
        content: article.content,
        // date: new Date().toISOString().split("T")[0],
      }
    });

    if (!newArticle) {
      await deleteFile(uploadedFile.$id)
      throw Error;
    }

    return newArticle;
  } catch (error) {
    console.log(error);
  }
}

export async function getArticleById(id: string) {
  try {
    const res = await tableDb.getRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.articlesTableId!,
      rowId: id
    })

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteArticles(articleId: string) {
  try {
    const article = await tableDb.getRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.articlesTableId!,
      rowId: articleId
    })

    if (!article) {
      return { status: "error", message: "Article not found" };
    }

    if (article.imageId) {
      const fileDeletion = await deleteFile(article.imageId);
      if (fileDeletion?.status !== "ok") {
        console.log("Failed to delete file from storage");
        return { status: "error", message: "Failed to delete file from storage" };
      }
    }

    await tableDb.deleteRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.articlesTableId!,
      rowId: articleId
    })

    return { status: "ok" };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllArticles() {
  try {
    const allArticles = await tableDb.listRows({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.articlesTableId!,
      queries: [Query.orderDesc("$createdAt"), Query.limit(30)],
    })

    return allArticles
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(file: File) {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.bucketId!,
      ID.unique(),
      file
    )

    return uploadedFile
  } catch (error) {
    console.log(error);
  }
}


export function getFilePreview(fileId: string) {
  try {
    const filePreview = storage.getFileView(
      appwriteConfig.bucketId!,
      fileId,
    )

    if (!filePreview) throw Error;

    return filePreview;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFile(fileId: string) {
  try {
    const file = await storage.deleteFile(
      appwriteConfig.bucketId!,
      fileId
    )

    return { status: "ok" };
  } catch (error) {
    console.log(error);
  }
}
