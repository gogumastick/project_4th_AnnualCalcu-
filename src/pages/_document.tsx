import { Html, Head, Main, NextScript, DocumentContext  } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AppType, AppProps } from 'next/app';
import { ReactElement } from 'react';

const Document = () => {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

Document.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: AppType) => (props: AppProps): ReactElement =>
          sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await ctx.defaultGetInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default Document;
