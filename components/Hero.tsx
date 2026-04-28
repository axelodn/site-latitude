"use client";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <p className="text-yellow-500 uppercase text-sm tracking-widest mb-4">
          Agence événementielle
        </p>
        <h1 className="text-6xl font-bold text-white mb-6">
          Des événements qui<br />
          <span className="text-yellow-500">marquent</span>
        </h1>
        <p className="text-gray-300 text-xl mb-8">
          20 ans d'expertise
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-600">
          Parler de votre projet
        </button>
      </div>
    </section>
  );
}
