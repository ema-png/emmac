export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-pink-400 mb-6">
        ⋆ ˚｡⋆୨୧˚ Emma's first Next.js & Tailwind Page ⋆ ˚｡⋆୨୧˚
      </h1>
      <p className="text-lg text-gray-500 mb-6">
        Hi! My name is Emma Walker, and I'm a freshman majoring in Computer Science. 
      </p>
      <div className="bg-pink-200 text-lg text-red-400 mb-6">
        Fun Fact: I sprained my ankle under a seesaw when I was 7 
      </div>
      <button className="px-6 py-3 bg-red-300 text-white rounded-lg shadow hover:bg-pink-300 transition">
        ‧₊˚❀༉‧₊˚.
      </button>
    </main>
  );
}