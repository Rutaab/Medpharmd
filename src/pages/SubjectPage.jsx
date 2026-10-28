import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { syllabus } from '../data/syllabusData';

const chapterIcons = [
  'stacks', 'book', 'article', 'description', 'note_stack',
  'list_alt', 'menu_book', 'library_books', 'bookmark', 'sticky_note_2',
  'content_paste', 'assignment', 'folder', 'topic', 'subscriptions',
  'book_2', 'news', 'notes', 'drafts', 'document'
];

const SubjectPage = () => {
  const shortTag = (t) => {
    let s = t.split(',')[0].split(':')[0].trim();
    return s.length > 28 ? s.substring(0, s.lastIndexOf(' ', 25)) + '…' : s;
  };
  const { yearId, subjectId } = useParams();
  const year = syllabus[yearId];
  const subject = year?.subjects.find(s => s.id === subjectId);

  if (!year || !subject) {
    return (
      <div className="min-h-screen bg-surface pt-8 pb-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-display text-primary mb-4">Subject Not Found</h1>
          <Link to={`/${yearId}`} className="text-secondary hover:text-primary transition-colors font-body-md text-body-md">Back to {year?.title || 'Year'}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-6 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-sm flex-wrap">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-base sm:text-lg">home</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <Link to={`/${yearId}`} className="text-on-surface-variant hover:text-primary transition-colors truncate max-w-[120px] sm:max-w-none">{year.title}</Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary truncate max-w-[120px] sm:max-w-none">{subject.title}</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${subject.color} text-white`}>
            <span className="material-symbols-outlined text-2xl sm:text-3xl">{subject.icon}</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-display-mobile sm:text-display text-primary mb-1 break-words">{subject.title}</h1>
            <p className="text-body-sm sm:text-body-md text-on-surface-variant">{subject.description}</p>
            <p className="mt-1">
              <span className="font-label-caps text-[10px] sm:text-xs text-secondary bg-secondary/10 px-1.5 sm:px-2 py-0.5 rounded">{subject.chapters.length} chapters</span>
            </p>
          </div>
        </div>

        {/* Chapter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subject.chapters.map((chapter, idx) => (
            <Link
              key={chapter.title}
              to={`/${yearId}/${subjectId}/${chapter.id ?? idx}`}
              className="bg-surface-container-low border border-white/5 rounded-xl p-4 sm:p-5 hover:bg-surface-container-high hover:border-secondary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${subject.color} text-white flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-lg sm:text-xl">{chapterIcons[idx % chapterIcons.length]}</span>
                </div>
                <span className="font-label-caps text-[10px] sm:text-[11px] text-secondary bg-secondary/10 px-1.5 sm:px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] sm:text-[14px]">topic</span>
                  {chapter.topics.length}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant bg-surface-variant px-1.5 py-0.5 rounded">CH {idx + 1}</span>
              </div>
              <h3 className="text-body-lg sm:text-headline-md text-primary group-hover:text-secondary transition-colors leading-snug">
                {chapter.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {chapter.topics.map(t => (
                  <span key={t} className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{shortTag(t)}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 mt-3 text-on-surface-variant group-hover:text-secondary transition-colors">
                <span className="text-body-sm sm:text-body-md">Read chapter</span>
                <span className="material-symbols-outlined text-base sm:text-lg group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
