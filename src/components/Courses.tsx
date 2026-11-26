import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, ArrowRight, Eye, X, BookOpen } from 'lucide-react';
import { COURSES, Course } from '../data/courses';

interface CoursesProps {
  whatsappNumber: string;
}

export const Courses: React.FC<CoursesProps> = ({ whatsappNumber }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleEnroll = (course: Course) => {
    const text = encodeURIComponent(
      `Habari, ningependa kujiunga na online kozi ya ${course.title} yenye gharama ya ${course.formattedPrice}. Naomba maelezo zaidi.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#F5F6F8] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-white border border-[#E5E7EB] px-3 py-1 rounded text-xs font-semibold text-[#172554]">
            <BookOpen className="w-4 h-4 text-[#2563EB]" />
            <span>ONLINE KOZI ZA VITENDO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151923] tracking-tight">
            chagua kozi, tengeneza pesa
          </h2>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#667085]" />
            <input
              type="text"
              placeholder="Tafuta kozi au ujuzi (mf. Excel, Python, Hacking, AI Video)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E5E7EB] rounded-md pl-12 pr-4 py-3 text-sm text-[#151923] placeholder-[#667085] focus:outline-none focus:border-[#172554]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#172554] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#667085] hover:text-[#151923]'
              }`}
            >
              Kozi Zote ({COURSES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'ai'
                  ? 'bg-[#172554] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#667085] hover:text-[#151923]'
              }`}
            >
              AI & Video Creation
            </button>
            <button
              onClick={() => setSelectedCategory('computer')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'computer'
                  ? 'bg-[#172554] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#667085] hover:text-[#151923]'
              }`}
            >
              Computer Fundamentals
            </button>
            <button
              onClick={() => setSelectedCategory('programming')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'programming'
                  ? 'bg-[#172554] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#667085] hover:text-[#151923]'
              }`}
            >
              Programming & Security
            </button>
            <button
              onClick={() => setSelectedCategory('digital')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'digital'
                  ? 'bg-[#172554] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#667085] hover:text-[#151923]'
              }`}
            >
              Digital Skills
            </button>
          </div>

        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-[#E5E7EB]">
            <p className="text-[#667085] text-base">Hakuna kozi zilizopatikana kwa utafutaji huu.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Course Image */}
                  <div className="h-48 w-full overflow-hidden bg-[#F5F6F8] relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/90 text-[#172554] border border-[#E5E7EB] shadow-xs">
                        {course.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-medium text-[#15803D] bg-green-50/90 px-2 py-0.5 rounded border border-green-200 shadow-xs">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <div className="p-6 pb-2">
                    <h3 className="text-lg font-bold text-[#151923]">{course.title}</h3>
                  </div>
                </div>

                {/* Bottom section: Price right above Jiunge na kozi button, and Two buttons: Angalia and Jiunge na kozi */}
                <div className="p-6 pt-4 border-t border-[#E5E7EB] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#667085]">Gharama ya Kozi:</span>
                    <span className="text-lg font-bold text-[#172554]">{course.formattedPrice}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveCourseModal(course)}
                      className="inline-flex items-center justify-center bg-white hover:bg-[#F5F6F8] text-[#151923] border border-[#E5E7EB] text-sm font-medium py-2.5 px-3 rounded-md transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-1.5 text-[#667085]" />
                      Angalia
                    </button>
                    <button
                      onClick={() => handleEnroll(course)}
                      className="inline-flex items-center justify-center bg-[#172554] hover:bg-[#1e293b] text-white text-sm font-medium py-2.5 px-3 rounded-md transition-colors"
                    >
                      Jiunge na kozi
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Course Details Modal (Angalia) */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 border border-[#E5E7EB] shadow-xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#F5F6F8] text-[#172554] border border-[#E5E7EB]">
                  {activeCourseModal.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-[#151923] mt-2">{activeCourseModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                className="p-2 text-[#667085] hover:text-[#151923]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#667085]">
              <div className="h-48 w-full rounded overflow-hidden">
                <img src={activeCourseModal.image} alt={activeCourseModal.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center justify-between bg-[#F5F6F8] p-3 rounded border border-[#E5E7EB]">
                <div>
                  <span className="block text-xs text-[#667085]">Muda wa Mafunzo</span>
                  <span className="font-semibold text-[#151923]">{activeCourseModal.duration}</span>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-[#667085]">Bei ya Kozi</span>
                  <span className="font-bold text-lg text-[#172554]">{activeCourseModal.formattedPrice}</span>
                </div>
              </div>

              <p className="text-sm text-[#151923] leading-relaxed">{activeCourseModal.description}</p>

              <div>
                <h4 className="font-bold text-[#151923] mb-2">Maelezo ya Kina:</h4>
                <ul className="space-y-2">
                  {activeCourseModal.detailedDescription.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#15803D] mr-2 mt-0.5 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#151923] mb-2">Ujuzi Utakaoupata:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeCourseModal.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F5F6F8] text-[#151923] text-xs px-2.5 py-1 rounded border border-[#E5E7EB]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-end space-x-3">
              <button
                onClick={() => setActiveCourseModal(null)}
                className="px-4 py-2 border border-[#E5E7EB] rounded text-sm text-[#667085] hover:text-[#151923]"
              >
                Funga
              </button>
              <button
                onClick={() => {
                  const course = activeCourseModal;
                  setActiveCourseModal(null);
                  handleEnroll(course);
                }}
                className="inline-flex items-center px-5 py-2.5 bg-[#172554] text-white rounded text-sm font-medium hover:bg-[#1e293b]"
              >
                Jiunge na kozi sasa
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
