'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/translations/en';
import ptBR from '../i18n/translations/pt-br';

type Language = 'en' | 'pt-BR';

// Create a more generic type instead of inferring literal types
type TranslationType = {
    hero: {
        announcement: string;
        title: string;
        subtitle: string;
        cta: {
            trial: string;
            demo: string;
        };
    };
    nav: {
        about: string;
    };
    about: {
        title: string;
        subtitle: string;
        story: {
            title: string;
            content: string;
        };
        mission: {
            title: string;
            content: string;
        };
        values: {
            title: string;
            items: ReadonlyArray<{
                title: string;
                description: string;
            }>;
        };
        team: {
            title: string;
            content: string;
        };
        contact: {
            title: string;
            content: string;
            cta: string;
        };
        clients: {
            title: string;
            subtitle: string;
        };
    };
    contact: {
        emailSubject: string;
        sendEmail: string;
    };
    services: {
        all: string;
        categories: Record<string, string>;
        items: Record<string, {
            title: string;
            description: string;
        }>;
        badges: Record<string, string>;
        learnMore: string;
    };
    stats: {
        activeUsers: { label: string; value: string; };
        timeSaved: { label: string; value: string; };
        successRate: { label: string; value: string; };
        roiAverage: { label: string; value: string; };
    };
    footer: {
        rights: string;
        links: {
            privacy: string;
            terms: string;
            contact: string;
        };
    };
};

interface LanguageContextType {
    language: Language;
    translations: TranslationType;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt-BR');
    const [translations, setTranslations] = useState<TranslationType>(ptBR);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem('language') as Language;
            if (savedLanguage) {
                setLanguage(savedLanguage);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTranslations(language === 'en' ? en : ptBR);
            localStorage.setItem('language', language);
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, translations, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}