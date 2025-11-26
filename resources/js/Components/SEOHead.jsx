import { Head } from '@inertiajs/react';

export default function SEOHead({ seo }) {
    // Default SEO if none provided
    const defaultSeo = {
        meta_title: 'Sumeera Salon And Academy - Premium Beauty Salon in Lucknow',
        meta_description: 'Experience luxury beauty services at Sumeera Salon And Academy in Lucknow. Expert hair styling, makeup, skincare, and professional beauty training. Book your appointment today!',
        meta_keywords: 'beauty salon lucknow, makeup artist lucknow, hair salon, beauty academy, bridal makeup, professional training',
        meta_author: 'Sumeera Salon And Academy',
        og_image: '/assets/images/og-image.jpg'
    };

    const seoData = seo || defaultSeo;

    return (
        <Head>
            <title>{seoData.meta_title}</title>
            <meta head-key="description" name="description" content={seoData.meta_description} />
            <meta head-key="keywords" name="keywords" content={seoData.meta_keywords} />
            <meta head-key="author" name="author" content={seoData.meta_author} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />
            
            {/* Open Graph / Facebook */}
            <meta head-key="og:type" property="og:type" content="website" />
            <meta head-key="og:url" property="og:url" content={window.location.href} />
            <meta head-key="og:title" property="og:title" content={seoData.og_title || seoData.meta_title} />
            <meta head-key="og:description" property="og:description" content={seoData.og_description || seoData.meta_description} />
            <meta head-key="og:image" property="og:image" content={seoData.og_image || defaultSeo.og_image} />
            
            {/* Twitter */}
            <meta head-key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta head-key="twitter:url" name="twitter:url" content={window.location.href} />
            <meta head-key="twitter:title" name="twitter:title" content={seoData.og_title || seoData.meta_title} />
            <meta head-key="twitter:description" name="twitter:description" content={seoData.og_description || seoData.meta_description} />
            <meta head-key="twitter:image" name="twitter:image" content={seoData.og_image || defaultSeo.og_image} />
        </Head>
    );
}

