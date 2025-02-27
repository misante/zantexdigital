import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Fantasy Book Cover",
      description: "A stunning book cover design.",
      image: "/downloads/book-covers/book-cover-1.png",
    },
    {
      id: 2,
      name: "Video Thumbnail Pack",
      description: "Eye-catching thumbnails for YouTube.",
      image: "/downloads/thumbnails/video-thumb-1.jpg",
    },
    {
      id: 3,
      name: "T-shirt Design",
      description: "Editable PSD for custom tees.",
      image: "/downloads/tshirts/tshirt-design-1.jpg",
    },
    {
      id: 4,
      name: "My First App",
      description: "A simple Android app.",
      image: "/downloads/apps/my-app-preview.jpg",
    },
    {
      id: 5,
      name: "Short Story Book",
      description: "A 50-page PDF eBook.",
      image: "/downloads/books/my-book-cover.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Products</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Explore a variety of digital tools and designs—free and premium
            options available!
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-indigo-600">
                  {product.name}
                </h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <span className="mt-3 inline-block text-indigo-600 font-medium hover:underline">
                  View & Download
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
