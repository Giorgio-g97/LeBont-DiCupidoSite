// Import Material UI
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "./globals.css";

export const metadata = {
  title: "Le Bontà di Cupido",
  description:
    "Forno Pasticceria specializzata in prodotti artigianali senza glutine e lattosio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" style={{ scrollBehavior: "smooth" }}>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
