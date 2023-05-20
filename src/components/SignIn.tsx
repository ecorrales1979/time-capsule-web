import { User } from 'lucide-react';

import { signInUrl } from '@/lib/auth';

export default function SignIn() {
  return (
    <a
      href={signInUrl}
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>
      <div className="max-w-[140px] text-sm leading-snug">
        <span className="underline">Crie sua conta</span> e salve suas
        memórias!
      </div>
    </a>
  )
}