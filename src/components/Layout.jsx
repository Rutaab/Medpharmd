import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';
import { useSystem } from '../context/SystemContext';
import { syllabus } from '../data/syllabusData';

const Dropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm whitespace-nowrap"
      >
        {label}
        <span className="material-symbols-outlined text-xs transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'none' }}>expand_more</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-surface-container-high border border-outline-variant rounded-xl shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 font-body-md text-body-md text-on-surface hover:bg-surface-container-higher hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ open, onClose, sections }) => {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  return (
    <div className={`fixed inset-0 z-50 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`absolute top-16 right-0 w-80 max-w-[90vw] bg-surface-container border border-outline-variant rounded-bl-2xl shadow-2xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 space-y-3">
          {sections.map((sec) => (
            <div key={sec.label}>
              <button
                onClick={() => setExpanded(expanded === sec.label ? null : sec.label)}
                className="flex items-center justify-between w-full text-left py-2.5 px-3 rounded-lg hover:bg-surface-container-higher transition-colors text-on-surface font-body-md text-body-md"
              >
                {sec.label}
                <span className="material-symbols-outlined text-sm transition-transform" style={{ transform: expanded === sec.label ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </button>
              {expanded === sec.label && (
                <div className="ml-2 space-y-1">
                  {sec.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className="block py-2 px-4 rounded-lg hover:bg-surface-container-higher transition-colors text-on-surface-variant font-body-sm text-body-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { system, toggleSystem } = useSystem();
  
  const showBack = location.pathname !== '/';

  const yearNavSections = useMemo(() => {
    const years = ['1st-professional', '2nd-professional', '3rd-professional', '4th-professional', '5th-professional'];
    return years.map(yearId => {
      const year = syllabus[yearId];
      const items = year.subjects.map(s => ({
        label: s.title,
        path: `/${yearId}/${s.id}`,
      }));
      if (yearId === '4th-professional') {
        items.splice(1, 0, { label: 'Pharmaceutics-V (Clinical Pharmacy-I)', path: '/4th-professional/clinical-pharmacy-i' });
        items.splice(2, 0, { label: 'Pharmaceutics-VI (Industrial Pharmacy)', path: '/4th-professional/industrial-pharmacy' });
      }
      return { label: year.title, items };
    });
  }, []);

  const semesterNavSections = useMemo(() => {
    const semesters = Array.from({ length: 10 }, (_, i) => `semester-${i + 1}`);
    return semesters.map(semId => {
      const sem = syllabus[semId];
      return {
        label: sem.title,
        items: sem.subjects.map(s => ({
          label: s.title,
          path: `/${semId}/${s.id}`,
        })),
      };
    });
  }, []);

  const navSections = system === 'year' ? yearNavSections : semesterNavSections;

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface-container border-b border-white/10">
        <div className="flex items-center px-4 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            {showBack && (
              <button 
                onClick={() => navigate(-1)}
                className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-100"
              >
                arrow_back
              </button>
            )}
            <Link to="/" className="font-headline-md text-headline-md text-primary whitespace-nowrap hover:text-secondary transition-colors">MedPharma</Link>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden md:flex items-center gap-3 flex-wrap justify-center">
              {navSections.map((sec) => (
                <Dropdown key={sec.label + system} label={sec.label} items={sec.items} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleSystem}
              className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-100"
              title={system === 'year' ? 'Switch to Semester System' : 'Switch to Yearly System'}
            >
              {system === 'year' ? 'calendar_view_week' : 'calendar_month'}
            </button>
            <button onClick={() => setSearchOpen(true)} className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-100">
              search
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-100">
              menu
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        {children}
      </main>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} sections={navSections} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  );
};

export default Layout;
