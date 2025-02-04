'use client';

import { useLanguage } from '../app/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = {
        'pt-BR': {
            name: 'Português',
            flag: '🇧🇷'
        },
        'en': {
            name: 'English',
            flag: '🇺🇸'
        }
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                aria-label="Select language"
            >
                <span className="text-base">{languages[language].flag}</span>
                <span className="hidden sm:inline-flex">{languages[language].name}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md bg-background border shadow-lg">
                    {Object.entries(languages).map(([code, { name, flag }]) => (
                        <button
                            key={code}
                            onClick={() => {
                                setLanguage(code as 'en' | 'pt-BR');
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors
                                ${language === code ? 'text-primary font-medium bg-accent/50' : 'text-muted-foreground'}
                                ${code === 'en' ? 'rounded-b-md' : 'rounded-t-md'}`}
                        >
                            <span className="text-base">{flag}</span>
                            <span>{name}</span>
                            {language === code && (
                                <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}