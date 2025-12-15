import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
           <div className="font-bold text-xl tracking-widest text-brand-navy font-sans mb-2">
            COORDIN<span className="text-brand-yellowDark">.ART</span>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Coordin.Art. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-sm font-medium text-gray-500">
             {/* No contact form, no email links as requested */}
            <span className="cursor-default">Istanbul, Turkey</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;