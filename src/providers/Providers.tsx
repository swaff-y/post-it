'use client'

import { LexiconAPI } from "@/api/LexiconAPI";
import { InfoToastsProvider } from "@/context/infoToasts";
import { LexiconProvider } from "@/context/lexicon";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, useState } from "react";

const queryClient = new QueryClient();
const lexicon = new LexiconAPI();

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  const infoToast = useState<{
    message: string;
    type: string;
}>({ message: '', type: '' });
  return (
    <InfoToastsProvider value={infoToast}>
      <LexiconProvider value={lexicon}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </LexiconProvider>
    </InfoToastsProvider>
  );
};