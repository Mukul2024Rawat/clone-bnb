"use client";
import { useRouter } from 'next/navigation';

const GettingStarted = ({ onNext }: { onNext: () => void }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">It's easy to get started on Airbnb</h1>
        <div className="space-y-8">
          <StepItem
            number={1}
            title="Tell us about your place"
            description="Share some basic info, such as where it is and how many guests can stay."
            imageSrc='/propertyDetail/2561454.webp'
          />
          <StepItem
            number={2}
            title="Make it stand out"
            description="Add 5 or more photos plus a title and description – we'll help you out."
            imageSrc='/propertyDetail/camera.jpeg'
          />
          <StepItem
            number={3}
            title="Finish up and publish"
            description="Choose if you'd like to start with an experienced guest, set a starting price and publish your listing."
            imageSrc="/propertyDetail/publish.png"
          />
        </div>
        <button
          className="mt-8 bg-[#DE3151] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#dd2e57] transition-colors"
          onClick={onNext}
        >
          Get started
        </button>
      </main>
    </div>
  );
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
        <img src={imageSrc} alt={title} className="w-12 h-12" />
      </div>
    </div>
  );
}

export default GettingStarted;
