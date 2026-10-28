import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  dryingContent,
  evaporationContent,
  filtrationContent,
  millingContent,
  mixingContent,
  coatingContent,
} from '../data/industryContent';

const chapters = [
  {
    id: 'milling',
    title: 'Milling',
    icon: 'blender',
    gradient: 'from-cyan-600 to-cyan-400',
    description: 'Size reduction of solids using mills, crushers, and grinders for uniformity and improved dissolution.',
    topics: ['Hammer mill', 'Ball mill', 'Fluid energy mill', 'Edge runner mill', 'End runner mill', 'Cutting mill']
  },
  {
    id: 'mixing',
    title: 'Mixing & Blending',
    icon: 'sync_alt',
    gradient: 'from-sky-600 to-sky-400',
    description: 'Mechanical blending of powders, granules, and liquids to achieve homogeneous formulations.',
    topics: ['Turbine mixer', 'Propeller mixer', 'Sigma blade mixer', 'Planetary mixer', 'Ribbon blender', 'V-cone blender']
  },
  {
    id: 'drying',
    title: 'Drying',
    icon: 'heat',
    gradient: 'from-orange-600 to-orange-400',
    description: 'Removal of moisture from pharmaceutical materials using thermal and evaporative techniques.',
    topics: ['Tray dryer', 'Fluidized bed dryer', 'Spray dryer', 'Freeze dryer', 'Vacuum dryer', 'Microwave dryer']
  },
  {
    id: 'evaporation',
    title: 'Evaporation',
    icon: 'water_drop',
    gradient: 'from-blue-600 to-blue-400',
    description: 'Concentration of solutions by vaporizing solvent, essential for extracts and liquid preparations.',
    topics: ['Evaporating pan', 'Climbing film evaporator', 'Falling film evaporator', 'Wiped film evaporator', 'Multiple effect evaporator']
  },
  {
    id: 'filtration',
    title: 'Filtration',
    icon: 'filter_alt',
    gradient: 'from-teal-600 to-teal-400',
    description: 'Separation of solids from liquids using porous media for clarification and sterilization.',
    topics: ['Filter press', 'Membrane filter', 'HEPA filter', 'Sintered glass filter', 'Buchner funnel', 'Seitz filter']
  },
  {
    id: 'crystallization',
    title: 'Crystallization',
    icon: 'diamond',
    gradient: 'from-purple-600 to-purple-400',
    description: 'Formation of pure crystalline solids from solutions for API purification and polymorph control.',
    topics: ['Batch crystallizer', 'Continuous crystallizer', 'Agitated crystallizer', 'Swenson-Walker crystallizer', 'Vacuum crystallizer']
  },
  {
    id: 'extraction',
    title: 'Extraction',
    icon: 'science',
    gradient: 'from-emerald-600 to-emerald-400',
    description: 'Separation of active constituents from plant or animal tissues using solvents and percolation.',
    topics: ['Maceration', 'Percolation', 'Soxhlet extraction', 'Continuous hot extraction', 'Supercritical fluid extraction']
  },
  {
    id: 'distillation',
    title: 'Distillation',
    icon: 'thermostat',
    gradient: 'from-red-600 to-red-400',
    description: 'Separation of liquid mixtures based on boiling point differences for purification and recovery.',
    topics: ['Simple distillation', 'Fractional distillation', 'Steam distillation', 'Molecular distillation', 'Azeotropic distillation']
  },
  {
    id: 'comminution',
    title: 'Comminution',
    icon: 'handyman',
    gradient: 'from-stone-600 to-stone-400',
    description: 'Mechanical breakdown of solids into smaller particles through cutting, grinding, and pulverizing.',
    topics: ['Cutter mill', 'Roller mill', 'Disc mill', 'Colloid mill', 'Ultrasonic disintegrator']
  },
  {
    id: 'clarification',
    title: 'Clarification & Sedimentation',
    icon: 'water_ph',
    gradient: 'from-indigo-600 to-indigo-400',
    description: 'Removal of fine suspended particles from liquids through settling and centrifugal force.',
    topics: ['Sedimentation tank', 'Clarifier', 'Hydrocyclone', 'Centrifugal clarifier', 'Coagulation process']
  },
  {
    id: 'tablet-compression',
    title: 'Tablet Compression',
    icon: 'brick',
    gradient: 'from-amber-600 to-amber-400',
    description: 'Formation of compressed tablets using punches, dies, and compression machines.',
    topics: ['Single punch press', 'Rotary tablet press', 'Multi-layer press', 'Dry granulation compression', 'Direct compression']
  },
  {
    id: 'coating',
    title: 'Coating',
    icon: 'layers',
    gradient: 'from-pink-600 to-pink-400',
    description: 'Application of coating materials to solid dosage forms for taste masking, protection, and controlled release.',
    topics: ['Pan coating', 'Fluidized bed coating', 'Dip coating', 'Compression coating', 'Enteric coating']
  }
];

