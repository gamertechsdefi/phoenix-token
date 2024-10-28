import { useState } from 'react';

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Replace <br /> with newlines (\n) when copying text
      const plainText = text.replace(/<br\s*\/?>/gi, '\n');
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div>
      <div 
        onClick={handleCopy} 
        className='bg-[#f9f9f9] cursor-pointer p-8 border-[1px] border-neutral-500 inline-block font-bold' 
        dangerouslySetInnerHTML={{ __html: text }} // Render text with HTML tags
      />
      {copied && <span className='text-neutral-700'>Copied!</span>}
    </div>
  );
};

export default CopyToClipboard;

