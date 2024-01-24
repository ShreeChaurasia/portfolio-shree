import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default async function ProjectsPage() {
	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						{/* Projects that I've done. */}
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
				{/* project 1 */}
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Electricity Billing System
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								The Electricity Billing System, developed in Java, automates and streamlines electricity billing. It ensures precise calculation of consumption and efficient customer management. This innovation modernizes operations, resulting in a user-friendly and efficient billing process.
								</p>
								{/* <Link href={githublink}> */}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* </Link> */}
							</article>
					</Card>
				{/* project 2 */}
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Move With Joy
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								I developed the "Move with Joy" website with a focus on frontend design and user interface. This website offers a seamless and user-friendly platform for individuals seeking an easy relocation experience.
								</p>
								{/* <Link href={githublink}>*/}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* <Link /> */}
							</article>
					</Card>
					{/* project 3 */}
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Dice Game
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								The Dice Game is a project showcasing my understanding of the Document Object Model (DOM). It features two dice generating random numbers (1-6) to determine the winner between Player 1 and Player 2. This interactive exercise highlights my skills in HTML manipulation and user interaction within a concise web application.
								</p>
								{/* <Link href={githublink}>*/}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* <Link /> */}
							</article>
					</Card>
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Drum Kit
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								The Drum Kit, crafted using the Document Object Model (DOM) in JavaScript, offers a collection of distinct drum chords. Users can enjoy playing the drums either by clicking with the mouse or using the keyboard by pressing the desired keys. This project showcases my proficiency in DOM manipulation and interactive web development, providing an engaging experience for music enthusiasts.
								</p>
								{/* <Link href={githublink}>*/}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* <Link /> */}
							</article>
					</Card>
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Basic Portfolio 
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								This is my first portfolio website, built with pure HTML. CSS is embedded directly into the HTML file, seamlessly enhancing both style and functionality.
								</p>
								{/* <Link href={githublink}>*/}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* <Link /> */}
							</article>
					</Card>
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									TINDOG 
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								Tindog is a website I developed using Bootstrap (HTML + CSS + Bootstrap framework). It can be aptly described as a matrimonial platform designed for dogs, serving as a practical exercise for implementing the Bootstrap framework. This project not only demonstrates my proficiency in front-end development with Bootstrap but also adds a playful touch by creating a unique and whimsical platform for our canine friends.
								</p>
								{/* <Link href={githublink}>*/}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* <Link /> */}
							</article>
					</Card>
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Bakery Website 
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								This is a website curated using pure HTML, CSS.
								</p>
								{/* <Link href={githublink}>*/}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* <Link /> */}
							</article>
					</Card>
					<Card>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Random Business Idea Generator 
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								The 'Random Business Idea Generator' is a website I built using JavaScript's random number feature. It showcases my expertise in DOM manipulation and fundamental JavaScript concepts. Users can experience the thrill of generating unique business ideas with a simple click, making it both a technical showcase and an interactive tool.
								</p>
								{/* <Link href={githublink}>*/}
									<div className="bottom-4 md:bottom-8 mt-10" >
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Github <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								{/* <Link /> */}
							</article>
					</Card>
				</div>
			</div>
		</div>
	);
}
