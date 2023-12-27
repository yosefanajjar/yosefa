'use client'

import { Switch as HeadlessSwitch } from '@headlessui/react'
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const Switch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <div className='flex justify-center items-center'>
      <HeadlessSwitch
        checked={resolvedTheme === 'dark'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={`bg-black dark:bg-white
          relative h-10 w-24 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 flex justify-around items-center`}
      >
        <Image
          src="/sun.svg"
          alt="sun"
          width={24}
          height={24}
          className="inline-flex dark:hidden"
        />
        <span
          aria-hidden="true"
          className={`
                pointer-events-none inline-flex h-6 w-6 transform rounded-full light:bg-black bg-white dark:bg-black shadow-lg ring-0 transition-all duration-200 ease-in-out`}
        />
        <Image
          src="/moon.svg"
          alt="moon"
          width={24}
          height={24}
          className="dark:inline-flex hidden"
        />
      </HeadlessSwitch>
    </div>
  )
}
