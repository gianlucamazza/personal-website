import { Terminal, Code, Cpu, Database, Server, Braces } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import TerminalIntro from './components/TerminalIntro';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-gray-100 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 min-h-screen flex items-start justify-center px-4 bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
        <div className="relative max-w-4xl mx-auto w-full">
          <TerminalIntro />
        </div>
      </section>

      {/* Tech Stack */}
      <Section title="Tech Stack" id="tech-stack" className="border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            icon={<Terminal className="w-8 h-8 text-blue-400" />}
            title="Core Systems"
            items={["Bitcoin Core", "Linux/Unix", "Docker", "Kubernetes"]}
          />
          <SkillCard
            icon={<Code className="w-8 h-8 text-blue-400" />}
            title="Languages"
            items={["Python", "TypeScript", "Rust", "Solidity"]}
          />
          <SkillCard
            icon={<Cpu className="w-8 h-8 text-blue-400" />}
            title="Blockchain"
            items={[
              "Bitcoin Protocol",
              "Ethereum/EVM",
              "Solana/SPL",
              "Layer 2 Solutions"
            ]}
          />
          <SkillCard
            icon={<Database className="w-8 h-8 text-blue-400" />}
            title="Data & AI"
            items={["Machine Learning", "Neural Networks", "Data Analysis", "PyTorch"]}
          />
          <SkillCard
            icon={<Server className="w-8 h-8 text-blue-400" />}
            title="Infrastructure"
            items={["AWS", "Azure", "CI/CD", "Microservices"]}
          />
          <SkillCard
            icon={<Braces className="w-8 h-8 text-blue-400" />}
            title="Web3"
            items={[
              "Smart Contracts",
              "DeFi Protocols",
              "Token Standards",
              "Cross-chain"
            ]}
          />
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects" id="projects" className="border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="AI Trading System"
            description="An advanced machine learning system for market prediction and automated trading strategies using deep neural networks."
            tags={["Python", "TensorFlow", "Time Series"]}
          />
          <ProjectCard
            title="Blockchain Analytics Engine"
            description="A real-time blockchain data analysis platform with ML-powered transaction pattern detection."
            tags={["Python", "ML", "Big Data"]}
          />
          <ProjectCard
            title="Neural Network Framework"
            description="A custom deep learning framework optimized for financial modeling and prediction tasks."
            tags={["PyTorch", "CUDA", "Mathematics"]}
          />
          <ProjectCard
            title="Mining Operations Dashboard"
            description="A real-time monitoring and optimization platform for large-scale cryptocurrency mining operations."
            tags={["React", "Node.js", "WebSocket"]}
          />
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section title="Experience" id="experience" className="border-t border-gray-800">
        <div className="space-y-6">
          <ExperienceCard
            title="Co-Founder"
            company="Venere Labs"
            period="October 2024 - Present"
            description="Leading AI research and development, focusing on machine learning applications in finance and blockchain. Building advanced neural networks for market prediction and automated trading systems."
            tech={["Python", "TensorFlow", "PyTorch", "Deep Learning"]}
            location="Italy"
          />
          <ExperienceCard
            title="Co-Founder & CTO"
            company="Scaling Parrots"
            period="May 2020 - Present"
            description="Leading a team of blockchain developers, architecting decentralized solutions, and implementing advanced cryptographic systems."
            tech={["Bitcoin", "Python", "Rust", "AWS"]}
            location="Italy"
          />
          <ExperienceCard
            title="Bitcoin Developer"
            company="Eidoo"
            period="2018 - September 2019"
            description="Led development and implementation of new functionalities for the Eidoo Bitcoin wallet. Conducted research and development for crypto wallets, driving innovation and maintaining industry-leading standards. Implemented continuous improvements and kept the product aligned with industry updates."
            tech={["Bitcoin Protocol", "Cryptography", "Wallet Development", "Liquid Network"]}
            location="Ticino, Switzerland"
          />
          <ExperienceCard
            title="Technical Operations Lead & Co-Founder"
            company="0301 Mining Farm"
            period="August 2017 - May 2019"
            description="Established and managed large-scale mining operations, developed advanced mining strategies, and optimized mining efficiency. Transformed initial concepts into a fully functional and profitable mining enterprise."
            tech={["Bitcoin Mining", "Hardware Optimization", "Operations Management"]}
            location="Sofia, Bulgaria"
          />
          <ExperienceCard
            title="Senior Software Developer"
            company="BHB - Blockchainlab"
            period="January 2017 - January 2019"
            description="Designed and developed Bitcoin and blockchain solutions for clients. Created proof-of-concepts, coordinated exchange listings, and implemented security protocols. Mentored junior developers and represented the company at industry events, delivering technical presentations at blockchain workshops and conferences."
            tech={["Bitcoin", "Blockchain", "PoC Development", "Security Protocols"]}
            location="Milano, Italia"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-blue-400">
          <p className="font-sans text-sm">© {new Date().getFullYear()} Gianluca Mazza</p>
        </div>
      </footer>
    </div>
  );
}

export default App;