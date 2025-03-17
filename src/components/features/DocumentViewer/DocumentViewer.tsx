"use client";

import React from "react";
import { cn } from "@/src/lib/cn";
import { FileDown, X } from "lucide-react";

const DocViewer: React.FC<{
  documentUrl: string;
  documentName: string;
  isActive: boolean;
  onClose: ()=>void;
  className?: string;
}> = ({
  documentUrl,
  documentName,
  isActive,
  onClose,
  className,
}: {
  documentUrl: string;
  documentName: string;
  isActive: boolean;
  onClose: ()=>void;
  className?: string;
}) => {
  if (!isActive) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-viewer-title"
      className={cn(
        className,
        'fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-8 md:p-16'
      )}
    >
      <div className="h-full w-full bg-white p-2 flex flex-col sm:px-4">
        <div className="flex flex-col-reverse justify-between items-center mb-2 gap-1 max-h-[30%] overflow-y-hidden md:flex-row md:gap-5">
          <h1 className="text-black font-bold text-[22px] break-words whitespace-normal overflow-hidden flex-1">
            {documentName}
          </h1>
          <a 
            download
            href={documentUrl} 
            className="bg-[--sur-primary-blue] w-full justify-center flex p-2 gap-2 items-center md:w-auto"
          >
            <FileDown aria-hidden="true" color="white" />
            <span>Скачать</span>
          </a>
          <button 
            onClick={onClose} 
            aria-label="Закрыть"
            className="bg-red-600 w-full justify-center flex p-2 gap-2 items-center cursor-pointer flex-shrink-0  md:w-auto"
          >
            <X aria-hidden="true" />
            <span>Закрыть</span>
          </button>
        </div>
        <section className="h-full w-full border-2 border-[#d1d1d1] flex-1">
          <iframe
            className="h-full w-full"
            src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${documentUrl}`} />
        </section>
      </div>
    </div>
  );
};

export default DocViewer;
