'use client'

import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/lib/utils'

export default function ProductImages({
  images,
}: {
  images: string[]
}) {
  const [current, setCurrent] = React.useState(0)

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        priority
        className="h-auto w-full rounded-lg object-cover object-center"
        style={{ width: '100%', height: 'auto' }}
      />

      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            aria-label={`View product image ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={cn(
              'cursor-pointer overflow-hidden rounded border transition hover:border-orange-600',
              current === index && 'border-orange-500'
            )}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="h-auto object-cover"
              style={{ width: '100px', height: 'auto' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}


















// 'use client'
// import Image from 'next/image'
// import * as React from 'react'

// import { cn } from '@/lib/utils'

// export default function ProductImages({ images }: { images: string[] }) {
//   const [current, setCurrent] = React.useState(0)

//   return (
//     <div className="space-y-4">
//       <Image
//         src={images[current]}
//         alt="product image"
//         width={1000}
//         height={1000}
//         className="min-h-[300px] object-cover object-center "
//       />
//       <div className="flex">
//         {images.map((image, index) => (
//           <div
//             key={image}
//             className={cn(
//               'border   mr-2 cursor-pointer hover:border-orange-600',
//               current === index && '  border-orange-500'
//             )}
//             onClick={() => setCurrent(index)}
//           >
//             <Image src={image} alt={'image'} width={100} height={100} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }