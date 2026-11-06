import Script from "next/script";

const APOLLO_APP_ID = "6acbc800f6a1c80010a2c2df";

// Apollo's install snippet, loaded once the page has finished loading so it
// can't delay rendering. If Apollo is blocked or down, the site is unaffected.
export default function ApolloTracker() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script id="apollo-tracker" strategy="lazyOnload">
      {`(function(){
  var o = document.createElement("script");
  o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + Math.random().toString(36).substring(7);
  o.async = true;
  o.onload = function(){
    if (window.trackingFunctions && window.trackingFunctions.onLoad) {
      window.trackingFunctions.onLoad({ appId: "${APOLLO_APP_ID}" });
    }
  };
  document.head.appendChild(o);
})();`}
    </Script>
  );
}
