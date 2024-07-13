
import { LexiconAPI } from "@/api/LexiconAPI";
import { LexiconProvider } from "@/context/lexicon";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from "react";

const queryClient = new QueryClient();
const lexicon = new LexiconAPI();

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <LexiconProvider value={lexicon}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </LexiconProvider>
  );
};