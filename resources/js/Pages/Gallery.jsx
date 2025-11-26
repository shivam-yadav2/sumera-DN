import { BannerSection } from '@/Components/customComponent/BannerSection';
import SalonGallery from '@/Components/customComponent/GalleryPreviewSection';
import Layout from '@/Layouts/Layout';
import SEOHead from '@/Components/SEOHead';
import React from 'react';
import { usePage } from '@inertiajs/react';

const Gallery = () => {
  const {
    gallery,
    pageTitle = 'Gallery',
    pageDescription = null,
    pageType = 'default',
    seo,
  } = usePage().props;

  return (
    <Layout>
      <SEOHead seo={seo} />
        <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff]">
          <BannerSection 
            title={pageTitle}
            description={pageDescription || "Explore our stunning collection of transformations, styling, and beauty moments. Get inspired by our portfolio of exceptional work."}
            label="OUR PORTFOLIO"
            showCTA={false}
          />
          <SalonGallery
            gallery={gallery || []}
            pageType={pageType}
            heading={pageTitle}
            description={pageDescription}
          />
        </div>
    </Layout>
  );
};

export default Gallery;

