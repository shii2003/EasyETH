"use client";
import HomePage from "@/components/HomePage/HomePage";
import { config } from "@/config/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

export default function Home() {
  return (

    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </WagmiProvider>

  );
}
