'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function QuickViewModalWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const [open, setOpen] = useState(true)

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value)

        if (!value) {
          setTimeout(() => {
            router.back()
          }, 150)
        }
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogTitle className="sr-only">
          Product Quick View
        </DialogTitle>

        <DialogDescription className="sr-only">
          Product quick preview modal
        </DialogDescription>

        {children}
      </DialogContent>
    </Dialog>
  )
}







// 'use client'

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogTitle,
// } from '@/components/ui/dialog'

// import { useRouter } from 'next/navigation'

// export default function QuickViewModalWrapper({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const router = useRouter()

//   const handleOpenChange = (open: boolean) => {
//     if (!open) {
//       router.push('/')
//     }
//   }

//   return (
//     <Dialog
//       open={true}
//       onOpenChange={handleOpenChange}
//     >
//       <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
//         <DialogTitle className="sr-only">
//           Product Quick View
//         </DialogTitle>

//         <DialogDescription className="sr-only">
//           Quick view modal for viewing product details.
//         </DialogDescription>

//         {children}
//       </DialogContent>
//     </Dialog>
//   )
// }










// 'use client'

// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
// } from '@/components/ui/dialog'

// import { useRouter } from 'next/navigation'

// export default function QuickViewModalWrapper({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const router = useRouter()

//   return (
//     <Dialog
//       open
//       onOpenChange={() => router.back()}
//     >
//       <DialogContent className="max-w-5xl">
//         <DialogTitle className="sr-only">
//           Product Quick View
//         </DialogTitle>

//         {children}
//       </DialogContent>
//     </Dialog>
//   )
// }