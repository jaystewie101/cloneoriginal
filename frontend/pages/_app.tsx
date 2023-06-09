import * as React from 'react';
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';


export default function App({ Component, pageProps }: AppProps){
    return(
        <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    )
}