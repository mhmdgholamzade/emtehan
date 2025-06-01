import React, { useState, useEffect } from 'react';

// Custom Hook برای دریافت داده‌های مراحل
function useProcessSteps(initialSteps) {
  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    // شبیه‌سازی دریافت داده‌ها از سرور
    const fetchSteps = () => {
      // در اینجا می‌توان داده‌ها را از API واقعی دریافت کرد
      setSteps(initialSteps);
    };

    fetchSteps();
  }, [initialSteps]);

  return steps;
}

// کامپوننت برای نمایش هر مرحله
function ProcessStep({ icon, title, description }) {
  return (
    <div className="col-lg-3 col-md-6 mx-auto">
      <div className="p-list mb-md50">
        <span className="icon"><i className={`fa ${icon}`}></i></span>
        <h6 className="mb-3 mt-5">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

// کامپوننت برای نمایش لیست مراحل
function ProcessList({ steps }) {
  return (
    <div className="row">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}

// کامپوننت برای نمایش عنوان و توضیحات بخش
function ProcessHeader({ heading, description }) {
  return (
    <div className="row">
      <div className="text-center col-lg-12">
        <h2 className="heading-primary mb-5">{heading}</h2>
        <p className="mb-5">{description}</p>
      </div>
    </div>
  );
}

// کامپوننت اصلی Process
function Process({ stepsData }) {
  const steps = useProcessSteps(stepsData);

  return (
    <section className="process">
      <div className="container">
        <ProcessHeader
          heading="Work Process"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, numquam aut tenetur fugiat cumque nostrum adipisci."
        />
        <ProcessList steps={steps} />
      </div>
    </section>
  );
}


const stepsData = [
  {
    icon: 'fa-exclamation',
    title: 'Discussion',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    icon: 'fa-refresh',
    title: 'Strategy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'fa-code',
    title: 'Testing',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'fa-hourglass-start',
    title: 'Reporting',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
];


function App() {
  return <Process stepsData={stepsData} />;
}

export default App;
