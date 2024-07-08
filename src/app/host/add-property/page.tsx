// pages/index.tsx
"use client"
 
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router =useRouter();
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Get Started on Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 border-b">
        <Image src="/airbnb-logo.png" alt="Airbnb Logo" width={30} height={30} />
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">It's easy to get started on Airbnb</h1>
        
        <div className="space-y-8">
          <StepItem 
            number={1}
            title="Tell us about your place"
            description="Share some basic info, such as where it is and how many guests can stay."
            imageSrc="/bed-icon.png"
          />
          <StepItem 
            number={2}
            title="Make it stand out"
            description="Add 5 or more photos plus a title and description – we'll help you out."
            imageSrc="/photo-icon.png"
          />
          <StepItem 
            number={3}
            title="Finish up and publish"
            description="Choose if you'd like to start with an experienced guest, set a starting price and publish your listing."
            imageSrc="/door-icon.png"
          />
        </div>

        <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors" onClick={()=>router.push(`/host/add-property/location`)}>
          Get started
        </button>
      </main>

      <footer className="p-4 border-t mt-8">
        <div className="flex justify-end items-center space-x-4">
          <span>Questions?</span>
          <button className="border px-4 py-2 rounded-md">Exit</button>
        </div> 
      </footer>
    </div>
  )
}

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
}

function StepItem({ number, title, description, imageSrc }: StepItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-8">
        <span className="font-bold text-lg">{number}</span>
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <Image src={imageSrc} alt={title} width={50} height={50} />
      </div>
    </div>
  )
}