import type {Metadata} from "next";
import {Manrope,Cormorant_Garamond} from "next/font/google";
import "./globals.css";
const body=Manrope({subsets:["latin"],variable:"--font-body",display:"swap"});
const display=Cormorant_Garamond({subsets:["latin"],weight:["500","600","700"],variable:"--font-display",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://koda.studio"),title:{default:"koda. — Freelance web design & development",template:"%s | koda."},description:"Web design and development for businesses that want to look professional, clarify their message and turn visits into conversations.",keywords:["web design","web development","landing pages","website redesign"],openGraph:{title:"koda. — A clear, distinctive digital presence",description:"Clear, fast websites designed to generate better inquiries.",locale:"en_US",type:"website"},twitter:{card:"summary_large_image"},icons:{icon:"/icon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${body.variable} ${display.variable}`}>{children}</body></html>}
