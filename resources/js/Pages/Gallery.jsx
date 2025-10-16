import { BannerSection } from '@/Components/customComponent/BannerSection'
import SalonGallery from '@/Components/customComponent/GalleryPreviewSection'
import Layout from '@/Layouts/Layout'
import React from 'react'

const Gallery = () => {
  return (
    <Layout>
        <BannerSection title="Gallery"/>
        <SalonGallery/>
    </Layout>
  )
}

export default Gallery