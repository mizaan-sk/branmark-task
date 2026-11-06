import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared shell for pages other than home: dark band behind the fixed navbar,
// one H1, then the page content.
export default function InnerPage({ title, intro, children }) {
  return (
    <main className="min-h-screen bg-white text-[#1E293B] flex flex-col font-sans">
      <Navbar />
      <div className="bg-[#180336] pt-36 pb-12 md:pt-[10vw] md:pb-[3vw]">
        <div className="w-full max-w-3xl md:max-w-[56vw] mx-auto px-6 md:px-[2vw]">
          <h1 className="text-4xl md:text-[3.2vw] md:leading-[3.8vw] font-semibold text-white tracking-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 md:mt-[1vw] text-base md:text-[1.1vw] text-purple-200 font-medium">
              {intro}
            </p>
          )}
        </div>
      </div>
      <div className="flex-1 w-full max-w-3xl md:max-w-[56vw] mx-auto px-6 md:px-[2vw] py-12 md:py-[3vw]">
        {children}
      </div>
      <Footer />
    </main>
  );
}
