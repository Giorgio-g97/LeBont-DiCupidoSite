import "./globals.css";

export const metadata = {
  title: "Le Bontà di Cupido",
  description:
    "Forno Pasticceria specializzata in prodotti artigianali senza glutine e lattosio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