const contentMap = {
  drying: dryingContent,
  evaporation: evaporationContent,
  filtration: filtrationContent,
  milling: millingContent,
  mixing: mixingContent,
  coating: coatingContent,
};

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getHeadingLevel(line) {
  if (!line || line.length < 3) return null;
  if (line.length > 90 && !line.startsWith('#')) return null;
  if (/^####\s/.test(line)) return 4;
  if (/^###\s/.test(line)) return 3;
  if (/^##\s/.test(line)) return 2;
  if (/^#\s/.test(line)) return 1;
  if (/^\d+\.\d+\.\d+\s/.test(line)) return 3;
  if (/^\d+\.\d+\s/.test(line)) return 2;
  if (/^\d+\s+[A-Z]/.test(line)) return 1;
  if (/^\d+\.\s+[A-Z]/.test(line)) return 1;
  if (/^[IVXL]+\.\s+[A-Z]/.test(line)) return 1;
  if (/^(Introduction|Principle|Classification|Types?|Definition|Overview|Properties|Applications|Advantages|Disadvantages|Instrumentation|Conclusion|References?|General|Biological|Chemical|Physical|Functions)/i.test(line) && line.length < 50) return 2;
  if (/^(Preparation|Extraction|Isolation|Identification|Uses|Sources|Occurrence|Production|Methods?|Cultivation|Collection|Drying|Storage)/i.test(line) && line.length < 50) return 2;
  if (/^[A-Z][A-Z\s\/\-]{3,}$/.test(line) && line.length < 50) return 1;
  return null;
}

function isBullet(line) {
  return /^[o\-\*•]\s/.test(line) || /^[=\u2022]\s/.test(line);
}

function isSubBullet(line) {
  return /^[=\u2022]\s/.test(line);
}

function getSectionId(heading) {
  const clean = heading.replace(/^#+\s*/, '').replace(/^\d+\.?\s*/, '').replace(/^\d+\.\d+\.?\s*/, '');
  return slugify(clean);
}

function stripHeadingPrefix(text) {
  return text.replace(/^#+\s*/, '').replace(/^\d+\.?\s*/, '').replace(/^\d+\.\d+\.?\s*/, '');
}

function cleanDisplayText(text) {
  return text.replace(/^#+\s*/, '').replace(/^\d+\.?\s*/, '').replace(/^\d+\.\d+\.?\s*/, '').replace(/\*+/g, '');
}

function renderInline(text) {
  const parts = text.split(/(\*{1,2}[^*]+\*{1,2})/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*{1,2}(.+)\*{1,2}$/);
    if (m && part.length > 2) {
      return <strong key={i}>{m[1].replace(/\*/g, '')}</strong>;
    }
    return part.replace(/\*/g, '');
  });
}

function buildTocTree(blocks) {
  const tree = [];
  let h1 = null, h2 = null, h3 = null;
  for (const block of blocks) {
    if (block.type === 'h1') {
      h1 = { id: block.id, text: block.text, children: [] };
      h2 = null; h3 = null;
      tree.push(h1);
    } else if (block.type === 'h2' && h1) {
      h2 = { id: block.id, text: block.text, children: [] };
      h3 = null;
      h1.children.push(h2);
    } else if (block.type === 'h3' && h2) {
      h3 = { id: block.id, text: block.text, children: [] };
      h2.children.push(h3);
    } else if (block.type === 'h4' && h3) {
      h3.children.push({ id: block.id, text: block.text });
    }
  }
  return tree;
}

const tocStyles = [
  { size: 'text-sm sm:text-body-md', color: 'text-primary font-medium', pad: 'py-1.5 px-2 sm:px-3' },
  { size: 'text-xs sm:text-sm', color: 'text-primary', pad: 'py-1 px-2 sm:px-3' },
  { size: 'text-[11px] sm:text-xs', color: 'text-on-surface-variant', pad: 'py-0.5 px-2 sm:px-3' },
  { size: 'text-[10px] sm:text-[11px]', color: 'text-on-surface-variant/70', pad: 'py-0.5 px-2 sm:px-3' },
];

function renderTocNode(node, depth, expandedSections, navigateAndToggle, navigateOnly, closeMobileToc) {
  if (depth >= tocStyles.length) depth = tocStyles.length - 1;
  const st = tocStyles[depth];
  const isOpen = expandedSections[node.id];
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div key={node.id}>
      <button
        onClick={() => {
          if (hasChildren) navigateAndToggle(node.id);
          else { navigateOnly(node.id); closeMobileToc(); }
        }}
        className={`flex items-center justify-between w-full text-left ${st.pad} rounded-lg hover:bg-surface-container-high transition-colors ${st.size} ${st.color}`}
      >
        <span className="flex-1 min-w-0">{cleanDisplayText(node.text)}</span>
        {hasChildren && (
          <span className="material-symbols-outlined text-sm text-on-surface-variant transition-transform flex-shrink-0"
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            chevron_right
          </span>
        )}
      </button>
      {isOpen && hasChildren && (
        <div className="ml-3 border-l border-white/10 pl-2 space-y-0.5 mt-0.5 mb-1">
          {node.children.map(child => renderTocNode(child, depth + 1, expandedSections, navigateAndToggle, navigateOnly, closeMobileToc))}
        </div>
      )}
    </div>
  );
}

const IndustryPage = () => {
  const { chapterId } = useParams();
  const hiddenScrollbar = { scrollbarWidth: 'none', msOverflowStyle: 'none' };
  const [expandedSections, setExpandedSections] = useState({});
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const chapterMeta = useMemo(() => chapters.find(c => c.id === chapterId), [chapterId]);
  const content = chapterId ? contentMap[chapterId] : null;

  const contentBlocks = useMemo(() => {
    if (!content) return [];
    const blocks = [];
    let currentH1 = null, currentH2 = null, currentH3 = null, currentH4 = null;

    for (const line of content) {
      const hLevel = getHeadingLevel(line);
      if (hLevel === 1) {
        currentH1 = { id: getSectionId(line), text: line, items: [] };
        currentH2 = null; currentH3 = null; currentH4 = null;
        blocks.push({ type: 'h1', id: currentH1.id, text: line });
      } else if (hLevel === 2) {
        currentH2 = { id: getSectionId(line), text: line, items: [] };
        currentH3 = null; currentH4 = null;
        blocks.push({ type: 'h2', id: currentH2.id, text: line });
      } else if (hLevel === 3) {
        currentH3 = { id: getSectionId(line), text: line, items: [] };
        currentH4 = null;
        blocks.push({ type: 'h3', id: currentH3.id, text: line });
      } else if (hLevel === 4) {
        currentH4 = { id: getSectionId(line), text: line, items: [] };
        blocks.push({ type: 'h4', id: currentH4.id, text: line });
      } else if (isSubBullet(line)) {
        blocks.push({ type: 'sub-bullet', text: line.replace(/^[=\u2022]\s*/, '').trim(), h3: currentH3 });
      } else if (isBullet(line)) {
        blocks.push({ type: 'bullet', text: line.replace(/^[o\-\*•]\s*/, '').trim(), h3: currentH3 });
      } else {
        blocks.push({ type: 'text', text: line, h1: currentH1, h2: currentH2, h3: currentH3 });
      }
    }
    return blocks;
  }, [content]);

  const tocTree = useMemo(() => buildTocTree(contentBlocks), [contentBlocks]);
  const headingCount = useMemo(() => contentBlocks.filter(b => b.type.startsWith('h')).length, [contentBlocks]);

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigateAndToggle = (id) => {
    scrollToSection(id);
    toggleSection(id);
  };

  const navigateOnly = (id) => {
    scrollToSection(id);
  };

  const closeMobileToc = () => setMobileTocOpen(false);

  function renderBlock(block, key) {
    switch (block.type) {
      case 'h1':
        return (
          <h1 key={key} id={block.id} className="text-headline-lg sm:text-headline-xl text-primary mt-8 sm:mt-12 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/10 scroll-mt-20">
            {renderInline(stripHeadingPrefix(block.text))}
          </h1>
        );
      case 'h2':
        return (
          <h2 key={key} id={block.id} className="text-headline sm:text-headline-lg text-primary mt-6 sm:mt-10 mb-2 sm:mb-3 pb-2 border-b border-white/10 scroll-mt-20">
            {renderInline(stripHeadingPrefix(block.text))}
          </h2>
        );
      case 'h3':
        return (
          <h3 key={key} id={block.id} className="text-body-lg sm:text-headline text-secondary mt-4 sm:mt-6 mb-1 sm:mb-2 scroll-mt-20">
            {renderInline(stripHeadingPrefix(block.text))}
          </h3>
        );
      case 'h4':
        return (
          <h4 key={key} id={block.id} className="text-body-md sm:text-body-lg text-on-surface-variant mt-3 sm:mt-4 mb-1 scroll-mt-20">
            {renderInline(stripHeadingPrefix(block.text))}
          </h4>
        );
      case 'bullet':
        return (
          <div key={key} className="flex items-start gap-2 sm:gap-3 ml-2 sm:ml-4">
            <span className="w-1 h-1.5 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary/40 mt-1.5 sm:mt-2.5 flex-shrink-0" />
            <p className="text-body-sm sm:text-body-md text-on-surface leading-relaxed">{renderInline(block.text)}</p>
          </div>
        );
      case 'sub-bullet':
        return (
          <div key={key} className="flex items-start gap-2 sm:gap-3 ml-4 sm:ml-8">
            <span className="w-0.5 h-1 sm:w-1 sm:h-1 rounded-full bg-on-surface-variant/30 mt-1.5 sm:mt-2.5 flex-shrink-0" />
            <p className="text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">{renderInline(block.text)}</p>
          </div>
        );
      default:
        return (
          <p key={key} className="text-body-sm sm:text-body-md text-on-surface leading-relaxed">
            {renderInline(block.text)}
          </p>
        );
    }
  }

  // Grid view (no chapterId)
  if (!chapterId) {
    return (
      <div className="min-h-screen bg-surface pt-4 pb-24">
        <div className="mb-10">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Core unit operations and manufacturing processes used in pharmaceutical engineering and production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map(ch => (
            <Link
              key={ch.id}
              to={`/4th-professional/industrial-pharmacy/${ch.id}`}
              className="block bg-surface-container-low border border-white/5 rounded-xl p-6 hover:bg-surface-container-high transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${ch.gradient} text-white`}>
                  <span className="material-symbols-outlined">{ch.icon}</span>
                </div>
                <span className="font-label-caps text-[11px] text-on-surface-variant bg-surface-variant px-2 py-1 rounded">{ch.topics.length} topics</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{ch.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">{ch.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {ch.topics.map(t => (
                  <span key={t} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Chapter not found
  if (!chapterMeta || !content) {
    return (
      <div className="min-h-screen bg-surface pt-8 pb-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-display text-primary mb-4">Content Not Available</h1>
          <p className="text-body-md text-on-surface-variant mb-6">This chapter is under development.</p>
          <Link to="/4th-professional/industrial-pharmacy" className="text-secondary hover:text-primary transition-colors font-body-md text-body-md">
            Back to Industry
          </Link>
        </div>
      </div>
    );
  }

  // Chapter content view
  const tocContent = (
    <div className="space-y-0.5">
      {tocTree.map(node => renderTocNode(node, 0, expandedSections, navigateAndToggle, navigateOnly, closeMobileToc))}
    </div>
  );

  return (
    <div className="min-h-screen bg-surface pt-6 pb-32 px-4">
      <style>{`.toc-nav::-webkit-scrollbar { display: none; }`}</style>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-xs sm:text-sm flex-wrap">
          <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-base sm:text-lg">home</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <Link to="/4th-professional/industrial-pharmacy" className="text-on-surface-variant hover:text-primary transition-colors">Industry</Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary truncate max-w-[120px] sm:max-w-none">{chapterMeta.title}</span>
        </div>

        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${chapterMeta.gradient} text-white flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-xl sm:text-3xl">{chapterMeta.icon}</span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
                  <span className="font-label-caps text-[10px] sm:text-xs text-on-surface-variant">{content.length} items</span>
                </div>
                <h1 className="text-display-mobile sm:text-display text-primary break-words">{chapterMeta.title}</h1>
              </div>
            </div>

            <div className="space-y-4 max-w-none">
              {contentBlocks.map((block, lineIdx) => renderBlock(block, lineIdx))}
            </div>

            <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 text-center">
              <Link
                to="/4th-professional/industrial-pharmacy"
                className="inline-flex items-center gap-2 text-body-sm sm:text-body-md text-secondary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">list</span>
                Back to all chapters
              </Link>
            </div>
          </div>

          {headingCount > 3 && (
            <aside className="hidden xl:block w-64 flex-shrink-0">
              <div className="sticky top-24 overflow-y-auto toc-nav" style={{ ...hiddenScrollbar, maxHeight: 'calc(100vh - 8rem)' }}>
                <h4 className="font-label-caps text-xs text-on-surface-variant mb-3 uppercase tracking-wider">On this page</h4>
                {tocContent}
                <Link
to="/4th-professional/industrial-pharmacy"
                  className="flex items-center gap-2 mt-6 text-sm text-secondary hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  All chapters
                </Link>
              </div>
            </aside>
          )}
          {headingCount > 3 && (
            <>
              <button
                onClick={() => setMobileTocOpen(true)}
                className="fixed xl:hidden bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary text-surface shadow-lg flex items-center justify-center hover:bg-secondary/90 transition-all active:scale-95"
                aria-label="On this page"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">list</span>
              </button>
              {mobileTocOpen && (
                <div className="fixed inset-0 z-50 xl:hidden">
                  <div className="absolute inset-0 bg-black/50" onClick={closeMobileToc} />
                  <div className="absolute bottom-0 left-0 right-0 max-h-[75vh] sm:max-h-[70vh] bg-surface-container-lowest rounded-t-2xl flex flex-col">
                    <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-white/10">
                      <h4 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">On this page</h4>
                      <button onClick={closeMobileToc} className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                    <div className="overflow-y-auto px-2 sm:px-3 py-2 sm:py-3 toc-nav" style={{ ...hiddenScrollbar }}>
                      {tocContent}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
