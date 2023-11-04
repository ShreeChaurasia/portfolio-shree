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
				</div>
			</div>
		</div>
	);
}
