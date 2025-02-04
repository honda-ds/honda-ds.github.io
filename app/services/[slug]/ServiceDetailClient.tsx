'use client';

import React from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { createEmailLink } from '@/app/utils/email';

export default function ServiceDetailClient() {
    const { translations: t } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;

    // Find the service details from translations
    const service = Object.entries(t.services.items).find(([key]) => key === slug)?.[1];

    if (!service) {
        return (
            <MainLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Service not found</h1>
                        <Link href="/" className="mt-4 text-primary hover:underline">
                            Return to home
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <main className="flex-1">
                <div className="container max-w-screen-2xl mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card rounded-lg p-8">
                            <div className="container max-w-screen-2xl mx-auto px-4 relative">
                                <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 text-center">
                                    <div className="space-y-6">
                                        <h2 className="text-4xl pb-2 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] to-[#38b6ff]">
                                            {t.about.contact.title}
                                        </h2>
                                        <p className="mx-auto max-w-[800px] text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                            {t.about.contact.content}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center pt-12 pb-12">
                                    <Button
                                        size="lg"
                                        onClick={() => {
                                            window.location.href = createEmailLink(t.contact.emailSubject);
                                        }}
                                        className="w-full sm:w-auto rounded-full text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] hover:from-[#38b6ff] hover:to-[#6c86ff]"
                                    >
                                        {t.contact.sendEmail}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
} 