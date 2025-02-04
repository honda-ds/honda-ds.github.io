'use client';

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import MainLayout from '@/components/layout/MainLayout';
import styles from '../styles/grid-pattern.module.css';
import { createEmailLink } from '@/app/utils/email';

export default function About() {
    const { translations: t } = useLanguage();

    const clients = [
        {
            name: 'Upwork',
            logo: `/images/clients/upwork.png`,
            url: 'https://www.upwork.com',
            description: 'Global Freelancing Platform'
        },
        {
            name: 'CGEE',
            logo: `/images/clients/cgee.png`,
            url: 'https://www.cgee.org.br',
            description: 'Center for Strategic Studies'
        },
        {
            name: 'Legal Labs',
            logo: `/images/clients/legal_labs.png`,
            url: 'https://www.neoway.com.br/solucoes/neoway-lawsuits?lang=en',
            description: 'Legal Tech Solutions'
        },
        {
            name: 'Buscajuris',
            logo: `/images/clients/buscajuris.png`,
            url: 'https://bjuris.com.br',
            description: 'Legal Intelligence Platform'
        },
        {
            name: 'Future Labs',
            logo: `/images/clients/futurelabs.png`,
            url: 'https://www.futurelabs.gg',
            description: 'Gaming Innovation Hub'
        }
    ];

    return (
        <MainLayout>
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full py-20 md:py-22 lg:py-24 bg-background overflow-hidden">
                    <div className={`absolute inset-0 ${styles.bgGridPattern}`} />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
                    <div className="container max-w-screen-2xl mx-auto px-4 relative">
                        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-6">
                                <h1 className="text-4xl pb-2 font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] via-[#38b6ff] to-[#6c86ff] leading-[1.1]">
                                    {t.about.title}
                                </h1>
                                <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                    {t.about.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clients Section */}
                <section className="w-full py-12 border-y bg-muted/50">
                    <div className="container max-w-screen-2xl mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center space-y-4 mb-4">
                                <h2 className="text-2xl font-semibold text-muted-foreground">
                                    {t.about.clients.title}
                                </h2>
                                <p className="text-sm text-muted-foreground/80">
                                    {t.about.clients.subtitle}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
                                {clients.map((client) => (
                                    <a
                                        key={client.name}
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative w-full max-w-[160px] aspect-[3/2] hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100">
                                            <Image
                                                src={client.logo}
                                                alt={`${client.name} - ${client.description}`}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 160px"
                                            />
                                        </div>
                                        <div className="absolute -bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-xs text-muted-foreground/60 whitespace-nowrap">
                                                {client.description}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story & Mission Section */}
                <section className="w-full py-18 pt-12 bg-gradient-to-b from-gray-100/40 to-background dark:from-gray-800/40 dark:to-background">
                    <div className="container max-w-screen-2xl mx-auto px-4">
                        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20">
                            <Card className="border-none relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6c86ff]/10 to-transparent rounded-bl-full group-hover:scale-110 transition-transform duration-500" />
                                <CardHeader className="space-y-4">
                                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] to-[#38b6ff]">
                                        {t.about.story.title}
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {t.about.story.content}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-none relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#38b6ff]/10 to-transparent rounded-bl-full group-hover:scale-110 transition-transform duration-500" />
                                <CardHeader className="space-y-4">
                                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#38b6ff] to-[#6c86ff]">
                                        {t.about.mission.title}
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {t.about.mission.content}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="w-full pt-12 pb-12">
                    <div className="container max-w-screen-2xl mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] to-[#38b6ff]">
                                {t.about.values.title}
                            </h2>
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {t.about.values.items.map((value, index) => (
                                    <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#6c86ff]/5 to-transparent rounded-bl-full group-hover:scale-110 transition-transform duration-500" />
                                        <CardHeader className="space-y-6 text-center">
                                            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] to-[#38b6ff]">
                                                {value.title}
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg text-muted-foreground text-center leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="w-full pt-12 bg-gradient-to-b from-gray-100/40 to-background dark:from-gray-800/40 dark:to-background">
                    <div className="container max-w-screen-2xl mx-auto px-4">
                        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] to-[#38b6ff]">
                                    {t.about.team.title}
                                </h2>
                                <p className="mx-auto max-w-[800px] text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                    {t.about.team.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="w-full pt-12 relative overflow-hidden">
                    <div className={`absolute inset-0 ${styles.bgGridPattern}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
                    <div className="container max-w-screen-2xl mx-auto px-4 relative">
                        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] to-[#38b6ff]">
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
                </section>
            </main>
        </MainLayout>
    );
} 