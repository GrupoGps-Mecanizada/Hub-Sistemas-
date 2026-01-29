import React from 'react';
import { 
  Package, 
  ClipboardCheck, 
  Wrench, 
  FileText, 
  Settings 
} from 'lucide-react';
import { SystemCard } from './components/SystemCard';
import { SystemLink } from './types';

const systems: SystemLink[] = [
  {
    title: 'Almoxarifado',
    description: 'Controle de EPI e Estoque',
    url: 'https://grupogps-mecanizada.github.io/Almoxarifado/',
    icon: Package,
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-900'
  },
  {
    title: 'Controle de Presença',
    description: 'Gestão de Ponto e Equipe',
    url: 'https://grupogps-mecanizada.github.io/Controle-De-Presen-a/',
    icon: ClipboardCheck,
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-900'
  },
  {
    title: 'Manutenção',
    description: 'Controle de Frota e Ordens',
    url: 'https://grupogps-mecanizada.github.io/Manuten-o-/',
    icon: Wrench,
    color: 'amber',
    gradient: 'from-amber-600 to-orange-900'
  },
  {
    title: 'Relatório de Turno',
    description: 'Oficial e Operacional',
    url: 'https://grupogps-mecanizada.github.io/Relat-rio-Turno---Oficial/',
    icon: FileText,
    color: 'purple',
    gradient: 'from-purple-600 to-violet-900'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden flex flex-col">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/10 blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col max-w-md mx-auto w-full p-6">
        
        {/* Header */}
        <header className="py-8 flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
            <Settings size={40} className="text-blue-400 animate-[spin_10s_linear_infinite]" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight uppercase">
              Gestão <span className="text-blue-500">GPS</span> Mecanizada
            </h1>
            <p className="text-sm text-slate-400 mt-2">
              Selecione o sistema para acessar
            </p>
          </div>
        </header>

        {/* Grid of Systems */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 content-start">
          {systems.map((system) => (
            <SystemCard key={system.title} system={system} />
          ))}
        </main>

        {/* Footer */}
        <footer className="py-8 text-center relative">
          <div className="flex flex-col items-center justify-center gap-2">
             <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
             <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-semibold">
                Desenvolvido por Warlison Abreu
             </p>
          </div>
        </footer>

      </div>
    </div>
  );
}