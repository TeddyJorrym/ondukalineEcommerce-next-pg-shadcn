'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ReloadButton = ({ slug }: { slug: string }) => {
  return (
    <Button asChild variant="default" className="w-full">
      <Link href={`/product/${slug}`}>
        View Product
      </Link>
    </Button>
  )
}

export default ReloadButton










// 'use client'

// import Link from 'next/link'

// import { Button } from '@/components/ui/button'

// const ReloadButton = ({
//   slug,
// }: {
//   slug: string
// }) => {
//   return (
//     <Button
//       asChild
//       variant="default"
//       className="w-full"
//     >
//       <Link href={`/product/${slug}`}>
//         View Product
//       </Link>
//     </Button>
//   )
// }

// export default ReloadButton









// 'use client'

// import React from 'react'

// import { Button } from '@/components/ui/button'

// const ReloadButton = () => {
//   return (
//     <Button
//       onClick={() => window.location.reload()}
//       variant="default"
//       className="w-full"
//     >
//       View Product
//     </Button>
//   )
// }

// export default ReloadButton