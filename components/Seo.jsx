import Head from "next/head";

const domain = "https://abarber.vercel.app";
const ogImage = "https://abarber.vercel.app/og.jpg";

const Seo = ({ t }) => (
  <Head>
    <title key="title">{t.seo.title}</title>
    <meta name="description" content={t.seo.description} />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_title" property="og:title" content={t.seo.title} />
    <meta
      key="og_description"
      property="og:description"
      content={t.seo.description}
    />
    <meta key="og_locale" property="og:locale" content={t.locale} />
    <meta key="og_site_name" property="og:site_name" content={t.seo.siteName} />
    <meta key="og_url" property="og:url" content={domain} />
    <meta key="og_site_name" property="og:site_name" content={t.seo.siteName} />
    <meta key="og_image" property="og:image" content={ogImage} />
    <meta key="og_image:alt" property="og:image:alt" content={t.seo.title} />
    <meta key="og_image:width" property="og:image:width" content="1200" />
    <meta key="og_image:height" property="og:image:height" content="630" />
    <meta name="robots" content="index,follow" />
    <meta
      key="twitter:card"
      name="twitter:card"
      content="summary_large_image"
    />
    <meta key="twitter:title" property="twitter:title" content={t.seo.title} />
    <meta
      key="twitter:description"
      property="twitter:description"
      content={t.seo.description}
    />
    <link rel="canonical" href={domain} />
    <link rel="shortcut icon" href="/favicon.svg" />
  </Head>
);

export default Seo;
