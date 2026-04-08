
import BlogCard from '../components/BlogCard/page';
import BlogImg from '../assets/blog.jpg'
const blogs = [
    {
        slug: "printer-maintenance-guide",
        title: "Complete Printer Maintenance Guide",
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
export default function BlogsPage() {
    return (
        <section className="min-h-screen bg-[#f8f9fa] py-24 px-6 md:px-12">

            {/* <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900">
                    Our Latest Blogs
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Insights, guides, and expert tips about printer sales, rental, and maintenance.
                </p>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
        </section>
    );
}