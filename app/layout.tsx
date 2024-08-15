import type { Metadata } from "next";
import { Inter, Style_Script } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import FooterItem from "@/components/footer-beam";

// @TODO: 设置全局背景颜色
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "FREE VR Porn: Best VR Porn Sites/Videos/Games/Apps of 2024! - FreeVRPorn.com",
  description: "Fullest collection on VR porn videos, porn games, sex games, hentai VR and more in your preferred language! All top websites are fast, 100% safe, virus-free. Bookmark Free VR Porn now and find new good VR porn websites every day!",
  keywords: ["free vr porn", "vr porn games", "vr porn free", "best vr porn", "vr hentai", "8k vr porn", "free vr porn games", "vr sex games", "vr chat porn", "stripchat vr", "vr bangers", "hentai vr", "vr sex gay", "porn fake taxi", "free porn on the internet for women", "free porn on the internet public sex", "xhamster vr", "eporner vr", "luna bella porno", "milf vr"],
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen w-full bg-neutral-900 overflow-hidden">
          {children}
          <BackgroundBeams />
        </div>
        <footer className="bg-neutral-950 text-zinc-900 py-8">
          <FooterItem />
        </footer>
      </body>
    </html>
  );
}
