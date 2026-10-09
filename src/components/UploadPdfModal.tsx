import React, { useState, useEffect, useRef } from 'react';
import {
  BrandPdfRecord,
  getAllBrandPdfs,
  saveBrandPdf,
  deleteBrandPdf,
  openBrandPdfInNewTab,
  downloadBrandPdf,
  formatFileSize,
} from '../utils/brandPdfStorage';

interface UploadPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBrand?: 'cocona' | 'seth-dhanraj' | 'sharpix' | null;
  onViewFallbackDossier?: (brandId: string) => void;
}

interface BrandConfig {
  id: 'cocona' | 'seth-dhanraj' | 'sharpix';
  name: string;
  category: string;
  themeColor: string;
  spec: string;
  description: string;
  sampleFileName: string;
}

const BRANDS: BrandConfig[] = [
  {
    id: 'cocona',
    name: 'Cocona',
    category: 'Beverage Identity & 3D Packaging',
    themeColor: '#0B3C35',
    spec: 'Matte Frosted Glass System',
    description: 'Cold-pressed tender coconut water brand identity & bottle packaging dossier.',
    sampleFileName: 'Cocona_Identity_Packaging_Dossier_2025.pdf',
  },
  {
    id: 'seth-dhanraj',
    name: 'Seth Dhanraj',
    category: 'Luxury Heritage & Royal Identity',
    themeColor: '#800020',
    spec: 'Marwari Gold Foil & Velvet Box',
    description: 'Centuries-old Rajputana luxury jewelry branding, monogram crest & suede packaging suite.',
    sampleFileName: 'Seth_Dhanraj_Royal_Heritage_Brand_Book.pdf',
  },
  {
    id: 'sharpix',
    name: 'Sharpix',
    category: "Industrial Tech & Men's Care",
    themeColor: '#1b1c1a',
    spec: 'Aerospace Matte Graphite Finish',
    description: 'Surgical-precision grooming hardware ergonomics, brand guidelines & retail unboxing manual.',
    sampleFileName: 'Sharpix_Industrial_Tech_Spec_Dossier.pdf',
  },
];

