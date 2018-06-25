import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx;
    const sheet = new ServerStyleSheet();

    const initialProps = await Document.getInitialProps(ctx);

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...initialProps, ...page, styleTags };
  }

  render() {
    const { title, styleTags } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title || 'Is it hot?'}</title>
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Is it hot - app" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
