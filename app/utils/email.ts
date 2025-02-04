export const getObfuscatedEmail = () => {
    return ['honda', '.', 'data', '.', 'science', '@', 'gmail', '.', 'com'].join('');
};

export const createEmailLink = (subject?: string) => {
    const email = getObfuscatedEmail();
    const encodedSubject = subject ? `?subject=${encodeURIComponent(subject)}` : '';
    return `mailto:${email}${encodedSubject}`;
}; 