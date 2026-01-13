import { Client, Storage, TablesDB } from 'appwrite';

interface AppwriteConfig {
  projectId?: string;
  endpointUrl?: string;
  databaseId?: string;
  tradesTableId?: string;
  lessonsTableId?: string;
  stockUpdateTableId?: string;
  articlesTableId?: string;
  bucketId?: string;
}

// Use NEXT_PUBLIC_ prefixed env vars for values that must be available in the browser
export const appwriteConfig: AppwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT_URL,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  tradesTableId: process.env.NEXT_PUBLIC_APPWRITE_TRADES_TABLE_ID,
  lessonsTableId: process.env.NEXT_PUBLIC_APPWRITE_LESSONS_TABLE_ID,
  articlesTableId: process.env.NEXT_PUBLIC_APPWRITE_ARTICLES_TABLE_ID,
  stockUpdateTableId: process.env.NEXT_PUBLIC_APPWRITE_STOCK_UPDATES_TABLE_ID,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
}

export const client = new Client();

if (appwriteConfig.projectId) {
  client.setProject(appwriteConfig.projectId);
} else {
  console.warn("Appwrite project ID is not defined (NEXT_PUBLIC_APPWRITE_PROJECT_ID)");
}

if (appwriteConfig.endpointUrl) {
  client.setEndpoint(appwriteConfig.endpointUrl);
} else {
  console.warn("Appwrite endpoint URL is not defined (NEXT_PUBLIC_APPWRITE_ENDPOINT_URL)");
}

export const tableDb = new TablesDB(client)
export const storage = new Storage(client)
