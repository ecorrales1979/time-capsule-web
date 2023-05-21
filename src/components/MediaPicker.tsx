'use client'

import { ChangeEvent, useState } from 'react'

export default function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) return

    const previewUrl = URL.createObjectURL(files[0])
    setPreview(previewUrl)
  }

  return (
    <>
      <input
        type="file"
        id="media"
        onChange={onFileSelected}
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="Preview"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
