"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, useEffect } from 'react'
import RootLayoutClient from './RootLayoutClient';
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import { Toaster } from 'sonner';
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const queryClient = new QueryClient()

const QueryClientLayout = ({
  children,
}: {
  children: ReactNode;
}) => {


  useEffect(() => {
    const persister = createSyncStoragePersister({
      storage: window.localStorage,
    });

    persistQueryClient({
      queryClient,
      persister,
      maxAge: 1000 * 60 * 60,
    });
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <RootLayoutClient>
        {children}
        <VisualEditsMessenger />
        <Toaster />
      </RootLayoutClient>
    </QueryClientProvider>

  )
}

export default QueryClientLayout
