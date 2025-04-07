import "./globals.css";

export const metadata = {
  title: "Umlyev Business",
  description: "Informações de contacto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&amp;display=swap" rel="stylesheet" />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
