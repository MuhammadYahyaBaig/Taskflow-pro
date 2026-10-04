function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {feature.title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {feature.description}
      </p>

    </div>
  );
}

export default FeatureCard;