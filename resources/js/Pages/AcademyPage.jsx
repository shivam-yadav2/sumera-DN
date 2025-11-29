import Layout from "@/Layouts/Layout";
import React, { useState } from "react";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import SEOHead from "@/Components/SEOHead";
import AcademyWhyChoose from "@/Components/customComponent/AcademyWhyChoose";
import AcademyTestimonials from "@/Components/customComponent/AcademyTestimonials";
import SalonContact from "@/Components/customComponent/ContactSection";
import CourseModal from "@/Components/customComponent/CourseModal";
import { usePage } from "@inertiajs/react";
import {
    Clock,
    BookOpen,
    Award,
    GraduationCap,
    Users,
    Sparkles,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

const AcademyContent = ({ courses }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const openCourseModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCourse(null), 300);
    };

    if (!courses || courses.length === 0) {
        return (
            <div className="bg-[#fdfaf5]">
                <BannerSection
                    title="Academy Courses"
                    subtitle="Transform Your Passion Into Profession"
                    description="Join India's leading beauty academy and learn from certified professionals."
                    label="SUMEERA ACADEMY"
                />
                <div className="py-20 text-center">
                    <p className="text-[#7a705e] text-lg">
                        Courses coming soon. Please check back later!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff]">
                <BannerSection
                    title="Academy Courses"
                    subtitle="Transform Your Passion Into Profession"
                    description="Join India's leading beauty academy and learn from certified professionals. Industry-recognized courses, hands-on training, and lifetime support."
                    label="SUMEERA ACADEMY"
                />

                {/* Courses Tab Section */}
                <section className="py-16 lg:py-20 px-4">
                    <div className="container mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            {/* <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-4 font-[500]">
                                PROFESSIONAL TRAINING
                            </p> */}
                            <h2 className="text-4xl lg:text-5xl font-[500] text-[#2f3720] head mb-4">
                                Explore Our Courses
                            </h2>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
                            <div className="bg-white/70 border border-[#ece8e1] rounded-2xl p-4 max-h-[600px] overflow-y-auto">
                                <div className="space-y-2">
                                    {courses.map((course, index) => (
                                        <button
                                            key={course.id}
                                            onClick={() => setActiveTab(index)}
                                            className={`btn-interactive w-full text-left px-4 py-3 rounded-xl text-sm font-[500] ${
                                                activeTab === index
                                                    ? "bg-[#1f1f1f] text-white shadow-sm"
                                                    : "bg-transparent text-[#2f2a1f] border border-[#e2dbce] hover:border-[#c1b198]"
                                            }`}
                                        >
                                            <div className="text-xs uppercase tracking-[0.2em] text-current/70 mb-1">
                                                Course {index + 1}
                                            </div>
                                            <div className="leading-snug">
                                                {course.title}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                {courses.map((course, index) => (
                                    <div
                                        key={course.id}
                                        className={`transition-all duration-500 ${
                                            activeTab === index
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 absolute inset-0 pointer-events-none -translate-y-4"
                                        }`}
                                    >
                                        <div className="bg-white/90 rounded-2xl border border-[#ece8e1] shadow-[0_20px_60px_rgba(31,31,31,0.06)] overflow-hidden">
                                            <div className="grid lg:grid-cols-2 gap-10 p-6 lg:p-10">
                                                {/* Left Column - Course Info */}
                                                <div className="space-y-8">
                                                    <div>
                                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f4efe6] rounded-full text-[#3c3a2f] text-xs font-[600] tracking-[0.08em] mb-4">
                                                            <div className="w-6 h-6 rounded-full border border-[#d9d1c1] flex items-center justify-center">
                                                                <Award className="w-3.5 h-3.5" />
                                                            </div>
                                                            Certified Program
                                                        </div>
                                                        <h3 className="text-3xl lg:text-[2.6rem] font-[600] text-[#1f1f1f] head mb-5 leading-tight">
                                                            {course.title}
                                                        </h3>
                                                        {course.description && (
                                                            <p className="text-[#5c564b] text-base leading-relaxed">
                                                                {
                                                                    course.description
                                                                }
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Course Highlights */}
                                                    <div className="space-y-4">
                                                        <h4 className="text-base uppercase tracking-[0.2em] text-[#9a8f7a] font-[600]">
                                                            Course Highlights
                                                        </h4>
                                                        <div className="grid gap-3">
                                                            {course.duration && (
                                                                <div className="flex items-center justify-between rounded-2xl border border-[#ece8e1] px-4 py-3 bg-[#fcfbf7]">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-10 h-10 rounded-full bg-white border border-[#ece8e1] flex items-center justify-center">
                                                                            <Clock className="w-4 h-4 text-[#c4a574]" />
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-xs uppercase tracking-[0.2em] text-[#b1a591]">
                                                                                Duration
                                                                            </p>
                                                                            <p className="text-[#2f2a1f] font-[600]">
                                                                                {
                                                                                    course.duration
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {course.details &&
                                                                course.details
                                                                    .length >
                                                                    0 && (
                                                                    <div className="flex items-center justify-between rounded-2xl border border-[#ece8e1] px-4 py-3 bg-[#fcfbf7]">
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="w-10 h-10 rounded-full bg-white border border-[#ece8e1] flex items-center justify-center">
                                                                                <BookOpen className="w-4 h-4 text-[#c4a574]" />
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-xs uppercase tracking-[0.2em] text-[#b1a591]">
                                                                                    Modules
                                                                                </p>
                                                                                <p className="text-[#2f2a1f] font-[600]">
                                                                                    {
                                                                                        course
                                                                                            .details
                                                                                            .length
                                                                                    }{" "}
                                                                                    Learning
                                                                                    Modules
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            <div className="flex items-center justify-between rounded-2xl border border-[#ece8e1] px-4 py-3 bg-[#fcfbf7]">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-10 h-10 rounded-full bg-white border border-[#ece8e1] flex items-center justify-center">
                                                                        <Award className="w-4 h-4 text-[#c4a574]" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs uppercase tracking-[0.2em] text-[#b1a591]">
                                                                            Certification
                                                                        </p>
                                                                        <p className="text-[#2f2a1f] font-[600]">
                                                                            Industry
                                                                            Recognized
                                                                            Certificate
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={() =>
                                                            openCourseModal(
                                                                course
                                                            )
                                                        }
                                                        className="btn-interactive w-full inline-flex items-center justify-center gap-2 py-4 px-8 bg-[#1f1f1f] text-white font-[500] rounded-full hover:bg-[#353535]"
                                                    >
                                                        View Full Course Details
                                                        <ArrowRight className="w-5 h-5" />
                                                    </button>
                                                </div>

                                                {/* Right Column - Course Benefits */}
                                                <div className="space-y-8 lg:block hidden">
                                                    <div>
                                                        <div className="flex items-center justify-between mb-6">
                                                            <h4 className="text-base uppercase tracking-[0.3em] text-[#b1a591] font-[600]">
                                                                Syllabus
                                                                Snapshot
                                                            </h4>
                                                            <div className="w-12 h-px bg-[#e4ded2]" />
                                                        </div>
                                                        <div className="space-y-3">
                                                            {[
                                                                "Professional techniques & updated curriculum",
                                                                "Hands-on practical training with real clients",
                                                                "Guidance from certified senior educators",
                                                                "Business, branding & client building",
                                                                "Trends, advanced methods & product knowledge",
                                                                "Safety, hygiene & consultation best practices",
                                                            ].map(
                                                                (
                                                                    benefit,
                                                                    idx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="flex items-start gap-3 p-3 rounded-2xl border border-[#ece8e1] bg-white hover:border-[#d6cfc2] transition-colors duration-200"
                                                                    >
                                                                        <div className="w-9 h-9 rounded-full bg-[#f4efe6] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                            <CheckCircle className="w-4 h-4 text-[#c4a574]" />
                                                                        </div>
                                                                        <p className="text-[#5c564b] text-sm leading-relaxed">
                                                                            {
                                                                                benefit
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Call to Action Box */}
                                                    <div className="rounded-2xl border border-[#ece8e1] bg-[#fcfbf7] p-6">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-10 h-10 rounded-full bg-white border border-[#ece8e1] flex items-center justify-center">
                                                                <ArrowRight className="w-4 h-4 text-[#c4a574]" />
                                                            </div>
                                                            <h5 className="text-lg font-[600] text-[#2f2a1f] head">
                                                                Plan Your
                                                                Enrollment
                                                            </h5>
                                                        </div>
                                                        <p className="text-[#5c564b] text-sm leading-relaxed mb-4">
                                                            Share your goals
                                                            with our counselors
                                                            and get a curriculum
                                                            walkthrough plus
                                                            upcoming batch
                                                            details.
                                                        </p>
                                                        <a
                                                            href="/contact"
                                                            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 border border-[#d6cfc2] rounded-full text-sm font-[500] text-[#2f2a1f] hover:bg-[#f4efe6]"
                                                        >
                                                            Enroll Now
                                                            <ArrowRight className="w-4 h-4" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="bg-[#fdfaf5] py-12 lg:py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            {/* <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-4 font-[500]">
                                COURSE BENEFITS
                            </p> */}
                            <h3 className="text-3xl lg:text-4xl font-[500] text-[#2f3720] head mb-4">
                                What You'll Get
                            </h3>
                            <p className="text-[#7a705e] text-base max-w-2xl mx-auto">
                                Comprehensive training with industry-leading
                                tools, expert mentorship, and lifetime support
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Award,
                                    title: "Industry-Recognized Certificate",
                                    desc: "Get certified credentials recognized across the beauty industry",
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Hands-On Training",
                                    desc: "Practice with real clients under expert supervision",
                                },
                                {
                                    icon: Users,
                                    title: "Expert Mentorship",
                                    desc: "Learn from certified professionals with years of experience",
                                },
                                {
                                    icon: Sparkles,
                                    title: "Lifetime Support",
                                    desc: "Get ongoing guidance and updates even after completion",
                                },
                                {
                                    icon: Users,
                                    title: "Placement Assistance",
                                    desc: "Help connecting with salons and freelance opportunities",
                                },
                                {
                                    icon: BookOpen,
                                    title: "Premium Products",
                                    desc: "Train with professional-grade tools and products",
                                },
                            ].map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl border border-[#ece8e1] bg-white/80 p-5 hover:-translate-y-1 transition-transform duration-200"
                                >
                                    <div className="w-11 h-11 rounded-full border border-[#d6cfc2] flex items-center justify-center mb-4">
                                        <benefit.icon className="w-5 h-5 text-[#c4a574]" />
                                    </div>
                                    <h5 className="font-[600] text-[#2f2a1f] mb-2 text-base head">
                                        {benefit.title}
                                    </h5>
                                    <p className="text-[#5c564b] text-sm leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Our Academy */}
                {/* <AcademyWhyChoose /> */}

                {/* Testimonials */}
                {/* <AcademyTestimonials /> */}

                {/* CTA Section */}
                <section className="py-12 lg:py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="rounded-3xl border border-[#ece8e1] bg-[#f7f4ef] overflow-hidden">
                            <div className="grid gap-0 md:grid-cols-2 items-center">
                                <div className="p-8 lg:p-12 space-y-6">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#b1a591] font-[600]">
                                        Let’s Connect
                                    </p>
                                    <h3 className="text-3xl font-[500] text-[#1f1f1f] head leading-tight">
                                        Ready to start your beauty career with a
                                        calm, guided plan?
                                    </h3>
                                    <p className="text-[#5c564b] leading-relaxed max-w-2xl">
                                        Speak with our academy advisors for a
                                        personalized walkthrough of modules,
                                        mentorship format, and upcoming batches.
                                        Zero pressure—just clarity.
                                    </p>
                                    <div className="flex flex-wrap gap-3 text-sm font-[500]">
                                        <a
                                            href="/contact"
                                            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f1f1f] text-white hover:bg-[#353535]"
                                        >
                                            Book a Call
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                        <a
                                            href="/contact"
                                            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d6cfc2] text-[#2f2a1f] hover:bg-white"
                                        >
                                            Download Prospectus
                                        </a>
                                    </div>
                                </div>
                                <div className="h-full bg-gradient-to-br from-white via-[#fdfaf5] to-[#f0ece3] min-h-[260px] hidden md:block">
                                    <img
                                        src="/assets/images/new/CTA3.webp "
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <SalonContact />
            </div>

            {/* Course Modal */}
            <CourseModal
                isOpen={isModalOpen}
                onClose={closeModal}
                course={selectedCourse}
            />
        </>
    );
};

// Main component wrapper
const AcademyPage = () => {
    const { courses = [], seo } = usePage().props;

    return (
        <Layout>
            <SEOHead seo={seo} />
            <AcademyContent courses={courses} />
        </Layout>
    );
};

export default AcademyPage;
