import Image from "next/image";
import Link from "next/link";

export default async function Product({ params }) {
  const { id } = await params;

  // Product data
  const products = {
    1: {
      name: "Fantasy Book Cover",
      description:
        "A mystical design for your next fantasy novel, featuring glowing ruins and ethereal beings.",
      price: "Free",
      image: "/downloads/book-covers/book-cover-1.png",
      file: "/downloads/book-covers/book-cover-1.png",
      category: "Book Cover",
    },
    2: {
      name: "Video Thumbnail Pack",
      description:
        "Vibrant, alien-inspired thumbnails to boost your YouTube clicks.",
      price: "$5",
      image: "/downloads/thumbnails/video-thumb-1.jpg",
      file: "/downloads/thumbnails/video-thumb-1.zip",
      category: "Video Thumbnail",
    },
    3: {
      name: "T-shirt Design",
      description: "A neon geometric pattern perfect for tech enthusiasts.",
      price: "$10",
      image: "/downloads/tshirts/tshirt-design-1.jpg",
      file: "/downloads/tshirts/tshirt-design-1.psd",
      category: "T-shirt Design",
    },
    4: {
      name: "Galaxy Explorer App",
      description: "Explore alien planets with this sleek Android app.",
      price: "Free",
      image: "/downloads/apps/my-app-preview.jpg",
      file: "/downloads/apps/my-app-v1.apk",
      category: "App",
    },
    5: {
      name: "Stars in My Pocket",
      description: "A colorful children’s book on space exploration.",
      price: "$3",
      image: "/downloads/books/my-book-cover.jpg",
      file: "/downloads/books/my-book.pdf",
      category: "Book",
    },
  };

  const product = products[id] || {
    name: "Not Found",
    description: "This product doesn’t exist.",
    price: "N/A",
    image: "/not-found.jpg",
    file: null,
    category: "N/A",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-in">
            {product.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-indigo-100 animate-fade-in-delay">
            {product.category}
          </p>
        </div>
      </section>
      {/* Add this below the header */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <Link href="/products" className="text-indigo-600 hover:underline">
          ← Back to All Products
        </Link>
      </div>
      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Image Preview */}
          <div className="md:w-1/2">
            <div className="relative w-full h-64 md:h-96 group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20 rounded-lg">
                <span className="text-white text-lg font-semibold">
                  Click to Zoom
                </span>
              </div>
            </div>
          </div>

          {/* Info & Download */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-4 text-lg font-semibold text-indigo-600">
              Price: {product.price}
            </p>

            {product.file ? (
              product.price === "Free" ? (
                <a
                  href={product.file}
                  download={product.name.replace(/\s+/g, "-").toLowerCase()}
                  className="mt-6 inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
                >
                  Download Now
                </a>
              ) : (
                <Link
                  href="/payment"
                  className="mt-6 inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
                >
                  Buy Now ({product.price})
                </Link>
              )
            ) : (
              <p className="mt-6 text-red-600">Download not available.</p>
            )}

            {/* Additional Info */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">
                How to Use
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {product.category === "App"
                  ? "Install on your Android device and start exploring!"
                  : "Open in your favorite editor or app to customize."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.values(products)
              .filter(
                (p) => p.id !== Number(id) && p.category === product.category
              )
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.id} // Unique key prop here
                  href={`/products/${related.id}`}
                  className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-indigo-600">
                    {related.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
