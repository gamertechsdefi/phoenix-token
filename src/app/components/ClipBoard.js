import { useState } from 'react';

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const plainText = text.replace(/<br\s*\/?>/gi, '\n');
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="max-w-full overflow-hidden">
      <div 
        onClick={handleCopy} 
        className="cursor-pointer inline-block font-bold break-words whitespace-pre-wrap"
        style={{ maxWidth: '100%' }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {copied && (
        <span className="text-neutral-700 ml-2">Copied!</span>
      )}
    </div>
  );
};

export default CopyToClipboard;