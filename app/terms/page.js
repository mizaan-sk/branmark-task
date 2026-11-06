import InnerPage from "../components/InnerPage";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use | Rivreach",
  description: "The terms that apply when you use the Rivreach website, including how its content and campaign results may be used.",
  path: "/terms/",
});

// DRAFT: minimal website terms only. The owner or a legal adviser must review
// and complete it (governing law, liability, etc.).
export default function TermsPage() {
  return (
    <InnerPage title="Terms of Use" intro="Last updated: 6 November 2026">
      <div className="flex flex-col gap-3 md:gap-[0.8vw] text-base md:text-[1vw] md:leading-[1.6vw] [&_h2]:text-xl [&_h2]:md:text-[1.4vw] [&_h2]:mt-5 [&_h2]:md:mt-[1.2vw]">
        <p>These terms apply to your use of rivreach.com. By using this website you agree to them.</p>

        <h2>Website content</h2>
        <p>The text, video and design on this website belong to Rivreach or its clients, and client names and logos belong to their owners. Please do not copy or reuse them without permission.</p>

        <h2>Campaign results</h2>
        <p>Results shown on this website come from individual campaigns. They are not a promise of the results any other business will get.</p>

        <h2>Services</h2>
        <p>This website gives general information about our services. Any work we do for you is covered by a separate agreement between you and Rivreach.</p>

        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a className="text-[#480ed8] underline" href="mailto:siddhant@rivreach.com">siddhant@rivreach.com</a>.</p>
      </div>
    </InnerPage>
  );
}
