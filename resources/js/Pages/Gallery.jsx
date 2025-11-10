import { BannerSection } from '@/Components/customComponent/BannerSection';
import SalonGallery from '@/Components/customComponent/GalleryPreviewSection';
import Layout from '@/Layouts/Layout';
import React from 'react';
import { usePage } from '@inertiajs/react';

const Gallery = () => {
  const {
    gallery,
    pageTitle = 'Gallery',
    pageDescription = null,
    pageType = 'default',
  } = usePage().props;

  return (
    <Layout>
        <BannerSection title={pageTitle}/>
        <SalonGallery
          gallery={gallery || []}
          pageType={pageType}
          heading={pageTitle}
          description={pageDescription}
        />
    </Layout>
  );
};

export default Gallery;