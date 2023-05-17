import { User } from 'lucide-react';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left section */}
      <div className="relative flex flex-col items-start justify-between px28 p-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 blur-full rounded-full" />

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

        {/* Sign in section */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <div className="text-sm leading-snug max-w-[140px]">
            <span className="underline">Crie sua conta</span> e salve suas memórias!
          </div>
        </a>
        
        {/* Hero section */}
          <div className="flex">
            <p className="font-bold text-[40px]">Sua cápsula do tempo</p>
          </div>
          
          <div className="flex">Feito com 💜 no NLW da Rocketseat</div>
        
      </div>
      {/* Right Section */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">criar agora</a>!
          </p>
        </div>
      </div>
    </main>
  );
}
