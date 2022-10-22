import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

class mydocument extends Document{
    render(){
        return(
            <>
                <Html lang="en">
                    <Head>
                        <meta name="description" content="sandeep yadav ecommerce website with node.js" />
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" ></script>
                        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" ></script>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" ></script>
                        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" ></script>
                        
                    </Head>

                    <body>
                        <Main />
                        <NextScript />
                    </body>

                </Html>
            </>
        )
    }
}

export default mydocument;