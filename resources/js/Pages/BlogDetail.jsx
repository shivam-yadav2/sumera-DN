import React, { useMemo, useState } from "react";
import Layout from "../Layouts/Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { ArrowLeft, Check, Clock, Copy, ExternalLink, Share2 } from "lucide-react";

const formatDate = (dateString) => {
    if (!dateString) {
        return "Draft";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const BlogDetail = () => {
    const { blog = {}, relatedBlogs = [] } = usePage().props;
    const [copied, setCopied] = useState(false);

    const plainTextContent = useMemo(() => {
        if (!blog?.content) return "";
        return blog.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    }, [blog]);

    const readingTime = useMemo(() => {
        const words = plainTextContent ? plainTextContent.split(/\s+/).length : 0;
        return Math.max(1, Math.ceil(words / 200));
    }, [plainTextContent]);

    const keyInsights = useMemo(() => {
        if (!plainTextContent) return [];
        return plainTextContent
            .split(".")
            .map((sentence) => sentence.trim())
            .filter(Boolean)
            .slice(0, 3);
    }, [plainTextContent]);

    const handleShare = async () => {
        const shareData = {
            title: blog.title,
            text: blog.excerpt || "Check out this blog from Sumeera Salon & Academy",
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
            }
        } catch (error) {
            console.error("Share failed:", error);
        }
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <Layout>
            <Head title={blog.meta_title || blog.title || "Blog"}>
                <meta
                    name="description"
                    content={blog.meta_description || "Learn more from Sumeera Salon and Academy."}
                />
            </Head>

            <article className="pt-32 pb-20 bg-gradient-to-b from-[#f0ebe4] via-[#f8f6f2] to-[#ffffff] min-h-screen">
                <div className="max-w-7xl mx-auto lg:px-0 px-4">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-sm text-[#7a705e]">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 font-[500] text-[#3c4c24] hover:text-[#a0815c] transition"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to all articles
                        </Link>
                        <div className="flex flex-wrap items-center gap-6">
                            <span className="inline-flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {readingTime} min read
                            </span>
                            <span>{formatDate(blog.published_at)}</span>
                        </div>
                    </div>

                    <header className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#3c4c24]/10 text-[#3c4c24] font-[500] uppercase tracking-wide text-xs mb-5">
                            Sumeera Salon &amp; Academy Insights
                        </div>
                        <h1 className="text-4xl md:text-5xl font-[500] text-[#2f3720] leading-tight mb-6">
                            {blog.title}
                        </h1>
                        {blog.excerpt && (
                            <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                                {blog.excerpt}
                            </p>
                        )}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-3 bg-white shadow-sm rounded-full px-4 py-2">
                                <img
                                    src="/assets/logo/black.png"
                                    alt="Sumeera Salon & Academy"
                                    className="w-8 h-8 object-contain"
                                />
                                <div className="text-left">
                                    <p className="text-sm font-[500] text-[#2f3720]">Sumeera Editorial Team</p>
                                    <p className="text-xs text-gray-500">Beauty & Wellness Specialists</p>
                                </div>
                            </div>
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3c4c24] text-[#3c4c24] font-[500] hover:bg-[#354a2f]  hover:text-white transition"
                            >
                                <Share2 className="h-4 w-4" />
                                Share article
                            </button>
                            <button
                                onClick={handleCopyLink}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-transparent text-sm font-medium text-[#3c4c24] hover:text-[#a0815c] transition"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-4 w-4" />
                                        Link copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-4 w-4" />
                                        Copy link
                                    </>
                                )}
                            </button>
                        </div>
                    </header>

                    {blog.featured_image && (
                        <div className="mb-12 overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src={blog.featured_image}
                                alt={blog.title}
                                className="w-full object-cover max-h-[520px]"
                                loading="lazy"
                            />
                        </div>
                    )}

                    <div className="grid gap-8 md:grid-cols-7 mb-16">
                        <div
                            className="prose prose-lg col-span-5 prose-stone max-w-none bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-md text-sm leading-relaxed border border-[#e4ded2]"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <aside className="space-y-8 col-span-2">
                            <div className="bg-white rounded-3xl shadow-md border border-[#e4ded2] p-6">
                                <h2 className="text-xl font-[500] text-[#2f3720] mb-4">Why this matters</h2>
                                <p className="text-gray-600 text-sm">
                                    At Sumeera Salon &amp; Academy, we blend artistry and technique to deliver experiences
                                    that elevate your confidence. Here&apos;s what this article helps you uncover:
                                </p>
                                
                            </div>

                            <div className="bg-gradient-to-br from-[#3c4c24] to-[#a0815c] text-white rounded-3xl shadow-lg p-6 space-y-4">
                                <h3 className="text-xl font-[500]">Book a personalised consultation</h3>
                                <p className="text-sm text-white/80">
                                    Inspired by this article? Let our experts tailor a look that reflects your style.
                                    Choose in-salon experiences or academy sessions crafted for passionate learners.
                                </p>
                                <div className="grid gap-3">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-[#3c4c24] font-[500] hover:bg-[#f8f6f2] transition"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Contact Sumeera Team
                                    </Link>
                                    <Link
                                        href="/academy"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#3c4c24]/40 text-white font-[500] hover:bg-[#3c4c24]/60 transition"
                                    >
                                        Explore Academy Programs
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="bg-[#f5f1ea] border border-[#e4ded2] rounded-3xl p-8 md:p-12 mb-20 text-center">
                        <h2 className="text-2xl font-[500] text-[#2f3720] mb-4">Stay polished with our beauty dispatch</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                            Receive curated looks, backstage stories, and academy masterclasses straight to your inbox.
                            We respect your time—only thoughtful updates designed to inspire.
                        </p>
                        <form
                            className="mx-auto flex flex-col sm:flex-row gap-3 max-w-xl"
                            onSubmit={(event) => {
                                event.preventDefault();
                                window.location.href = "mailto:hello@sumeerabeauty.com?subject=Subscribe%20me%20to%20beauty%20updates";
                            }}
                        >
                            <input
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="flex-1 rounded-full border border-[#d3c7b8] px-5 py-3 focus:ring-2 focus:ring-[#3c4c24]/40 outline-none"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#354a2f]  text-white font-[500] hover:bg-[#2f3720] transition"
                            >
                                Keep me inspired
                            </button>
                        </form>
                    </div>
                </div>
            </article>

            {relatedBlogs.length > 0 && (
                <section className="bg-[#12110f] py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                            <div>
                                <p className="uppercase tracking-[0.3em] text-xs text-[#a0815c] mb-3">More stories</p>
                                <h2 className="text-3xl md:text-4xl font-[500] text-white">
                                    Continue your beauty journey
                                </h2>
                            </div>
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 text-sm font-[500] text-[#a0815c] hover:text-white transition"
                            >
                                View all
                                <ArrowLeft className="rotate-180 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            {relatedBlogs.map((item) => (
                                <article
                                    key={item.id}
                                    className="bg-[#1f1c18] border border-[#2f2a24] rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
                                >
                                    {item.featured_image ? (
                                        <img
                                            src={item.featured_image}
                                            alt={item.title}
                                            className="w-full h-40 object-cover rounded-lg mb-4"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-40 rounded-lg bg-[#2f2a24] flex items-center justify-center text-[#a0815c] font-[500] mb-4">
                                            Sumeera Salon &amp; Academy
                                        </div>
                                    )}
                                    <p className="text-xs uppercase tracking-wider text-[#a0815c] font-[500] mb-2">
                                        {formatDate(item.published_at)}
                                    </p>
                                    <h3 className="text-xl font-[500] text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <Link
                                        href={`/blogs/${item.slug}`}
                                        className="text-[#a0815c] font-[500] hover:text-white transition inline-flex items-center gap-2"
                                    >
                                        Read More
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default BlogDetail;

