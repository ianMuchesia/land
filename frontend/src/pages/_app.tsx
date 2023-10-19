import Layout from "@/components/Layout";
import AuthLayout from "@/lib/AuthLayout";
import WishlistFetch from "@/lib/WishlistFetch";
import { store } from "@/redux/store";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <AuthLayout>
          <WishlistFetch>
        <Component {...pageProps} />
        </WishlistFetch>
        </AuthLayout>
      </Layout>
    </Provider>
  );
}
