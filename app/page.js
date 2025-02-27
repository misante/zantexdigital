import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Sample featured products (replace with your real ones)
  const featuredProducts = [
    {
      id: 1,
      name: "Fantasy Book Cover",
      image: "/downloads/book-covers/book-cover-1.png",
      description: "A magical design for your next novel.",
    },
    {
      id: 2,
      name: "Video Thumbnail Pack",
      image: "/downloads/thumbnails/video-thumb-1.jpg",
      description: "Boost your YouTube clicks.",
    },
    {
      id: 3,
      name: "T-shirt Design",
      image: "/downloads/tshirts/tshirt-design-1.jpg",
      description: "Ready-to-print coolness.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
            Welcome to Zantex Digital
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-delay">
            Discover unique digital creations—from book covers to apps—ready to
            inspire and empower you.
          </p>
          <Link
            href={"/products"}
            className="hover:cursor-pointer mt-6 inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-100 hover:scale-105 transition-all duration-300"
          >
            Explore Now
          </Link>
        </div>
        {/* Optional: Add a subtle background pattern or image */}
        {/* <div className="absolute inset-0 opacity-10 bg-[url('/hero-pattern.png')] bg-cover" /> */}
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Featured Creations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-indigo-600">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="text-indigo-600 font-semibold hover:underline"
            >
              See All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Free & Premium Downloads
          </h2>
          <p className="mt-4 text-gray-600">
            Whether you’re a creator or a consumer, find tools and designs to
            spark your next project.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Zantex Digital. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/products" className="hover:text-indigo-300">
              Products
            </Link>
            <Link href="/how-to" className="hover:text-indigo-300">
              How to Use
            </Link>
            {/* Add social links if you have them */}
          </div>
        </div>
      </footer>
    </div>
  );
}

// Optional: Add custom animations in globals.css
