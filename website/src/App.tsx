import React from 'react';
import { Navbar } from './components/Navbar';
import { PerformanceChart } from './components/PerformanceChart';
import { CodeExample } from './components/CodeExample';
import { Download, ArrowRight } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { GradientText } from './components/GradientText';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img src="logo.png"></img>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Where <GradientText gradient="primary">Boundless</GradientText> meets{' '}
            <GradientText gradient="secondary">Effortless</GradientText>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            <GradientText gradient="tertiary">Python</GradientText> Simplicity.{' '}
            <GradientText gradient="quaternary">C</GradientText> Performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Anantavyay
            </button>
            <a
              href="https://github.com/Syntax-Virtuoso/Anantavyay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              View on GitHub
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best of Both Worlds</h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16">
            Everything you love about Python, with the performance you need.
          </p>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Performance Comparison</h3>
            <PerformanceChart />
          </div>

          <div className="grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Python-like Syntax</h3>
              <CodeExample />
            </div>
            <br></br>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Python Library Support</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Use all your favorite Python libraries without modification.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">C-Level Performance</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Get blazing fast execution speeds comparable to C.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Zero Learning Curve</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  If you know Python, you already know Anantavyay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            <GradientText gradient="quinary">Join</GradientText> the Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get involved with Anantavyay's growing community of developers.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Syntax-Virtuoso/Anantavyay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 px-6 py-3 rounded-lg"
            >
              GitHub Discussions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;