'use client'

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation'
import { Camera } from 'lucide-react';
import Cookie from 'js-cookie'

import MediaPicker from './MediaPicker';
import { api } from '@/lib/api';
import { cookieTokenName } from '@/lib/auth';

export default function NewMemoryForm() {
  const router = useRouter()

  const handleCreateMemory = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const token = Cookie.get(cookieTokenName);

    console.log("token", token)

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('media', fileToUpload)

      const uploadResponse = await api.post<{ fileUrl: string }>('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    const createMemoryResponse = await api.post('/memories', {
      coverUrl,
      isPublic: formData.get('isPublic'),
      content: formData.get('content'),
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (createMemoryResponse.status < 200 || createMemoryResponse.status >= 300) {
      throw new Error('Erro no cadastro da memória')
    }

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
            <Camera className="w-4 h-4" />
            Anexar media
          </label>

          <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Tornar memória pública
          </label>
        </div>

        <MediaPicker />

        <textarea
          name="content"
          spellCheck="false"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        />

        <button
          type="submit"
          className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 self-end"
        >
          Salvar memória
        </button>
      </form>
  )
}