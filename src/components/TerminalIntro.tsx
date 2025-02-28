import { useState, useEffect } from 'react';

const TerminalIntro = () => {
  const [displayText, setDisplayText] = useState('');
  const professionalText = `
> whoami
Gianluca Mazza

> cat about.txt
AI Researcher and Blockchain Innovator with expertise in
Machine Learning Systems and Distributed Computing.
Currently advancing AI technologies at Venere Labs
and developing decentralized solutions at Scaling Parrots.

> ls ./skills
AI/ Blockchain/ Machine Learning/ Cryptocurrency/

> ./status
Currently training neural networks...
`;

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < professionalText.length) {
        currentText += professionalText[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [professionalText]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-green-500/20 shadow-lg max-w-2xl w-full font-mono text-sm md:text-base">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="text-green-400 whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">▊</span>
      </pre>
    </div>
  );
};

export default TerminalIntro;