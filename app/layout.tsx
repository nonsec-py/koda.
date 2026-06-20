import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const body=Manrope({subsets:["latin"],variable:"--font-body",display:"swap"});
const display=Cormorant_Garamond({subsets:["latin"],weight:["500","600","700"],variable:"--font-display",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://koda.studio"),title:{default:"koda. — Diseño web freelance en Bolivia",template:"%s | koda."},description:"Diseño y desarrollo web para negocios que quieren verse profesionales, ordenar su mensaje y convertir visitas en conversaciones.",keywords:["diseño web Bolivia","desarrollo web","landing pages","rediseño web"],openGraph:{title:"koda. — Presencia digital clara y distinta",description:"Webs claras, rápidas y pensadas para conseguir mejores consultas.",locale:"es_BO",type:"website"},twitter:{card:"summary_large_image"},icons:{icon:"/icon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body className={`${body.variable} ${display.variable}`}>{children}</body></html>}