export const UploadPdfModal: React.FC<UploadPdfModalProps> = ({
  isOpen,
  onClose,
  defaultBrand,
  onViewFallbackDossier,
}) => {
  const [pdfRecords, setPdfRecords] = useState<Record<string, BrandPdfRecord>>({});
  const [activeBrandTab, setActiveBrandTab] = useState<'all' | 'cocona' | 'seth-dhanraj' | 'sharpix'>('all');
  const [uploadingBrand, setUploadingBrand] = useState<string | null>(null);
  const [dragOverBrand, setDragOverBrand] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    if (defaultBrand) {
      setActiveBrandTab(defaultBrand);
    } else {
      setActiveBrandTab('all');
    }
  }, [defaultBrand, isOpen]);

  const loadRecords = async () => {
    const all = await getAllBrandPdfs();
    setPdfRecords(all);
  };

  useEffect(() => {
    if (isOpen) {
      loadRecords();
    }
  }, [isOpen]);

  // Listen to global changes
  useEffect(() => {
    const handleUpdate = () => {
      loadRecords();
    };
    window.addEventListener('brand-pdf-updated', handleUpdate);
    return () => window.removeEventListener('brand-pdf-updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFileSelected = async (brand: BrandConfig, file: File) => {
    if (!file) return;
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      showToast('⚠️ Please upload a valid PDF file (.pdf format)');
      return;
    }

    try {
      setUploadingBrand(brand.id);
      const record = await saveBrandPdf(brand.id, brand.name, file);
      setPdfRecords((prev) => ({ ...prev, [brand.id]: record }));
      showToast(`✓ ${brand.name} PDF successfully uploaded!`);
    } catch (err) {
      console.error('Upload failed:', err);
      showToast('❌ Failed to save PDF. Please try again.');
    } finally {
      setUploadingBrand(null);
    }
  };

  const handleDelete = async (brandId: 'cocona' | 'seth-dhanraj' | 'sharpix', brandName: string) => {
    if (confirm(`Remove custom PDF for ${brandName}?`)) {
      await deleteBrandPdf(brandId);
      setPdfRecords((prev) => {
        const copy = { ...prev };
        delete copy[brandId];
        return copy;
      });
      showToast(`Removed custom PDF for ${brandName}`);
    }
  };

  const displayedBrands = activeBrandTab === 'all'
    ? BRANDS
    : BRANDS.filter((b) => b.id === activeBrandTab);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#fbf9f6] dark:bg-[#121316] rounded-2xl shadow-2xl border border-[#e5e2dc] dark:border-[#26282c] overflow-hidden my-6 flex flex-col max-h-[92vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-[#1b1c1a] dark:bg-[#16171a] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fd591e] flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[22px]">upload_file</span>
            </div>
            <div>
              <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>Upload Brand Dossier PDFs</span>
                <span className="bg-[#fd591e]/20 text-[#fd591e] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-[#fd591e]/30">
                  Cocona • Seth Dhanraj • Sharpix
                </span>
              </h2>
              <p className="font-sans text-xs text-white/70 mt-0.5">
                Upload custom client presentation PDFs for each brand to open in new tab & download.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <div className="bg-[#111111] dark:bg-[#202228] text-white px-6 py-2.5 text-xs font-display font-semibold flex items-center justify-between animate-fadeIn border-b border-white/10">
            <span>{toastMessage}</span>
            <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white cursor-pointer">✕</button>
          </div>
        )}

        {/* Tab Filters */}
        <div className="px-6 py-3 bg-[#f5f3f0] dark:bg-[#18191d] border-b border-[#e5e2dc] dark:border-[#26282c] flex items-center justify-between gap-2 shrink-0 overflow-x-auto transition-colors">
          <div className="flex items-center gap-2">
            <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] font-bold uppercase tracking-wider mr-1 hidden sm:inline">
              Filter Brand:
            </span>
            <button
              onClick={() => setActiveBrandTab('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${
                activeBrandTab === 'all'
                  ? 'bg-[#111111] dark:bg-[#fd591e] text-white shadow-xs'
                  : 'bg-white dark:bg-[#22242a] text-[#1b1c1a] dark:text-[#f3f2ee] hover:bg-[#efeeeb] dark:hover:bg-[#292c33] border border-[#e5e2dc] dark:border-[#2d3034]'
              }`}
            >
              All 3 Brands
            </button>
            {BRANDS.map((b) => {
              const hasFile = !!pdfRecords[b.id];
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveBrandTab(b.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeBrandTab === b.id
                      ? 'bg-[#111111] dark:bg-[#fd591e] text-white shadow-xs'
                      : 'bg-white dark:bg-[#22242a] text-[#1b1c1a] dark:text-[#f3f2ee] hover:bg-[#efeeeb] dark:hover:bg-[#292c33] border border-[#e5e2dc] dark:border-[#2d3034]'
                  }`}
                >
                  <span>{b.name}</span>
                  {hasFile && (
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" title="PDF uploaded"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-[11px] font-sans text-[#5f6368] dark:text-[#a2a09c]">
              {Object.keys(pdfRecords).length}/3 PDFs configured
            </span>
          </div>
        </div>

        {/* Scrollable Brands Grid / Cards */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {displayedBrands.map((brand) => {
            const record = pdfRecords[brand.id];
            const isUploading = uploadingBrand === brand.id;
            const isDragOver = dragOverBrand === brand.id;

            return (
              <div
                key={brand.id}
                className={`bg-white dark:bg-[#16171a] rounded-xl border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
                  isDragOver
                    ? 'border-[#fd591e] ring-2 ring-[#fd591e]/20 bg-[#fff9f6] dark:bg-[#1f1a18]'
                    : 'border-[#e5e2dc] dark:border-[#26282c]'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOverBrand(brand.id);
                }}
                onDragLeave={() => setDragOverBrand(null)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOverBrand(null);
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    handleFileSelected(brand, e.dataTransfer.files[0]);
                  }
                }}
              >
                {/* Brand Header */}
                <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#f0eee9] dark:border-[#24262c]">
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shrink-0 shadow-sm"
                      style={{ backgroundColor: brand.themeColor }}
                    >
                      {brand.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                          {brand.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-display font-bold uppercase tracking-wider bg-[#efeeeb] dark:bg-[#22242a] text-[#5f6368] dark:text-[#a2a09c]">
                          {brand.spec}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                        {brand.category} • {brand.description}
                      </p>
                    </div>
                  </div>

                  {/* Status Tag */}
                  <div>
                    {record ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 font-display text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Custom PDF Ready</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40 font-display text-xs font-semibold">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        <span>Using Curated Dossier</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Upload Zone / File Status */}
                <div className="p-5 bg-[#faf9f7] dark:bg-[#121316] transition-colors">
                  {record ? (
                    /* Existing File Card */
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#1a1c20] p-4 rounded-xl border border-[#e5e2dc] dark:border-[#282a30] shadow-2xs">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900/40">
                          <span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee] truncate" title={record.fileName}>
                            {record.fileName}
                          </p>
                          <div className="flex items-center gap-2 text-xs font-sans text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                            <span>{formatFileSize(record.fileSize)}</span>
                            <span>•</span>
                            <span>Uploaded {new Date(record.updatedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* File Action Controls */}
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <button
                          onClick={() => openBrandPdfInNewTab(record)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs font-semibold transition-all shadow-xs cursor-pointer hover:scale-[1.02]"
                          title="Open PDF in new browser tab"
                        >
                          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                          <span>Open in Tab</span>
                        </button>

                        <button
                          onClick={() => downloadBrandPdf(record)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#efeeeb] dark:bg-[#25282f] hover:bg-[#eae8e5] dark:hover:bg-[#2e313a] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-medium transition-colors cursor-pointer border border-transparent dark:border-[#32363f]"
                          title="Download PDF to computer"
                        >
                          <span className="material-symbols-outlined text-[16px]">download</span>
                          <span className="hidden sm:inline">Download</span>
                        </button>

                        {/* Replace Button */}
                        <button
                          onClick={() => fileInputRefs.current[brand.id]?.click()}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#25282f] hover:bg-[#f5f3f0] dark:hover:bg-[#2e313a] text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#e5e2dc] dark:border-[#32363f] font-display text-xs font-medium transition-colors cursor-pointer"
                          title="Replace with new PDF"
                        >
                          <span className="material-symbols-outlined text-[16px]">sync</span>
                          <span className="hidden sm:inline">Replace</span>
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(brand.id, brand.name)}
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                          title="Delete custom PDF"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Dropzone when no file uploaded */
                    <div
                      onClick={() => fileInputRefs.current[brand.id]?.click()}
                      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                        isDragOver
                          ? 'border-[#fd591e] bg-[#fff6f1] dark:bg-[#1f1917]'
                          : 'border-[#d8d5ce] dark:border-[#2d3036] hover:border-[#fd591e] hover:bg-white dark:hover:bg-[#1a1c21]'
                      }`}
                    >
                      <input
                        type="file"
                        accept="application/pdf,.pdf"
                        ref={(el) => {
                          fileInputRefs.current[brand.id] = el;
                        }}
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleFileSelected(brand, e.target.files[0]);
                          }
                        }}
                      />

                      {isUploading ? (
                        <div className="flex flex-col items-center justify-center gap-2 py-2">
                          <span className="w-6 h-6 border-2 border-[#fd591e] border-t-transparent rounded-full animate-spin"></span>
                          <span className="font-display text-xs font-bold text-[#fd591e]">
                            Uploading {brand.name} PDF...
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-[#f0eee9] dark:bg-[#22242a] text-[#fd591e] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[24px]">cloud_upload</span>
                          </div>
                          <div>
                            <p className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                              Upload <span className="text-[#fd591e]">{brand.name}</span> PDF Dossier
                            </p>
                            <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                              Drag & drop your PDF file here, or{' '}
                              <span className="text-[#fd591e] font-semibold underline">browse file</span>
                            </p>
                          </div>
                          <span className="text-[11px] font-mono text-[#5f6368]/70 dark:text-[#a2a09c]/70">
                            Accepted: .pdf (Presentation decks, Brand Books, Packaging specs)
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Fallback View Action */}
                  <div className="mt-3 flex items-center justify-between text-xs text-[#5f6368] dark:text-[#a2a09c]">
                    <span>
                      {record ? 'Active document will open when clients click Dossier PDF.' : 'No file uploaded yet. Visitors can view the generated dossier.'}
                    </span>
                    {onViewFallbackDossier && (
                      <button
                        onClick={() => {
                          onClose();
                          onViewFallbackDossier(brand.id);
                        }}
                        className="text-[#fd591e] hover:underline font-display font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Dossier Brief</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#f5f3f0] dark:bg-[#18191d] border-t border-[#e5e2dc] dark:border-[#26282c] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 transition-colors">
          <div className="flex items-center gap-2 text-xs font-sans text-[#5f6368] dark:text-[#a2a09c]">
            <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400">verified</span>
            <span>PDFs are stored safely in browser storage and open directly in a new tab.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#111111] dark:bg-[#25282f] hover:bg-[#333333] dark:hover:bg-[#2f323a] text-white font-display text-xs font-semibold transition-colors cursor-pointer shadow-xs border border-transparent dark:border-[#32363f]"
            >
              Done / Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
