import React from "react";
import BlogCard from "./BlogCard";

const samplePosts = [
  {
    id: 1,
    title: "Spring Asparagus with Lemon and Parmesan",
    image: "https://images.unsplash.com/photo-1664994831961-3ae7deb6579a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcHJpbmclMjBBc3BhcmFndXMlMjB3aXRoJTIwTGVtb258ZW58MHwwfHx8MTc2MzYyMjM5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    excerpt:
      "Tender asparagus tossed with bright lemon, flaky sea salt, and shaved parmesan. A 15-minute side that tastes like sunshine.",
  },
  {
    id: 2,
    title: "Heirloom Tomato Toast with Basil Oil",
    image: "https://images.unsplash.com/photo-1576874045656-60cec0baffe3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWlybG9vbSUyMFRvbWF0byUyMFRvYXN0JTIwd2l0aHxlbnwwfDB8fHwxNzYzNjIyMzk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    excerpt:
      "Thick sourdough, ripe tomatoes, and a drizzle of homemade basil oil. Simple ingredients, huge flavor.",
  },
  {
    id: 3,
    title: "Golden Turmeric Chickpea Stew",
    image: "https://images.unsplash.com/photo-1688940738506-acfe9334bf5c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2xkZW4lMjBUdXJtZXJpYyUyMENoaWNrcGVhJTIwU3Rld3xlbnwwfDB8fHwxNzYzNjIyMzk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    excerpt:
      "Cozy, creamy, and full of plant-based protein. This stew is weekday friendly and freezer perfect.",
  },
  {
    id: 4,
    title: "Crispy Roasted Potatoes with Garlic Herb Butter",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Ultra-crispy edges, fluffy centers, and a silky herb butter spooned over the top.",
  },
  {
    id: 5,
    title: "Zesty Quinoa Salad with Feta and Cucumber",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Meal-prep friendly, fresh, and crunchy. Tossed in a lemony vinaigrette you'll want on everything.",
  },
  {
    id: 6,
    title: "Blueberry Overnight Oats with Toasted Almonds",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Creamy oats swirled with blueberries and topped with crunchy almonds. Breakfast that waits for you.",
  },
];

function BlogGrid() {
  const firstTwoRows = samplePosts.slice(0, 6);

  return (
    <section className="py-10">
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {firstTwoRows.map((post) => (
          <BlogCard key={post.id} image={post.image} title={post.title} excerpt={post.excerpt} />)
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12.97 4.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06L17.94 12l-4.97-4.97a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/></svg>
        </button>
      </div>
    </section>
  );
}

export default BlogGrid;
