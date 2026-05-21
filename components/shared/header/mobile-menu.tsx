'use client'

import Link from 'next/link'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { Button } from '@/components/ui/button'

import { Menu } from 'lucide-react'

type Props = {
  categories: {
    name: string
  }[]
}

export default function MobileMenu({
  categories,
}: Props) {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open Menu"
          className="text-white hover:bg-zinc-800"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-full w-[280px] border-zinc-800 bg-black text-white">
        <DrawerHeader className="border-b border-zinc-800">
          <DrawerTitle className="text-left text-lg font-semibold text-white">
            Categories
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col p-4">
          {categories.map((category) => (
            <DrawerClose
              asChild
              key={category.name}
            >
              <Link
                href={`/search?category=${category.name}`}
                className="rounded-md px-3 py-3 text-sm text-white transition-colors hover:bg-zinc-800"
              >
                {category.name}
              </Link>
            </DrawerClose>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}











// 'use client'

// import Link from 'next/link'

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from '@/components/ui/drawer'

// import { Button } from '@/components/ui/button'

// import { MenuIcon } from 'lucide-react'

// type Props = {
//   categories: {
//     name: string
//   }[]
// }

// export default function MobileMenu({ categories }: Props) {
//   return (
//     <Drawer direction="left">
//       <DrawerTrigger asChild>
//         <Button
//           variant="outline"
//           size="icon"
//           aria-label="Open menu"
//         >
//           <MenuIcon className="h-5 w-5" />
//         </Button>
//       </DrawerTrigger>

//       <DrawerContent className="h-full max-w-sm border-zinc-800 bg-black text-white">
//         <DrawerHeader>
//           <DrawerTitle>Select a category</DrawerTitle>

//           <div className="mt-4 space-y-1">
//             {categories.map((category) => (
//               <DrawerClose asChild key={category.name}>
//                 <Link
//                   href={`/search?category=${category.name}`}
//                   className="flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
//                 >
//                   {category.name}
//                 </Link>
//               </DrawerClose>
//             ))}
//           </div>
//         </DrawerHeader>
//       </DrawerContent>
//     </Drawer>
//   )
// }