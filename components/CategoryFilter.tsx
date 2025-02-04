'use client';

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
    allLabel?: string | null;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, allLabel }: CategoryFilterProps) => {
    return (
        <div className="flex gap-2 mb-12 overflow-x-auto pb-4 justify-center flex-wrap">
            <button
                onClick={() => onCategoryChange(null)}
                className={`px-4 py-2 rounded-full bg-white dark:bg-gray-800 border text-sm font-medium transition-colors
                    ${selectedCategory === null
                        ? 'border-primary text-primary dark:border-secondary dark:text-secondary'
                        : 'border-gray-200 dark:border-gray-700 hover-primary dark:hover-secondary'
                    }`}
            >
                {allLabel || 'All'}
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-2 rounded-full bg-white dark:bg-gray-800 border text-sm font-medium transition-colors
                        ${selectedCategory === category
                            ? 'border-primary text-primary dark:border-secondary dark:text-secondary'
                            : 'border-gray-200 dark:border-gray-700 hover-primary dark:hover-secondary'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;