"use client";
import React, { useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    desc: "Sign up and access your inspection dashboard in seconds.",
  },
  {
    id: 2,
    title: "Submit Inspection Details",
    desc: "Provide product, supplier, and inspection requirements.",
  },
  {
    id: 3,
    title: "Receive Your Report",
    desc: "Get a detailed inspection report within 24–48 hours.",
  },
];

export default function OrderSteps() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-text">
            How To Place An Order
          </h2>
          <div className="w-16 h-1 bg-brand-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-brand-muted text-lg">
            Book an inspection online and our system will manage the entire process for you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Steps */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-brand-border" />

            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex gap-6 mb-12 relative cursor-pointer transition-all duration-300"
                >
                  {/* Step Circle */}
                  <div className="flex-shrink-0 z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300
                      ${isActive ? "bg-brand-primary text-white" : "bg-brand-border text-brand-muted"}`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300
                      ${isActive ? "text-brand-text" : "text-brand-muted"}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed transition-colors duration-300
                      ${isActive ? "text-brand-muted" : "text-brand-muted/60"}`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl border border-brand-border bg-white">
              <Image
                src="/order-dashboard.png"
                alt="Inspection Dashboard"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
