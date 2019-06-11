import Document, { Html, Head, Main, NextScript } from 'next/document'

import Metrika from '../components/Metrika';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="ru">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <Metrika />
                </body>
            </Html>
        )
    }
}

export default MyDocument
