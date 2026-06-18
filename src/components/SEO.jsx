import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const BASE_URL = "https://www.alloatti.com";

export function SEO({ title, description, keywords, image, url, jsonLd }) {
  const siteTitle = "Alloatti SRL";
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultDescription = "Líderes en innovación de máquinas lavadoras, enjuagadoras, llenadoras y tapadoras de bidones de agua potable.";
  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image || `${BASE_URL}/Alloatti-logo-dark.png`;

  // Default Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alloatti SRL",
    "url": BASE_URL,
    "logo": `${BASE_URL}/Alloatti-logo-dark.png`,
    "description": "Fabricantes de máquinas lavadoras, enjuagadoras, llenadoras y tapadoras de bidones de agua potable con más de 30 años de experiencia.",
    "foundingDate": "1993",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ing. Luis Silveyra 1139",
      "addressLocality": "Villa Adelina",
      "addressRegion": "Provincia de Buenos Aires",
      "postalCode": "B1607BQC",
      "addressCountry": "AR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-9-11-6864-1122",
      "contactType": "sales",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.facebook.com/alloatti.srl/",
      "https://www.instagram.com/alloatti.srl/",
      "https://www.youtube.com/@AlloattiSRL"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Alloatti SRL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  jsonLd: PropTypes.object,
};
