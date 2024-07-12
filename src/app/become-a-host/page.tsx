"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setAddress, setAmenities, setProperty, setPrice } from '../../formSlice';
import axios from 'axios';

import Head from 'next/head';
import Image from 'next/image';

import GettingStarted from '@/components/become-a-host/GettingStarted';
import LocationStep from '@/components/become-a-host/LocationStep';
import DescriptionStep from '@/components/become-a-host/DescriptionStep';
import AmenitiesStep from '@/components/become-a-host/AmenitiesStep';
import PriceStep from '@/components/become-a-host/PriceStep';
import ReviewStep from '@/components/become-a-host/ReviewStep';

const BecomeAHost = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handlePublish = async () => {
    try {
      console.log('Form data to be sent:', form);
      const response = await axios.post('/api/publish', form);
      console.log('Response from backend:', response.data);
      alert('Data published successfully!');
    } catch (error) {
      console.error('Error publishing data', error);
      alert('Failed to publish data.');
    }
  };

  const steps = [
    <GettingStarted key="gettingStarted" onNext={nextStep} />,
    <LocationStep key="location" onNext={nextStep} />,
    <DescriptionStep key="description" onNext={nextStep} onBack={prevStep} />,
    <AmenitiesStep key="amenities" onNext={nextStep} onBack={prevStep} />,
    <PriceStep key="price" onNext={nextStep} onBack={prevStep} />,
    <ReviewStep key="review" onPublish={handlePublish} onBack={prevStep} />,
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Get Started on Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {steps[step]}
    </div>
  );
};

export default BecomeAHost;
