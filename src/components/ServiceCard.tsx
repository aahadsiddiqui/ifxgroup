"use client";

import { ChevronDown } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    index: number;
    downloadUrl?: string;
    downloadLabel?: string;
    details?: string;
    associations?: string[];
}

export default function ServiceCard({ title, description, index, downloadUrl, downloadLabel, details, associations }: ServiceCardProps) {
    return (
        <div
            className="h-full bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 hover:shadow-xl hover:border-primary/30 transition-all duration-500 group animate-fade-in-up overflow-hidden relative flex flex-col"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform shrink-0" />
                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors select-none">
                        {title}
                    </h3>
                </div>
            </div>

            <div className="flex-grow">
                <div className="px-6 pb-6 pt-0 text-gray-600 text-sm leading-relaxed space-y-4">
                    <p>{description}</p>

                    {details && (
                        <p className="text-gray-500 italic border-l-2 border-primary/20 pl-3">
                            {details}
                        </p>
                    )}

                    {associations && associations.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {associations.map((assoc) => (
                                <span key={assoc} className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md">
                                    {assoc}
                                </span>
                            ))}
                        </div>
                    )}

                    {downloadUrl && (
                        <div className="pt-2">
                            <a
                                href={downloadUrl}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                            >
                                <ChevronDown size={16} className="animate-bounce" />
                                {downloadLabel || "Download Info"}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
