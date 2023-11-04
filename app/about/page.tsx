import { Card } from '../components/card'
import Image from 'next/image';
import { Navigation } from "../components/nav";
import shreeimage from "public/shree-image.jpg"
export default function Page() {
    return (

        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Who am I?
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mx-auto lg:grid-cols-2 ">

                    <p className="mt-4 text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora reiciendis recusandae
                        sapiente fuga tenetur ad quidem laudantium mollitia nam impedit, vero aliquid, officiis
                        possimus odit veniam tempore quibusdam consequuntur. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Cupiditate voluptate quisquam eaque quaerat esse! Optio, minus ab.
                        Molestiae corporis quis nulla maxime aperiam tenetur iste quidem fugit inventore beatae,
                        quam sapiente, pariatur at modi exercitationem, minima velit blanditiis accusamus quia mollitia
                        nemo? Unde, deleniti labore rem necessitatibus vero doloribus eum facilis? Tempora velit vero
                        vel doloribus suscipit alias aspernatur, accusamus laborum. Praesentium iure saepe, nulla,
                        autem sapiente earum vel nisi tempora animi ipsa eveniet nobis ipsam quaerat quidem ullam.
                        Dolorum aperiam consequuntur praesentium architecto quis itaque perferendis, ab iste similique
                        eos nesciunt aliquam velit et omnis unde quo, voluptatum reiciendis.
                    </p>

                    <div className='relative h-500 mb-4 sm:mb-0'>
                        <Image
                            alt='shree-image'
                            src={shreeimage}
                            fill
                            sizes='(max-width: 768px) 213px'
                            quality={100}
                            className='rounded-lg object-[-16px] sm:object-center object-cover'
                        />
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800" />
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Experience
                    </h2>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li className="ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>

                </div>

            </div>
        </div>

    )
}
//card-top.jpg