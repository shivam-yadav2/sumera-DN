import React, { useState } from "react";
import { X, Clock, Award, BookOpen, CheckCircle, Phone, ChevronDown } from "lucide-react";
import { usePopup } from "../../contexts/PopupContext";

const CourseModal = ({ isOpen, onClose, course }) => {
    const { openBookingPopup } = usePopup();
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const handleEnroll = () => {
        onClose();
        openBookingPopup();
    };

    if (!isOpen || !course) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <div 
                        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp rounded-3xl border border-[#e4ded2]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-[#12110f] hover:bg-[#a0815c] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Content */}
                        <div className="p-8 lg:p-12">
                            {/* Course Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl lg:text-4xl font-[500] text-[#2f3720] head mb-4">
                                    {course.title}
                                </h2>
                                
                                {course.description && (
                                    <p className="text-[#7a705e] text-base leading-relaxed mb-6">
                                        {course.description}
                                    </p>
                                )}

                                {/* Course Detail Section - Rich Content */}
                                {course.course_detail && (
                                    <div className="mb-6 p-6 bg-[#f8f6f2] rounded-2xl border border-[#e4ded2]">
                                        <div className="flex items-center gap-2 mb-4">
                                            <BookOpen className="w-5 h-5 text-[#a0815c]" />
                                            <h3 className="text-xl font-[600] text-[#2f3720] head">
                                                Course Details
                                            </h3>
                                        </div>
                                        <div 
                                            className="text-[#5c564b] leading-relaxed course-detail-content"
                                            dangerouslySetInnerHTML={{ __html: course.course_detail }}
                                        />
                                    </div>
                                )}

                                {/* Course Info Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    {course.duration && (
                                        <div className="bg-[#f8f6f2] p-4 rounded-2xl border border-[#e4ded2]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Clock className="w-5 h-5 text-[#a0815c]" />
                                                <span className="text-xs text-[#7a705e] font-[600]">Duration</span>
                                            </div>
                                            <p className="font-[700] text-[#2f3720]">{course.duration}</p>
                                        </div>
                                    )}
                                    {course.details && course.details.length > 0 && (
                                        <div className="bg-[#f8f6f2] p-4 rounded-2xl border border-[#e4ded2]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <BookOpen className="w-5 h-5 text-[#a0815c]" />
                                                <span className="text-xs text-[#7a705e] font-[600]">Modules</span>
                                            </div>
                                            <p className="font-[700] text-[#2f3720]">{course.details.length}</p>
                                        </div>
                                    )}
                                    <div className="bg-[#f8f6f2] p-4 rounded-2xl border border-[#e4ded2]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Award className="w-5 h-5 text-[#a0815c]" />
                                            <span className="text-xs text-[#7a705e] font-[600]">Certificate</span>
                                        </div>
                                        <p className="font-[700] text-[#2f3720]">Included</p>
                                    </div>
                                </div>

                                {/* Enroll Button */}
                                <button
                                    onClick={handleEnroll}
                                    className="btn-interactive w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3c4c24] to-[#2f3720] hover:from-[#2f3720] hover:to-[#3c4c24] text-white font-[600] rounded-full shadow-lg"
                                >
                                    <Phone className="w-5 h-5" />
                                    Enroll in This Course
                                </button>
                            </div>

                            {/* Course Curriculum - Accordion */}
                            {course.details && course.details.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e4ded2]">
                                        <div className="w-10 h-10 bg-[#354a2f]  rounded-full flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-[500] text-[#2f3720] head">
                                            Course Curriculum
                                        </h3>
                                    </div>

                                    <div className="space-y-3">
                                        {course.details.map((detail, index) => (
                                            <div 
                                                key={detail.id}
                                                className="bg-white rounded-2xl border border-[#e4ded2] hover:border-[#a0815c] shadow-sm hover:shadow-md transition-all duration-300"
                                            >
                                                <button
                                                    onClick={() => toggleAccordion(index)}
                                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f8f6f2]/50 transition-colors duration-200"
                                                >
                                                    <div className="flex items-start gap-4 flex-1">
                                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                                            openAccordion === index 
                                                                ? "bg-[#354a2f]  text-white" 
                                                                : "bg-[#f8f6f2] text-[#2f3720]"
                                                        }`}>
                                                            <span className="font-[700]">{index + 1}</span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="font-[600] text-lg text-[#2f3720] head mb-2">
                                                                {detail.heading}
                                                            </h4>
                                                            <div className="flex flex-wrap gap-3 text-sm text-[#7a705e]">
                                                                {detail.duration && (
                                                                    <span className="flex items-center gap-1">
                                                                        <Clock className="w-4 h-4" />
                                                                        {detail.duration}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ChevronDown 
                                                        className={`w-6 h-6 text-[#a0815c] transition-transform duration-300 flex-shrink-0 ${
                                                            openAccordion === index ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>
                                                
                                                {/* Accordion Content */}
                                                <div 
                                                    className={`overflow-hidden transition-all duration-300 ${
                                                        openAccordion === index ? 'max-h-[2000px]' : 'max-h-0'
                                                    }`}
                                                >
                                                    <div className="px-5 pb-5 pt-0 bg-[#fafafa] border-t border-[#e4ded2]">
                                                        {detail.description && (
                                                            <div 
                                                                className="text-[#7a705e] leading-relaxed prose prose-stone max-w-none mb-4"
                                                                dangerouslySetInnerHTML={{ __html: detail.description }}
                                                            />
                                                        )}
                                                        
                                                        <div className="flex items-center justify-between pt-4 border-t border-[#e4ded2]">
                                                            <div className="flex items-center gap-2 text-[#7a705e]">
                                                                <CheckCircle className="w-4 h-4 text-[#a0815c]" />
                                                                <span className="text-sm">Certificate upon completion</span>
                                                            </div>
                                                            <button
                                                                onClick={handleEnroll}
                                                                className="btn-interactive inline-flex items-center gap-2 px-5 py-2 bg-[#354a2f]  hover:bg-[#2f3720] text-white text-sm font-[500] rounded-full"
                                                            >
                                                                <Phone className="w-4 h-4" />
                                                                Enroll Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
                .course-detail-content h1 {
                    font-size: 1.75rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    color: #1f1f1f;
                }
                .course-detail-content h2 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                    color: #2f2a1f;
                }
                .course-detail-content h3 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-top: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #3d3525;
                }
                .course-detail-content p {
                    margin-bottom: 0.75rem;
                    line-height: 1.7;
                }
                .course-detail-content ul,
                .course-detail-content ol {
                    margin: 0.5rem 0 1rem 1.2rem;
                    padding-left: 1rem;
                }
                .course-detail-content li {
                    margin-bottom: 0.35rem;
                }
                .course-detail-content strong {
                    color: #1f1f1f;
                }
            `}</style>
        </>
    );
};

export default CourseModal;

