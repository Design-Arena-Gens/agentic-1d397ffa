'use client';

import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  abstract: string;
  keyFindings: string[];
  methodology: string;
  implications: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const sampleArticles: Article[] = [
  {
    id: 1,
    title: "The Impact of Machine Learning on Healthcare Diagnostics",
    authors: "Smith, J., Johnson, A., & Brown, R.",
    journal: "Journal of Medical AI",
    year: 2024,
    abstract: "This study examines how machine learning algorithms are revolutionizing early disease detection and diagnosis accuracy in healthcare settings.",
    keyFindings: [
      "ML algorithms improved diagnostic accuracy by 23% compared to traditional methods",
      "Early detection rates increased by 35% for cardiovascular diseases",
      "Implementation reduced diagnostic time by an average of 45%"
    ],
    methodology: "Retrospective analysis of 50,000 patient records across 25 hospitals, using deep learning models for pattern recognition in medical imaging and patient data.",
    implications: "This research demonstrates significant potential for AI integration in clinical settings, potentially saving lives through earlier and more accurate diagnoses.",
    difficulty: "Intermediate"
  },
  {
    id: 2,
    title: "Climate Change Effects on Marine Biodiversity",
    authors: "Garcia, M., Lee, S., & Chen, W.",
    journal: "Nature Climate Science",
    year: 2023,
    abstract: "An extensive study analyzing the correlation between rising ocean temperatures and shifts in marine species distribution patterns over the past three decades.",
    keyFindings: [
      "47% of studied marine species have shifted their habitats poleward",
      "Coral bleaching events increased by 300% since 1990",
      "Fish migration patterns changed dramatically, affecting 12 major fishing economies"
    ],
    methodology: "Longitudinal study combining satellite data, underwater sensors, and field observations from 200+ marine locations worldwide over 30 years.",
    implications: "Urgent action needed to mitigate climate change impacts on marine ecosystems and dependent human communities.",
    difficulty: "Advanced"
  },
  {
    id: 3,
    title: "Social Media Usage and Mental Health in Adolescents",
    authors: "Thompson, K., & Rodriguez, L.",
    journal: "Psychology Today Research",
    year: 2024,
    abstract: "A comprehensive investigation into the relationship between daily social media consumption and various mental health indicators among teenagers aged 13-18.",
    keyFindings: [
      "3+ hours daily social media use correlated with 27% higher anxiety rates",
      "Positive correlation found between moderated use (< 1 hour) and social connectivity",
      "Sleep quality decreased by 18% in heavy users"
    ],
    methodology: "Survey and longitudinal tracking of 5,000 adolescents over 2 years, including self-reported data and clinical assessments.",
    implications: "Parents and educators should promote balanced social media usage and digital literacy education.",
    difficulty: "Beginner"
  },
  {
    id: 4,
    title: "Quantum Computing Applications in Cryptography",
    authors: "Zhang, Q., Mueller, H., & Patel, N.",
    journal: "Quantum Information Science",
    year: 2024,
    abstract: "This paper explores the implications of quantum computing advancement on current encryption standards and proposes quantum-resistant cryptographic protocols.",
    keyFindings: [
      "Current RSA encryption could be broken by quantum computers within 10 years",
      "Newly developed lattice-based cryptography shows promise for quantum resistance",
      "Transition to quantum-safe systems requires estimated 5-7 years for global implementation"
    ],
    methodology: "Theoretical analysis combined with simulation of quantum algorithms on classical supercomputers to test cryptographic vulnerabilities.",
    implications: "Critical need for governments and organizations to begin transitioning to quantum-resistant encryption immediately.",
    difficulty: "Advanced"
  },
  {
    id: 5,
    title: "Urban Green Spaces and Community Well-being",
    authors: "Anderson, P., & Williams, T.",
    journal: "Urban Studies Quarterly",
    year: 2023,
    abstract: "Research examining the relationship between accessible green spaces in urban environments and various indicators of community health and happiness.",
    keyFindings: [
      "Neighborhoods with parks within 10-minute walk showed 15% lower stress levels",
      "Property values increased by 8-12% near well-maintained green spaces",
      "Community social interactions increased by 40% in areas with parks"
    ],
    methodology: "Comparative study of 50 urban neighborhoods across 10 cities, using surveys, health data, and economic indicators.",
    implications: "City planners should prioritize green space development as essential infrastructure for public health.",
    difficulty: "Beginner"
  }
];

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');

  const filteredArticles = sampleArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || article.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            📚 Research Article Explainer
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Understanding complex research made simple
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Article List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Browse Articles
              </h2>

              {/* Search */}
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Difficulty Filter */}
              <select
                className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
              >
                <option>All</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              {/* Article List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedArticle?.id === article.id
                        ? 'bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-500'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-white line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      {article.year} • {article.difficulty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Article Details */}
          <div className="lg:col-span-2">
            {selectedArticle ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                    selectedArticle.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    selectedArticle.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {selectedArticle.difficulty} Level
                  </span>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Authors:</strong> {selectedArticle.authors}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Published in:</strong> {selectedArticle.journal} ({selectedArticle.year})
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Abstract */}
                  <section>
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center">
                      <span className="mr-2">📄</span> Abstract
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedArticle.abstract}
                    </p>
                  </section>

                  {/* Key Findings */}
                  <section>
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center">
                      <span className="mr-2">🔍</span> Key Findings
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {selectedArticle.keyFindings.map((finding, index) => (
                        <li key={index} className="leading-relaxed">{finding}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Methodology */}
                  <section>
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center">
                      <span className="mr-2">🔬</span> Methodology
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedArticle.methodology}
                    </p>
                  </section>

                  {/* Implications */}
                  <section>
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center">
                      <span className="mr-2">💡</span> Real-World Implications
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedArticle.implications}
                    </p>
                  </section>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">📖</div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  Select an Article to Begin
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose an article from the list to see detailed explanations, key findings, and implications.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300">
          <p>Research Article Explainer • Making Science Accessible</p>
        </div>
      </footer>
    </div>
  );
}
