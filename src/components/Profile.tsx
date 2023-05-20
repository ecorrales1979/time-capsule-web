import Image from 'next/image'

import { getUser } from '@/lib/auth'

export default function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left w-full">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <Image
          src={avatarUrl}
          alt="Avatar"
          width="40"
          height="40"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div className="text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Quero sair
        </a>
      </div>
    </div>
  )
}
