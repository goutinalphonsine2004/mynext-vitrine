
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen"   >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
