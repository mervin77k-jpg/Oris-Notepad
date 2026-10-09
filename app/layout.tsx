import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Oris Notes — Room for your ideas',description:'Your personal writing workspace. Organize notes, find your focus, and write with your own AI providers.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
