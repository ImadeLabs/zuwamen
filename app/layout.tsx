import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // This is what shows up in Google and browser tabs
  title: "Zuwamen Autos LLC | Premium USA Spec Dealership",
  description: "Direct USA Spec vehicles, Tincan cleared. Quality assured automotive sales for local and diaspora investors.",
  
  // This is what shows up when you share the link on WhatsApp/Social Media
  openGraph: {
    title: "Zuwamen Autos LLC",
    description: "Premium USA Spec Cars • Lagos Cleared • Abuja Hub",
    url: "https://zuwamen-autos.vercel.app", // Update this with your actual Vercel URL once deployed
    siteName: "Zuwamen Autos",
    images: [
      {
        url: "/Thighlander2010 (2).jpg", // Updated to a Highlander preview image
        width: 1200,
        height: 630,
        alt: "Zuwamen Autos Inventory",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth font-sans">
      <body className="antialiased bg-[#FDFDFD] text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* Main layout container */}
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
