export const faqs = [
  {
    question: "How is Rivreach different from other agencies?",
    answer: "Most agencies are strictly media buyers or strictly creative designers. We are both. By combining high-converting video and graphics with AI-driven ad strategies, we remove the friction and get you better results, faster.",
  },
  {
    question: "How do you actually use AI in your process?",
    answer: "We don't use AI to get lazy; we use it to get lethal. We use advanced AI tools to analyze data trends faster, split-test creatives aggressively, and optimize your ad budgets in real-time. It’s about working smarter so your money goes further.",
  },
  {
    question: "Do you work with a specific industry?",
    answer: "We care more about the goal than the industry. Whether you are a local service business needing leads or a DTC brand needing e-commerce sales, the core principles of capturing attention and driving conversions remain the same.",
  },
  {
    question: "What platforms do you run ads on?",
    answer: "We run campaigns wherever your customers' attention is underpriced. For most clients, this is a mix of Google, Meta, TikTok, and market-specific ad networks. We audit your audience first, then pick the channels that yield the highest ROI.",
  },
  {
    question: "How fast can I expect to see results?",
    answer: "You’ll see traffic hitting your site within 48 hours of launch. While every brand is unique, give us 3 to 4 weeks to run creative tests, dial in your target audiences, and lock down a consistent, profitable ROI.",
  },
  {
    question: "What should my monthly ad spend budget be?",
    answer: "We usually recommend starting at around ₹60,000/month in ad spend (which goes straight to Google or Meta, not us). That’s the sweet spot where the algorithms get enough real data to optimize quickly without wasting a single rupee of your cash.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "We recommend at least a 3-month commitment for ads to show real, compounding results, but we'll always be upfront with you if we think something isn't working.",
  },
  {
    question: "How do I track what's working?",
    answer: "You'll get regular performance reports and full transparency on ad spend, results, and what we're optimizing next. No black boxes.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};
