import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import FooterItem from "@/components/footer-beam";
import { createClient } from "@/lib/supabase/server";

// @TODO: 设置全局背景颜色
const inter = Inter({ subsets: ["latin"] });

type metainfo = {
  id: Number,
  title: string,
  description: string,
  keywords: string,
  h1: string
}

const GetWebInfo = async (): Promise<metainfo | null> => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from("WebInfo").select().eq('id', 1).single();

    if (error) {
      console.error(error)
      return null;
    }

    return data;

  } catch (err) {
    console.log(err)
    return null
  }
}

export const generateMetadata = async (): Promise<Metadata> => {
  const webInfo = await GetWebInfo()

  return {
    title: webInfo?.title,
    description: webInfo?.description,
    keywords: webInfo?.keywords.split(","),
    robots: "index, follow"
  }

}

// export const metadata: Metadata = {
//   title: "FREE VR Porn: Best VR Porn Sites/Videos/Games/Apps of 2024! - FreeVRPorn.com",
//   description: "Fullest collection on VR porn videos, porn games, sex games, hentai VR and more in your preferred language! All top websites are fast, 100% safe, virus-free. Bookmark Free VR Porn now and find new good VR porn websites every day!",
//   keywords: ["free vr porn", "vr porn games", "vr porn free", "best vr porn", "vr hentai", "8k vr porn", "free vr porn games", "vr sex games", "vr chat porn", "stripchat vr", "vr bangers", "hentai vr", "vr sex gay", "porn fake taxi", "free porn on the internet for women", "free porn on the internet public sex", "xhamster vr", "eporner vr", "luna bella porno", "milf vr"],
//   robots: "index, follow"
// };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  GetWebInfo()
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
