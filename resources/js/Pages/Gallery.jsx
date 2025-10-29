import { BannerSection } from '@/Components/customComponent/BannerSection'
import SalonGallery from '@/Components/customComponent/GalleryPreviewSection'
import Layout from '@/Layouts/Layout'
import React from 'react'
import { usePage } from '@inertiajs/react'

const Gallery = () => {
  const { gallery } = usePage().props;

  return (
    <Layout>
        <BannerSection title="Gallery"/>
        <SalonGallery gallery={gallery || []} />
    </Layout>
  )
}

export default Gallery