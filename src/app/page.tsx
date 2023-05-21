import EmptyMemories from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { getToken, isAuthenticated } from '@/lib/auth'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface MemoryDTO {
  id: string
  coverUrl: string
  content: string
  isPublic: boolean
  createdAt: string
}

export default async function Home() {
  if (!isAuthenticated()) return <EmptyMemories />

  const response = await api.get<MemoryDTO[]>('/memories', {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  const memories = response.data

  if (memories.length === 0) return <EmptyMemories />

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
        <div key={`memory_${memory.id}`} className="space-y-4">
          <time className='flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50'>
            {dayjs(memory.createdAt).locale(ptBr).format('D[ de ]MMMM[, ]YYYY')}
          </time>

          <Image
            src={memory.coverUrl}
            width={592}
            height={280}
            alt=""
            className='w-full aspect-video object-cover rounded-lg'
          />

          <p className="text-lg leading-relaxed text-gray-100">{memory.content}</p>

          <Link
            href={`/memories/${memory.id}`}
            className='flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100'
          >
            Ler mais
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      ))}
    </div>
  )
}
