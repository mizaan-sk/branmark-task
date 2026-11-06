import InnerPage from "../components/InnerPage";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | Rivreach",
  description: "What personal data Rivreach collects through this website, why we collect it, and how to contact us about it.",
  path: "/privacy/",
});

// DRAFT: describes only what this website's code actually does. The owner or a
// legal adviser must review and complete it (retention, legal basis, etc.).
export default function PrivacyPage() {
  return (
    <InnerPage title="Privacy Policy" intro="Last updated: 6 November 2026">
      <div className="flex flex-col gap-3 md:gap-[0.8vw] text-base md:text-[1vw] md:leading-[1.6vw] [&_h2]:text-xl [&_h2]:md:text-[1.4vw] [&_h2]:mt-5 [&_h2]:md:mt-[1.2vw]">
        <p>This policy explains how Rivreach, a performance marketing, video and AI search agency in Navi Mumbai, handles personal data collected through rivreach.com.</p>

        <h2>What we collect</h2>
        <p>When you submit our contact form we receive your name, work email, phone or WhatsApp number, primary goal and any message you write. If you contact us by phone, email or WhatsApp, we receive the details you share there.</p>

        <h2>How we use it</h2>
        <p>We use these details to reply to your enquiry and to discuss the services you asked about.</p>

        <h2>Where it is stored</h2>
        <p>Contact form submissions are stored in a Google Sheet using Google Apps Script, so Google processes this data on our behalf.</p>

        <h2>Analytics</h2>
        <p>We use Google Analytics to understand how visitors use this website, including form submissions and clicks on contact links. Google Analytics uses cookies and similar technology to do this.</p>
        <p>We also use Apollo.io website visitor tracking to understand which companies visit this website, and Apollo processes visit data on our behalf.</p>

        <h2>Your choices</h2>
        <p>To ask about, correct or delete the personal data we hold about you, email <a className="text-[#480ed8] underline" href="mailto:siddhant@rivreach.com">siddhant@rivreach.com</a>.</p>
      </div>
    </InnerPage>
  );
}
