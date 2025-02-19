import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";

const features = [
  {
    name: "Push to receive",
    description:
      "On the push of a button we recieve your request and slide-in to get your products to you directly",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secured Transactions",
    description:
      "We are not an open-end careless enterprise, all your bank transactions are super protected and handled to the core.",
    icon: LockClosedIcon,
  },
  {
    name: "Easy Tracking",
    description:
      "Monitor your order's progress from the moment it's placed to its delivery, with real-time updates.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Our software is protected by high level professionals and proofed against malware and criminal attacks.",
    icon: FingerPrintIcon,
  },
];
function Features() {
  return (
    // <div ></div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">        
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-600">
            Our features
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to know about our app
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Streamline your healthy living and boost productivity with our
            innovative software. From farm management to market analysis, our
            app offers the tools you need to succeed.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
export default Features;
