import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import ServicePageLayOut from '@/components/ServicePageLayOut';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ServicePageLayOut>
            <Component {...pageProps} />
            </ServicePageLayOut>

        </RecoilRoot>
    );
}
