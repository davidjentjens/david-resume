'use client';

import { useState, useRef, useEffect } from 'react';
import * as Toast from '@radix-ui/react-toast';

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setToastMessage(`${type === 'phone' ? 'Phone number' : 'Email address'} copied to clipboard!`);
    
    // Close any existing toast and open a new one
    setToastOpen(false);
    clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setToastOpen(true);
    }, 100);
    
    // Reset copied state after 2 seconds
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const callPhone = () => {
    window.location.href = 'tel:+5521975352974';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:davidjentjens@gmail.com';
  };

  return (
    <>
      <div className="section animate-fade-in">
        <div className="section-title">Contact</div>
        <div className="space-y-3">
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <div className="flex items-center gap-2">
              <span className="contact-value">+55 (21) 97535-2974</span>
              <button
                onClick={callPhone}
                className="p-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-200"
                title="Call"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button
                onClick={() => copyToClipboard('+5521975352974', 'phone')}
                className={`p-1.5 text-white rounded-md transition-all duration-200 ${
                  copiedItem === 'phone' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                title="Copy phone number"
              >
                {copiedItem === 'phone' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <div className="flex items-center gap-2">
              <span className="contact-value">davidjentjens@gmail.com</span>
              <button
                onClick={sendEmail}
                className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200"
                title="Send email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                onClick={() => copyToClipboard('davidjentjens@gmail.com', 'email')}
                className={`p-1.5 text-white rounded-md transition-all duration-200 ${
                  copiedItem === 'email' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                title="Copy email address"
              >
                {copiedItem === 'email' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Toast.Root
        className="ToastRoot"
        open={toastOpen}
        onOpenChange={setToastOpen}
        duration={3000}
      >
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <Toast.Description className="text-sm font-medium text-gray-900 flex-1">
          {toastMessage}
        </Toast.Description>
        <Toast.Close className="text-gray-400 hover:text-gray-600 flex-shrink-0" aria-label="Close">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Toast.Close>
      </Toast.Root>
    </>
  );
}