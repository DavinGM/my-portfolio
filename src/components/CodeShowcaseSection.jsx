import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Copy, Check } from 'lucide-react';
import { portfolioData } from '../mock';

const CodeShowcaseSection = () => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getLanguageColor = (lang) => {
    const colors = {
      javascript: '#F7DF1E',
      php: '#777BB4',
      bash: '#4EAA25'
    };
    return colors[lang] || '#8B5CF6';
  };

  return (
    <section id="code" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
               Pameran <span className="text-[#8B5CF6]">code</span>
            </h2>
            <p className="text-gray-400 text-lg">Sample code saya</p>
          </div>

          {/* Code Snippets */}
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-3 gap-2 bg-[#0f0f10] p-2 mb-8">
              {portfolioData.codeSnippets.map((snippet, index) => (
                <TabsTrigger
                  key={snippet.id}
                  value={index.toString()}
                  className="cursor-target data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white text-gray-400 transition-all duration-300 text-xs sm:text-sm"
                >
                  <Code className="h-4 w-4 mr-2 hidden sm:inline" />
                  {snippet.language}
                </TabsTrigger>
              ))}
            </TabsList>

            {portfolioData.codeSnippets.map((snippet, index) => (
              <TabsContent key={snippet.id} value={index.toString()} className="mt-8">
                <Card className="bg-[#0f0f10] border-[#2d2d2d] overflow-hidden">
                  {/* Code Header */}
                  <div className="flex items-center justify-between p-4 border-b border-[#2d2d2d]">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(snippet.language) }}
                      ></div>
                      <h3 className="text-white font-medium">{snippet.title}</h3>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(snippet.code, snippet.id)}
                      className="cursor-target text-gray-400 hover:text-white hover:bg-[#8B5CF6]/20"
                    >
                      {copiedId === snippet.id ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-sm">
                      <code className="text-gray-300 font-mono leading-relaxed">
                        {snippet.code}
                      </code>
                    </pre>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcaseSection;