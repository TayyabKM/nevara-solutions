const steps = [
    { title: "Your Vision", description: "We listen to your ideas and translate them into a clear website strategy." },
    { title: "Our Expertise", description: "Our developers build a secure, high-performing website, keeping you involved." },
    { title: "Your Success", description: "We launch your site and provide ongoing support to help your business thrive." },
  ];
  
  export default function Process() {
    return (
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gradient">Your Website Journey: From Vision to Victory</h2>
        <div className="mt-6 space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-800/50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  