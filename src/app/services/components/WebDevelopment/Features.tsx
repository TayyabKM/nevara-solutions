const features = [
    "Brand-Reflecting Custom Design",
    "Robust E-commerce Solutions",
    "Easy Content Management (CMS)",
    "SEO for Higher Rankings",
    "Intuitive User Experiences",
    "Secure, Scalable Development",
    "Collaborative Vision Realization",
    "Ongoing Post-Launch Support",
  ];
  
  export default function Features() {
    return (
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gradient">How Nevara Helps You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-800/50 rounded-lg shadow-md">
              {feature}
            </div>
          ))}
        </div>
      </section>
    );
  }
  