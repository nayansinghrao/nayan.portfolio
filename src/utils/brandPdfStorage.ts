// Storage utility for Brand Dossier PDFs (Cocona, Seth Dhanraj, Sharpix)
// Uses IndexedDB for reliable persistence of large PDF files (no 5MB localStorage limit)

export interface BrandPdfRecord {
  brandId: 'cocona' | 'seth-dhanraj' | 'sharpix';
  brandName: string;
  fileName: string;
  fileSize: number; // in bytes
  fileType: string;
  dataUrl: string; // Base64 data URL
  updatedAt: string;
}

const DB_NAME = 'NayanPortfolioPDFs';
const DB_VERSION = 1;
const STORE_NAME = 'brand_pdfs';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'brandId' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveBrandPdf(
  brandId: 'cocona' | 'seth-dhanraj' | 'sharpix',
  brandName: string,
  file: File
): Promise<BrandPdfRecord> {
  const dataUrl = await fileToDataUrl(file);
  const record: BrandPdfRecord = {
    brandId,
    brandName,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type || 'application/pdf',
    dataUrl,
    updatedAt: new Date().toISOString(),
  };

  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(record);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  // Notify listeners across components
  window.dispatchEvent(new CustomEvent('brand-pdf-updated', { detail: { brandId } }));
  return record;
}

export async function getBrandPdf(
  brandId: 'cocona' | 'seth-dhanraj' | 'sharpix'
): Promise<BrandPdfRecord | null> {
  try {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(brandId);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Failed to get brand PDF:', err);
    return null;
  }
}

export async function getAllBrandPdfs(): Promise<Record<string, BrandPdfRecord>> {
  try {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const records: BrandPdfRecord[] = request.result || [];
        const map: Record<string, BrandPdfRecord> = {};
        records.forEach((r) => {
          map[r.brandId] = r;
        });
        resolve(map);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Failed to get all brand PDFs:', err);
    return {};
  }
}

export async function deleteBrandPdf(
  brandId: 'cocona' | 'seth-dhanraj' | 'sharpix'
): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(brandId);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  window.dispatchEvent(new CustomEvent('brand-pdf-updated', { detail: { brandId } }));
}

export function openBrandPdfInNewTab(record: BrandPdfRecord) {
  // Convert dataURL to Blob and open blob URL in new tab for high security and performance
  try {
    const blob = dataUrlToBlob(record.dataUrl);
    const blobUrl = URL.createObjectURL(blob);
    const newTab = window.open(blobUrl, '_blank');
    if (!newTab) {
      // Fallback: direct download link if popup blocked
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = record.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  } catch (e) {
    // Direct open fallback
    const newTab = window.open();
    if (newTab) {
      newTab.document.write(
        `<iframe src="${record.dataUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
      );
      newTab.document.title = record.fileName;
    }
  }
}

export function downloadBrandPdf(record: BrandPdfRecord) {
  const blob = dataUrlToBlob(record.dataUrl);
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = record.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function dataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(';base64,');
  const contentType = parts[0].split(':')[1] || 'application/pdf';
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}
