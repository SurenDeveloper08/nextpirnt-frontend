import CommentForm from "../../components/Comment/page";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogImg from '../../assets/blog.jpg';

const blogs = [
  {
    slug: "printer-maintenance-guide",
    title: "Complete Printer Maintenance Guide Learn how to maintain your printer for long-lasting performance. Learn how to maintain your printer for long-lasting performance.",
    excerpt: "Learn how to maintain your printer for long-lasting performance.",
    content: `
      Regular printer maintenance helps reduce breakdowns and increases lifespan.
      Clean the rollers, replace cartridges on time, and schedule AMC services.
    `,
    date: "Feb 20, 2026",
    image: BlogImg
  },
  {
    slug: "why-rent-a-printer",
    title: "Why Renting a Printer Saves Your Business Money",
    excerpt: "Printer rental is cost-effective for growing businesses in the UAE.",
    content: `
      Renting printers reduces upfront investment and includes maintenance support.
      It’s ideal for startups and enterprises.
    `,
    date: "Feb 18, 2026",
    image: BlogImg
  }
];

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return notFound();

  return (
    <section className="min-h-screen bg-white py-24 px-6 md:px-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-gray-400">{blog.date}</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">{blog.title}</h1>
        </div>

        <div className="relative w-full h-96 rounded-2xl overflow-hidden">
          <Image src={blog.image} alt={blog.title} fill className="object-cover" />
        </div>

        <div className="prose max-w-none text-gray-600">
          <p>{blog.content}</p>
        </div>

        {/* Comment Section */}
        <div className="pt-12 border-t">
          <h2 className="text-2xl font-bold mb-6">Leave a Comment</h2>
          <CommentForm />
        </div>
      </div>
    </section>
  );
}