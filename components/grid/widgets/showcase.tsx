import { FaArrowRight } from 'react-icons/fa6';
import Anchor from '../../ui/anchor';
import Card from '../../ui/card';

export default function Showcase() {
    return (
        <Card className='group relative flex h-full flex-col overflow-hidden'>
            {/* Decorative background */}
            <div className='absolute inset-0 bg-gradient-to-br from-sky-200 via-blue-300 to-indigo-300 dark:from-sky-900 dark:via-blue-800 dark:to-indigo-900' />
          
            {/* Floating mock UI elements */}
            <div className='relative flex h-full flex-col items-center justify-center gap-4 p-6'>
                {/* Browser window mockup */}
                <div className='w-full max-w-[200px] rotate-2 rounded-xl bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:rotate-0 dark:bg-dark-800/90'>
                    <div className='flex items-center gap-1.5 border-b border-gray-200 px-3 py-2 dark:border-dark-700'>
                        <div className='size-2 rounded-full bg-red-400' />
                        <div className='size-2 rounded-full bg-yellow-400' />
                        <div className='size-2 rounded-full bg-green-400' />
                        <div className='ml-2 h-2 w-16 rounded-full bg-gray-200 dark:bg-dark-600' />
                    </div>
                    <div className='space-y-2 p-3'>
                        <div className='h-2 w-3/4 rounded-full bg-gray-300 dark:bg-dark-600' />
                        <div className='h-2 w-1/2 rounded-full bg-gray-200 dark:bg-dark-700' />
                        <div className='mt-3 h-12 w-full rounded-lg bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900' />
                        <div className='h-2 w-2/3 rounded-full bg-gray-200 dark:bg-dark-700' />
                    </div>
                </div>

                {/* Second floating card */}
                <div className='absolute bottom-16 right-4 w-24 -rotate-6 rounded-lg bg-white/80 p-2 shadow-md transition-transform duration-500 group-hover:rotate-0 dark:bg-dark-800/80'>
                    <div className='h-8 w-full rounded bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900 dark:to-rose-900' />
                    <div className='mt-1.5 h-1.5 w-3/4 rounded-full bg-gray-300 dark:bg-dark-600' />
                    <div className='mt-1 h-1.5 w-1/2 rounded-full bg-gray-200 dark:bg-dark-700' />
                </div>
            </div>

            {/* Anchor link */}
            <div className='absolute bottom-3 left-3'>
                <Anchor className='cancel-drag' href='/projects' aria-label='View showcase'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>View Showcase</span>
                </Anchor>
            </div>
        </Card>
    );
}
