import Link from "next/link";
import InnerPage from "./components/InnerPage";

export const metadata = {
  title: "Page Not Found | Rivreach",
  description: "This page doesn't exist. Find Rivreach's services, results and contact details here.",
  alternates: { canonical: null },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Our services" },
  { href: "/#proof", label: "Performance marketing results" },
  { href: "/#creative", label: "Video ad and reel production" },
  { href: "/#faq", label: "Frequently asked questions" },
  { href: "/#contact", label: "Book a strategy call" },
];

export default function NotFound() {
  return (
    <InnerPage title="Page not found" intro="The page you're looking for doesn't exist or has moved.">
      <ul className="flex flex-col gap-3 md:gap-[0.8vw] text-base md:text-[1.1vw] font-medium">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="text-[#480ed8] underline hover:text-[#FF5914]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
