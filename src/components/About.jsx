

const About = () => {
  return (
    <div className="h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-screen mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Movie App</h1>
        
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Discover the World of Movies</h2>
            <p className="text-gray-300">
              Our movie app is designed to bring you the best cinematic experience right at your fingertips. Whether you're a fan of action, romance, comedy, or documentaries, we've got something for everyone. Explore a vast library of movies, curated just for you.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Extensive Movie Library: Access thousands of movies from various genres.</li>
              <li>Personalized Recommendations: Get movie suggestions based on your preferences.</li>
              <li>High-Quality Streaming: Enjoy movies in HD and 4K quality.</li>
              <li>User-Friendly Interface: Easy navigation and seamless browsing experience.</li>
              <li>Offline Viewing: Download movies and watch them offline.</li>
              <li>Regular Updates: New movies and TV shows added regularly.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-gray-300">
              Our movie app stands out because of its commitment to quality and user satisfaction. We continuously work to improve our platform, ensuring that you have the best possible experience. Join us today and dive into the world of endless entertainment!
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300">
              Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:support@movieapp.com" className="text-blue-400 hover:text-blue-300">support@movieapp.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;