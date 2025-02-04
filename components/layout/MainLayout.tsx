'use client';

import React from 'react';
import { useLanguage } from '../../app/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import { prefix } from '../../app/utils/prefix';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const { translations: t } = useLanguage();
    const pathname = usePathname();

    const isAboutPage = pathname === '/about';
    const title = isAboutPage ? 'Honda Data' : 'AI Hub';
    const navText = isAboutPage ? 'AI Hub' : t.nav.about;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4">
                    <div className="flex items-center">
                        <Link href={isAboutPage ? '/about' : '/'} className="flex items-center space-x-3">
                            <Image
                                src={`${prefix}/images/logo.png`}
                                alt="Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <span className="font-bold text-xl bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] bg-clip-text text-transparent">
                                {title}
                            </span>
                        </Link>
                    </div>
                    <nav className="flex items-center">
                        <div className="flex items-center space-x-4 sm:space-x-6">
                            <Link
                                href={isAboutPage ? '/' : '/about'}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                            >
                                {navText}
                            </Link>
                            <div className="h-6 w-px bg-border hidden sm:inline-flex" />
                            <div className="relative inline-flex items-center">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {children}

            <footer className="w-full border-t bg-muted/40 mt-2">
                <div className="container max-w-screen-2xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">
                        <div className="text-sm text-muted-foreground order-2 md:order-1 text-center md:text-left">
                            {t.footer.rights}
                        </div>
                        {/* <nav className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {t.footer.links.privacy}
                            </Link>
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {t.footer.links.terms}
                            </Link>
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {t.footer.links.contact}
                            </Link>
                        </nav> */}
                    </div>
                </div>
            </footer>
        </div>
    );
} 