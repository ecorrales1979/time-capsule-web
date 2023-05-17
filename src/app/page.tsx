export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left section */}
      <div className="relative flex flex-col items-start justify-between px28 p-16 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 blur-full rounded-full" />

        <div className="flex flex-1 flex-col items-start justify-between">
          <div className="flex">Crie sua conta e salve suas memórias!</div>
          <div className="flex">
            <p className="font-bold text-[40px]">Sua cápsula do tempo</p>
          </div>
          <div className="flex">Feito com 💜 no NLW da Rocketseat</div>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex flex-col p-16">
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
