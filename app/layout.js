import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Umlyev Business",
  description: "Informações de contacto",
};

const orbitron = localFont({
  src: [
    {
      path: "../public/fonts/Orbitron-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Orbitron-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-orbitron",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={orbitron.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
