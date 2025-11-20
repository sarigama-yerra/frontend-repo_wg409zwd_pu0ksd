import React from "react";
import BlogCard from "./BlogCard";

const kebabPosts = [
  {
    id: "k1",
    title: "Char-grilled Lamb Kebab with Sumac Onions",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Smoky lamb, tangy onions, and warm flatbread. Street-food classic elevated.",
  },
  {
    id: "k2",
    title: "Adana Kebab Platter",
    image:
      "https://images.unsplash.com/photo-1617195737494-5d9e3a1a2780?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Juicy, spicy, and perfect with grilled peppers and tomatoes.",
  },
];

const burgerPosts = [
  {
    id: "b1",
    title: "Smash Burger with Crispy Edges",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Ultra-crispy crust, melty cheese, and a tangy house sauce.",
  },
  {
    id: "b2",
    title: "Mushroom Swiss Double",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Savory mushrooms, sweet onions, and creamy Swiss on a brioche bun.",
  },
];

const restaurantPosts = [
  {
    id: "r1",
    title: "Neighborhood Gem: Lina's Grill",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Casual vibes, impeccable skewers, and a pistachio baklava worth the trip.",
  },
  {
    id: "r2",
    title: "Late-night Bites at Corner Burger",
    image:
      "https://images.unsplash.com/photo-1606756790138-261dedb9d9b4?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Open past midnight with consistently great fries and shakes.",
  },
];

function Section({ id, title, posts }) {
  return (
    <section id={id} className="py-10">
      <div className="flex items-end justify-between mb-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{title}</h3>
        <a href="#create" className="text-sm text-emerald-700 hover:underline">Write a report →</a>
      </div>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.id} image={p.image} title={p.title} excerpt={p.excerpt} />
        ))}
      </div>
    </section>
  );
}

export default function CategorySections() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <Section id="kebabs" title="Kebabs" posts={kebabPosts} />
      <Section id="burgers" title="Burgers" posts={burgerPosts} />
      <Section id="restaurants" title="Restaurants" posts={restaurantPosts} />
    </div>
  );
}
