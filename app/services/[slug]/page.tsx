import translations from '@/app/i18n/translations/en';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
    return Object.keys(translations.services.items).map((slug) => ({
        slug: slug,
    }));
}

export default function ServiceDetail() {
    return <ServiceDetailClient />;
} 