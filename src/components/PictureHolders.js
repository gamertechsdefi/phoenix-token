'use client'

import Image from "next/image";
import { useState } from "react";

export function PictureHolder({imageholder, imagealt}){

    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            
            
            // Extract file name from the imageholder path
            const fileName = imageholder.split('/').pop(); // Gets the file name from the path
            
            // Create the correct path to your image in the public folder
            const fullPath = imageholder.startsWith('/') ? imageholder : `/${imageholder}`;
            
            const response = await fetch(fullPath);
            if (!response.ok) throw new Error('Download failed');
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            // Use the original file name for download
            downloadLink.download = fileName;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download image. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="relative aspect-square">
            <Image 
                src={imageholder} 
                alt={imagealt} 
                className="object-cover rounded-lg"  // Makes image cover the full area
                fill  // Use fill instead of width/height for aspect-square
            />
             <div className="absolute inset-0 flex p-4 items-end">
                <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="bg-orange-500 hover:bg-black px-4 py-2 rounded-lg 
                        shadow-lg backdrop-blur-sm transition-colors
                        disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isDownloading ? 'Downloading...' : 'Download picture'}
                </button>
            </div>
        </div>
    );
}