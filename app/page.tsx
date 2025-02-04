'use client';

import { useLanguage } from './contexts/LanguageContext';
import CategoryFilter from '../components/CategoryFilter';
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { translations: t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const services = [
    {
      title: t.services.items.documentAnalysis.title,
      description: t.services.items.documentAnalysis.description,
      icon: "🔍",
      badge: t.services.badges.popular,
      category: t.services.categories.Business,
      slug: 'documentAnalysis'
    },
    {
      title: t.services.items.fraudDetection.title,
      description: t.services.items.fraudDetection.description,
      icon: "🛡️",
      badge: t.services.badges.enterprise,
      category: t.services.categories.Security,
      slug: 'fraudDetection'
    },
    {
      title: t.services.items.geoAnalytics.title,
      description: t.services.items.geoAnalytics.description,
      icon: "🌍",
      badge: t.services.badges.new,
      category: t.services.categories.Analytics,
      slug: 'geoAnalytics'
    },
    {
      title: t.services.items.legalAI.title,
      description: t.services.items.legalAI.description,
      icon: "⚖️",
      badge: t.services.badges.popular,
      category: t.services.categories.Legal,
      slug: 'legalAI'
    },
    {
      title: t.services.items.intelligentSearch.title,
      description: t.services.items.intelligentSearch.description,
      icon: "🔎",
      badge: t.services.badges.trending,
      category: t.services.categories.AI,
      slug: 'intelligentSearch'
    },
    {
      title: t.services.items.marketIntelligence.title,
      description: t.services.items.marketIntelligence.description,
      icon: "📈",
      badge: t.services.badges.enterprise,
      category: t.services.categories.Business,
      slug: 'marketIntelligence'
    },
    {
      title: t.services.items.socialMedia.title,
      description: t.services.items.socialMedia.description,
      icon: "🚀",
      category: t.services.categories.Marketing,
      slug: 'socialMedia'
    },
    {
      title: t.services.items.dataAnalytics.title,
      description: t.services.items.dataAnalytics.description,
      icon: "📊",
      category: t.services.categories.Business,
      slug: 'dataAnalytics'
    },
    {
      title: t.services.items.documentOCR.title,
      description: t.services.items.documentOCR.description,
      icon: "📄",
      category: t.services.categories.Legal,
      slug: 'documentOCR'
    }
  ];

  const categories = [...new Set(services.map(service => service.category))].sort();

  const filteredServices = selectedCategory
    ? services.filter(service => service.category === selectedCategory)
    : services;

  return (
    <MainLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-4 md:py-10 lg:py-10 xl:py-10 border-b">
          <div className="container max-w-screen-2xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              {/* <div>
                <Badge variant="outline" className="border-[#6c86ff] text-[#6c86ff]">
                  {t.hero.announcement}
                </Badge>
              </div> */}
              <h1 className="max-w-3xl mx-auto text-3xl font-bold tracking-tight pb-2 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] via-[#38b6ff] to-[#6c86ff]">
                {t.hero.title}
              </h1>
              <p className="max-w-[42rem] mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t.hero.subtitle}
              </p>
              {/* <div className="flex flex-wrap items-center justify-center gap-4 min-[400px]:flex-row pt-4">
                <Button asChild size="lg" className="w-full min-[400px]:w-auto rounded-full">
                  <Link href="/get-started" className="inline-flex items-center justify-center">
                    {t.hero.cta.trial}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full min-[400px]:w-auto rounded-full">
                  <Link href="/demo">{t.hero.cta.demo}</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12 border-b">
          <div className="container max-w-screen-2xl mx-auto px-4">
            {/* Category Filter */}
            <div className="max-w-6xl mx-auto mb-2">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                allLabel={t.services.all}
              />
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredServices.map((service, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full"
                  >
                    <Link href={`/services/${service.slug}`} className="absolute inset-0 z-10">
                      <span className="sr-only">View {service.title}</span>
                    </Link>
                    <CardHeader className="space-y-3 p-6">
                      {service.badge && (
                        <Badge
                          variant="secondary"
                          className="absolute top-4 right-4 bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {service.badge}
                        </Badge>
                      )}
                      <div className="text-4xl transition-transform duration-300 group-hover:scale-110 transform-gpu">
                        {service.icon}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {service.category}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <p className="text-muted-foreground line-clamp-3">
                        {service.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="flex items-center text-sm font-medium text-primary transition-transform duration-300 will-change-transform group-hover:translate-x-2">
                        {t.services.learnMore}
                        <svg
                          className="w-4 h-4 ml-1 transition-transform duration-300 will-change-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-8">
          <div className="container max-w-screen-2xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { label: t.stats.activeUsers.label, value: t.stats.activeUsers.value },
                  { label: t.stats.timeSaved.label, value: t.stats.timeSaved.value },
                  { label: t.stats.successRate.label, value: t.stats.successRate.value },
                  { label: t.stats.roiAverage.label, value: t.stats.roiAverage.value },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden group transition-colors border-none"
                  >
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                      <div className="space-y-2">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
