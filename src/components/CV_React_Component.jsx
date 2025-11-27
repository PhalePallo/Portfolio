// CV_React_Component.jsx
// Place this file in: src/components/CV_React_Component.jsx
// Usage:
// 1) Put the uploaded DOCX file in your project's public folder and rename it to: PALLO_PHALE_CV_2025.docx
//    (public/PALLO_PHALE_CV_2025.docx)
// 2) Import and use the component in your App.jsx or route: import CVPage from "./components/CV_React_Component";
//    <Route path="/cv" element={<CVPage/>} />  OR simply render <CVPage/> inside App.

import React from 'react';

export default function CVPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <header className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold">Pallo Phale</h1>
            <p className="mt-1 text-sm text-gray-600">Full-Stack Developer — Germiston, Gauteng, South Africa</p>
            <p className="mt-2 text-sm text-gray-600">✉️ phalepallo@gmail.com  •  ☎️ +27 65 894 9406</p>
            <p className="mt-1 text-sm text-gray-600">🌐 GitHub: <a className="underline" href="https://github.com/PhalePallo" target="_blank" rel="noreferrer">github.com/PhalePallo</a>  •  LinkedIn: <a className="underline" href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com</a></p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/PALLO_PHALE_CV_2025.docx"
              download
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium hover:opacity-90"
              style={{backgroundColor: '#2563eb', color: 'white'}}
            >
              Download CV
            </a>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Profile Summary</h2>
            <p className="text-sm text-gray-700 mb-4">Full-Stack Developer with hands-on experience designing and deploying responsive, data-driven web applications using JavaScript and Python (Flask). Skilled in front-end UI/UX design, Shopify store management and integrations, and Azure cloud deployment. Passionate about delivering scalable, user-focused digital solutions and continuously developing technical expertise through self-driven projects and certifications.</p>

            <h2 className="text-xl font-semibold mb-2">Technical Stack</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, Chart.js</li>
              <li>Backend: Python (Flask), C#, Java, Node.js</li>
              <li>Cloud & DevOps: Microsoft Azure (App Service, Functions), GitHub Actions</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
            <div className="text-sm text-gray-700 mb-4">
              <strong>Assistant Shopify Account Manager — RiskieForever</strong>
              <div className="text-xs text-gray-600">Dec 2023 – Sep 2024</div>
              <ul className="list-disc list-inside mt-2">
                <li>Maintained Shopify client websites for performance and UX improvements.</li>
                <li>Implemented product uploads, promotional campaigns, and theme customizations.</li>
                <li>Supported front-end troubleshooting and third-party app integrations.</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              <li>Agile Chatbot Web App — front-end built with HTML, CSS, JS</li>
              <li>To-Do App — Vanilla JS with localStorage</li>
              <li>Expense Tracker — Chart.js analytics and JSON persistence</li>
              <li>VS Code Case Refactor Extension — TypeScript</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Education & Certifications</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
              <li>Full-Stack Development Certificate — FNB App Academy / IT Varsity (2025)</li>
              <li>Microsoft Certified: Azure Fundamentals (AZ-900) — Aug 2024</li>
              <li>freeCodeCamp Certifications — 2025</li>
            </ul>
          </div>

          <aside className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Core Skills</h3>
            <div className="text-sm text-gray-700 mb-4">
              HTML5, CSS3, JavaScript (ES6+), React, Flask, C#, Java, TypeScript, Git
            </div>

            <h3 className="font-semibold mb-2">Achievements</h3>
            <div className="text-sm text-gray-700 mb-4">Deployed multiple cloud-hosted applications using Azure and GitHub Actions CI/CD. Built a strong GitHub portfolio.</div>

            <h3 className="font-semibold mb-2">Languages</h3>
            <div className="text-sm text-gray-700">English, Sesotho, Setswana, IsiZulu</div>
          </aside>
        </section>

        <footer className="mt-8 text-sm text-gray-500">Last updated: 2025</footer>
      </div>
    </div>
  );
}
