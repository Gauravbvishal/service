// components/services/Services.tsx
import Image from 'next/image';
import React from 'react';
import styles from './Services.module.css'; // Import the CSS module

// Import images (these paths are relative to the public directory)
const revenueCycleImage = '/assets/img/revenue-cycle.jpg';
const serviceImage = '/assets/img/f2.jpg';
const challenges = '/assets/img/main.jpg';
const enhancementImage = '/assets/img/revenue-cycle.jpg'; // New image path
const boxImage1 = '/assets/img/f2.jpg';
const boxImage2 = '/assets/img/f1.jpg';
const boxImage3 = '/assets/img/f3.jpg';
const boxImage4 = '/assets/img/f4.jpg';
const boxImage5 = '/assets/img/f5.jpg';
const boxImage6 = '/assets/img/f6.jpg';

const Service: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <Image
          src={revenueCycleImage}
          alt="Effective Revenue Cycle Management"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <h1 className="absolute text-4xl font-bold text-center text-white z-10">
          Effective Revenue Cycle Management
        </h1>
      </section>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row my-10">
        <div className="md:w-1/2">
          <Image
            src={serviceImage}
            alt="Service Image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 flex items-center">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800">Service Overview</h2>
            <p className="mt-2 text-gray-600 font-bold text-justify">
              Our Effective Revenue Cycle Management service optimizes your billing process, ensures timely collections, and improves overall financial performance.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="flex flex-col items-center my-10">
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          Challenges in Healthcare Revenue Cycle Management
        </h2>
      </section>

      <section className="flex flex-col md:flex-row my-5">
        <div className="md:w-1/2">
          <Image
            src={challenges}
            alt="Service Image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 flex items-center">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800">Overview of Challenges</h2>
            <p className="mt-2 text-gray-600 font-bold text-justify">
              Revenue cycle management in healthcare faces numerous challenges, including complex billing processes, regulatory compliance, and the need for accurate data collection.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`${styles.gallerySection} my-10`}>
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          Trends in Revenue Cycle Management (RCM)
        </h2>
        <div className={`${styles.galleryContainer} flex justify-center gap-4 flex-wrap`}>
          {[boxImage1, boxImage2, boxImage3, boxImage4, boxImage5, boxImage6].map((src, index) => (
            <div key={index} className={`${styles.galleryBox} relative overflow-hidden rounded-lg`}>
              <Image src={src} alt={`Gallery Item ${index + 1}`} layout="fill" objectFit="cover" />
              <div className={`${styles.overlay} absolute inset-0 flex items-center justify-center`}>
                <h3>Heading {index + 1}</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Enhancement Section */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          How RSB Healthcare Consulting helps Clients to achieve Revenue Enhancements
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={enhancementImage}
              alt="Revenue Enhancements"
              width={700}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex items-center">
            <div className="p-4">
              <p className="mt-2 text-gray-600 font-bold text-justify">
                RSB Healthcare Consulting employs proven strategies to optimize revenue cycles, reduce inefficiencies, and enhance financial performance. Our expert team collaborates with clients to identify opportunities, streamline processes, and implement best practices tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
