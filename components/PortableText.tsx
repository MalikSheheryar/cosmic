import type React from 'react'
import { PortableText as PortableTextReact } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import { urlForImage } from '@/lib/sanity.image'
import Image from 'next/image'
interface PortableTextProps {
  value: any[]
}
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-6">
          <Image
            className="w-full h-auto rounded-lg"
            src={urlForImage(value).width(800).url() || '/placeholder.svg'}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-white mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-white mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-purple-200 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 italic text-purple-300 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-purple-200 ml-4 mb-4 space-y-1">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-purple-200 ml-4 mb-4 space-y-1">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-pink-400 hover:underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
}
const PortableText: React.FC<PortableTextProps> = ({ value }) => {
  return <PortableTextReact value={value} components={components} />
}
export default PortableText
