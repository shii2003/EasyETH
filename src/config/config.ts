import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'viem/chains';
import { injected, metaMask, safe } from 'wagmi/connectors';

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
    chains: [mainnet, sepolia],
    connectors: [
        injected(),
        metaMask(),
        safe(),
    ],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
})