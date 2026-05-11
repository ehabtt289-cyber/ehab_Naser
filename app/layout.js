import "./globals.css";
import StarBackground from "./components/StarBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"



export const metadata = {
  title: "Ehab Portfolio",
  description: "Ehab Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className='antialiased selection:bg-none-blue selection:text-white'
        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
      >
        <StarBackground/>
        <CustomCursor/>
        <Navbar/>
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        
        
      </body>
    </html>
  );
}
