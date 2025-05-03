
import Link from "next/link";
import { ThemeProvider } from 'next-themes';
// import  Navbar from "../components/navbar";
import  "./globals.css";

export default function Home({ Component, pageProps }) {
  return (

    <div>
       <ThemeProvider attribute="class">
        
        {/* <Component {...pageProps} /> */}
         </ThemeProvider>
  
    </div>
  )
}
