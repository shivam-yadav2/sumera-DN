import React, { useMemo, useState } from "react";
import Layout from "../Layouts/Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { ArrowRight, CalendarDays, Flame, RefreshCw, Search } from "lucide-react";

const formatDate = (dateString) => {
    if (!dateString) {
        return "Draft";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const BlogList = () => {
    const { blogs = [], pageMeta = {} } = usePage().props;
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("all");

    const monthFilters = useMemo(() => {
        const monthMap = new Map();

        blogs.forEach((blog) => {
            if (!blog.published_at) {
                return;
            }
            const date = new Date(blog.published_at);
            const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
            const label = date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
            });
            monthMap.set(key, label);
        });

        return [
            { value: "all", label: "All timelines" },
            ...Array.from(monthMap.entries()).map(([value, label]) => ({ value, label })),
        ];
    }, [blogs]);

    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesSearch =
                searchTerm.trim().length === 0 ||
                [blog.title, blog.excerpt]
                    .filter(Boolean)
                    .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesMonth =
                selectedMonth === "all" ||
                (blog.published_at &&
                    `${new Date(blog.published_at).getFullYear()}-${String(
                        new Date(blog.published_at).getMonth() + 1,
                    ).padStart(2, "0")}` === selectedMonth);

            return matchesSearch && matchesMonth;
        });
    }, [blogs, searchTerm, selectedMonth]);

    const featuredBlog = filteredBlogs[0];
    const otherBlogs = filteredBlogs.slice(1);
    const trendingTopics = ["Bridal Looks", "Haircare Rituals", "Academy Diaries", "Seasonal Trends"];

    return (
        <Layout>
            <Head title={pageMeta.title || "Blog"}>
                <meta
                    name="description"
                    content={pageMeta.description || "Discover the latest updates from Sumeera Salon and Academy."}
                />
            </Head>

            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff] min-h-screen">
                <div className="max-w-6xl mx-auto px-4 space-y-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#12110f] text-white px-8 py-14 md:px-12">
                        <div className="absolute inset-0 bg-[url('/assets/gallery/blog-banner.webp')] opacity-10 bg-cover bg-center pointer-events-none" />
                        <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
                            <div>
                                <p className="uppercase tracking-[0.4em] text-xs text-[#e7d3ba] mb-4">Sumeera Journal</p>
                                <h1 className="text-4xl md:text-5xl font-[500] leading-tight mb-5">
                                    Stories, rituals, and beauty wisdom from our studio &amp; academy
                                </h1>
                                <p className="text-white/70 text-sm md:text-base max-w-2xl">
                                    Discover techniques straight from our artists, backstage narratives, and guides that help
                                    you curate a signature look—whether you are stepping into our salon or our training studio.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur">
                                        <Flame className="h-4 w-4 text-[#e7d3ba]" />
                                        {blogs.length} curated articles
                                    </span>
                                    <Link
                                        href="#latest-articles"
                                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#3c4c24] font-[500] hover:bg-[#f5efe3] transition"
                                    >
                                        Read the latest
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur space-y-4">
                                <h2 className="text-lg font-[500] text-white">Trending topics</h2>
                                <p className="text-white/60 text-sm">
                                    Browse themes that our community can&apos;t stop talking about.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {trendingTopics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium hover:bg-white/20 transition"
                                        >
                                            #{topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white border border-[#e4ded2] shadow-sm p-6 md:p-8 space-y-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div className="flex items-center gap-3 border border-[#d9cebf] rounded-full px-4 py-2 w-full lg:w-auto">
                                <Search className="h-5 w-5 text-[#a0815c]" />
                                <input
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="Search by theme, look, or tip"
                                    className="flex-1 outline-none border-none focus:ring-0 focus:outline-none focus:border-none text-sm text-[#2f3720] placeholder:text-[#b6ac9f]"
                                />
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 border border-[#d9cebf] rounded-full text-sm text-[#3c4c24] bg-[#f8f6f2]">
                                    <CalendarDays className="h-4 w-4 text-[#a0815c]" />
                                    Timeline
                                </div>
                                <div className="relative">
                                    <select
                                        value={selectedMonth}
                                        onChange={(event) => setSelectedMonth(event.target.value)}
                                        className="appearance-none bg-[#f8f6f2] border border-[#d9cebf] rounded-full px-5 py-2 text-sm text-[#2f3720] pr-10"
                                    >
                                        {monthFilters.map((filter) => (
                                            <option key={filter.value} value={filter.value}>
                                                {filter.label}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#a0815c] text-xs">
                                        ▼
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedMonth("all");
                                        setSearchTerm("");
                                    }}
                                    className="inline-flex items-center gap-2 text-sm text-[#a0815c] hover:text-[#3c4c24] transition"
                                >
                                    <RefreshCw className="h-4 w-4" />
                                    Clear filters
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#7a705e]">
                            <span className="font-[500] text-[#3c4c24]">
                                {filteredBlogs.length} {filteredBlogs.length === 1 ? "story" : "stories"} curated
                            </span>
                            {searchTerm && (
                                <span className="px-3 py-1 rounded-full bg-[#f5efe3]">
                                    Searching for “{searchTerm.trim()}”
                                </span>
                            )}
                            {selectedMonth !== "all" && (
                                <span className="px-3 py-1 rounded-full bg-[#f5efe3]">
                                    Timeline:{" "}
                                    {
                                        monthFilters.find((filter) => filter.value === selectedMonth)?.label ??
                                        "Selected month"
                                    }
                                </span>
                            )}
                        </div>
                    </div>

                    <div id="latest-articles" className="space-y-16">
                        {blogs.length === 0 ? (
                            <div className="bg-white shadow-md rounded-3xl p-12 text-center border border-[#e4ded2]">
                                <h2 className="text-2xl font-[500] text-[#2f3720] mb-3">
                                    No beauty stories just yet
                                </h2>
                                <p className="text-gray-600 max-w-xl mx-auto">
                                    Our artists are crafting something special. In the meantime, explore our salon and academy
                                    offerings tailor-made for you.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-[500]">
                                    <Link
                                        href="/services/bridal-makeup"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3c4c24] text-white hover:bg-[#2f3720] transition"
                                    >
                                        Discover our services
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="/academy"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#3c4c24] text-[#3c4c24] hover:bg-[#3c4c24] hover:text-white transition"
                                    >
                                        Explore the academy
                                    </Link>
                                </div>
                            </div>
                        ) : filteredBlogs.length === 0 ? (
                            <div className="bg-white border border-[#f0e5d7] rounded-3xl p-12 text-center shadow-sm">
                                <h2 className="text-2xl font-[500] text-[#2f3720] mb-3">
                                    We couldn&apos;t find a match
                                </h2>
                                <p className="text-gray-600 max-w-lg mx-auto mb-6">
                                    Try adjusting your search keywords or select another timeline to reveal more insights from
                                    our artists.
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedMonth("all");
                                        setSearchTerm("");
                                    }}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3c4c24] text-white text-sm font-[500] hover:bg-[#2f3720] transition"
                                >
                                    Reset view
                                    <RefreshCw className="h-4 w-4" />
                                </button>
                            </div>
                        ) : (
                            <>
                                {featuredBlog && (
                                    <article className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center bg-white border border-[#e4ded2] rounded-3xl shadow-sm overflow-hidden">
                                        <div className="relative group h-full">
                                            {featuredBlog.featured_image ? (
                                                <img
                                                    src={featuredBlog.featured_image}
                                                    alt={featuredBlog.title}
                                                    className="w-full h-full object-cover max-h-[420px] transition duration-500 group-hover:scale-[1.03]"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full min-h-[320px] bg-[#ede3d4] flex items-center justify-center text-[#7a705e] font-[500]">
                                                    Sumeera Salon &amp; Academy
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-xs font-[500] text-[#3c4c24]">
                                                Editor&apos;s pick
                                            </div>
                                        </div>
                                        <div className="p-6 md:p-10 flex flex-col gap-6">
                                            <div className="flex flex-wrap items-center gap-3 text-xs font-[500] uppercase tracking-[0.3em] text-[#a0815c]">
                                                <span>{formatDate(featuredBlog.published_at)}</span>
                                                <span className="w-8 border-t border-[#e4ded2]" />
                                                <span>Signature insight</span>
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-[500] text-[#2f3720] leading-tight mb-3">
                                                    {featuredBlog.title}
                                                </h2>
                                                <p className="text-gray-600 text-base">
                                                    {featuredBlog.excerpt}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a705e]">
                                                <span className="px-3 py-1 rounded-full bg-[#f8f6f2] border border-[#e8ddcf]">
                                                    Curated for beauty connoisseurs
                                                </span>
                                                <Link
                                                    href={`/blogs/${featuredBlog.slug}`}
                                                    className="inline-flex items-center gap-2 text-[#3c4c24] font-[500] hover:text-[#a0815c] transition"
                                                >
                                                    Experience the story
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                )}

                                {otherBlogs.length > 0 && (
                                    <div className="space-y-8">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div>
                                                <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-2">
                                                    SALON &amp; ACADEMY PERSPECTIVES
                                                </p>
                                                <h3 className="text-2xl font-[500] text-[#2f3720]">
                                                    Fresh drops straight from our stylists
                                                </h3>
                                            </div>
                                            <span className="text-sm text-[#7a705e]">
                                                {otherBlogs.length} more {otherBlogs.length === 1 ? "story" : "stories"} to explore
                                            </span>
                                        </div>

                                        <div className="grid gap-8 md:grid-cols-2">
                                            {otherBlogs.map((blog) => (
                                                <article
                                                    key={blog.id}
                                                    className="bg-white rounded-3xl border border-[#ebe0d1] shadow-sm overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
                                                >
                                                    {blog.featured_image ? (
                                                        <img
                                                            src={blog.featured_image}
                                                            alt={blog.title}
                                                            className="w-full h-48 object-cover"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-48 bg-[#ede3d4] flex items-center justify-center text-[#7a705e] font-[500]">
                                                            Sumeera Salon &amp; Academy
                                                        </div>
                                                    )}
                                                    <div className="p-6 space-y-4">
                                                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase font-[500] tracking-[0.3em] text-[#a0815c]">
                                                            <span>{formatDate(blog.published_at)}</span>
                                                            <span className="w-6 border-t border-[#e4ded2]" />
                                                            <span>Beauty note</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xl font-[500] text-[#2f3720] mb-3">
                                                                {blog.title}
                                                            </h4>
                                                            <p className="text-gray-600 text-sm line-clamp-3">
                                                                {blog.excerpt}
                                                            </p>
                                                        </div>
                                                        <Link
                                                            href={`/blogs/${blog.slug}`}
                                                            className="inline-flex items-center gap-2 text-sm font-[500] text-[#3c4c24] hover:text-[#a0815c] transition"
                                                        >
                                                            Read & reflect
                                                            <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    <div className="bg-[#12110f] rounded-3xl overflow-hidden text-white">
                        <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] items-center">
                            <div className="relative p-10 md:p-14">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/20 via-transparent to-transparent pointer-events-none" />
                                <h3 className="text-3xl font-[500] mb-4">
                                    Want to experience these transformations in real life?
                                </h3>
                                <p className="text-white/70 leading-relaxed max-w-2xl">
                                    Meet our artists, discover signature treatments, and learn techniques that make every look
                                    feel effortless. Let&apos;s co-create your next celebration moment.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-4 text-sm font-[500]">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#3c4c24] hover:bg-[#f5efe3] transition"
                                    >
                                        Book a consultation
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="/academy"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                                    >
                                        Join the academy
                                    </Link>
                                </div>
                            </div>
                            <div className="h-full bg-[url('/assets/gallery/salon-chair.webp')] bg-cover bg-center min-h-[260px]" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogList;

