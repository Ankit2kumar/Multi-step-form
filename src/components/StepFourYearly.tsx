/** @format */

import OverView from './OverView';

export default function StepFourYearly() {
	const imgUrl = `bg-[url('../../multi-step-form-main/assets/images/bg-sidebar-desktop.svg')]`;

	return (
		<main className="bg-cyan-50 h-screen flex items-center justify-center">
			<section className="relative container flex flex-row w-3/4 h-4/5 bg-white rounded-md shadow-md">
				<div
					className={`absolute top-3 bottom-3 left-3 w-1/4 ${imgUrl} rounded-md flex flex-col items-start pl-4 pt-14 bg-no-repeat`}
				>
					<OverView num={1} text="Your Info" />
					<OverView num={2} text="Select Plan" />
					<OverView num={3} text="Add-ons" />
					<OverView num={4} text="Summary" />
				</div>
				<div className="w-3/5 absolute  right-10 top-10 flex flex-col">
					<h1 className="font-bold text-4xl text-blue-600">Finishing up</h1>
					<p className=" mt-2 text-slate-400 text-md">
						Double-check everything looks OK before confirming.
					</p>
					{/* <div className="grid grid-col-3 gap-y-4 w-full h-[200px] justify-evenly">
						<div className="rounded-md border border-indigo-600">
							<div className="flex flex-row items-center justify-center">
								<div className=" ml-5 ">
									<input
										type="checkbox"
										id="onlineServices"
										name="Online services"
										checked
									/>
									<label htmlFor="onlineServices"></label>
								</div>
								<div className="flex flex-col">
									<div className="font-bold text-lg text-blue-600">
										Online Service
									</div>
									<div className="mt-2 text-slate-400 text-lg">
										Access to multiplayer games
									</div>
								</div>
								<div></div>
							</div>
						</div>
						<div className="rounded-md border border-indigo-600 min-w-full">
							1
						</div>
						<div className="rounded-md border border-indigo-600 min-w-full">
							1
						</div>
					</div> */}
					{/* <div className="flex flex-col justify-evenly">
						<div className=" w-full border-indigo-600 border mt-6 rounded-md h-20">
							<div className="flex flex-row justify-between items-center h-full ml-8">
								<div>
									{' '}
									<svg
										className="fill-current bg-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="9"
										viewBox="0 0 12 9"
									>
										<path
											fill="none"
											stroke="#FFF"
											stroke-width="2"
											d="m1 4 3.433 3.433L10.866 1"
										/>
									</svg>
								</div>
								<div className="flex flex-col justify-between items-center">
									<div className="font-bold text-lg text-blue-600">
										Online Service
									</div>
									<div className=" text-slate-400 text-lg">
										Access to multiplayer games
									</div>
								</div>

								<div className="flex flex-row justify-between items-center text-center text-blue-900 mr-6">
									{' '}
									+$1/mo
								</div>
							</div>
						</div>
						<div className=" w-full border-indigo-600 border mt-6 rounded-md h-20">
							<div className="flex flex-row justify-between items-center h-full ml-8">
								<div>
									{' '}
									<svg
										className="fill-current bg-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="9"
										viewBox="0 0 12 9"
									>
										<path
											fill="none"
											stroke="#FFF"
											stroke-width="2"
											d="m1 4 3.433 3.433L10.866 1"
										/>
									</svg>
								</div>
								<div className="flex flex-col justify-between items-center">
									<div className="font-bold text-lg text-blue-600">
										Larger Storage
									</div>
									<div className=" text-slate-400 text-lg">
										Extra 1TB of cloud save
									</div>
								</div>

								<div className="flex flex-row justify-between items-center text-center text-blue-900 mr-6">
									{' '}
									+$2/mo
								</div>
							</div>
						</div>
						<div className=" w-full  border mt-6 rounded-md h-20">
							<div className="flex flex-row justify-between items-center h-full ml-8">
								<div>
									{' '}
									<svg
										className="fill-current bg-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="9"
										viewBox="0 0 12 9"
									>
										<path
											fill="none"
											stroke="#FFF"
											stroke-width="2"
											d="m1 4 3.433 3.433L10.866 1"
										/>
									</svg>
								</div>
								<div className="flex flex-col justify-between items-center">
									<div className="font-bold text-lg text-blue-600">
										Customizable profile
									</div>
									<div className=" text-slate-400 text-lg">
										Custom theme on your profile
									</div>
								</div>

								<div className="flex flex-row justify-between items-center text-center text-blue-900 mr-6">
									{' '}
									+$2/mo
								</div>
							</div>
						</div>
					</div> */}
					<div className="w-full h-60 rounded-md bg-slate-100 mt-10">
						<div className="flex flex-row justify-between items-center">
							<div className="font-bold text-md text-blue-600 ml-6 mt-6">
								Arcade(yearly)
								<div className="underline font-normal text-slate-400">
									Change
								</div>
							</div>
							<div className="font-bold text-md text-blue-600 mr-6 mt-6">
								$90/mo
							</div>
						</div>
						<hr className="mx-auto mt-6 " />
						<div className="flex flex-row justify-between items-center">
							<div className="font-normal text-slate-400 ml-6 mt-4">
								Online service
							</div>
							<div className="font-bold text-md text-blue-600 mr-6 mt-6">
								+$10/mo
							</div>
						</div>
						<div className="flex flex-row justify-between items-center">
							<div className="font-normal text-slate-400 ml-6 mt-4">
								Larger storage
							</div>
							<div className="font-bold text-md text-blue-600 mr-6 mt-4">
								+$20/mo
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-between items-center">
						<div className="font-normal text-slate-400 ml-6 mt-4">
							Total(per year)
						</div>
						<div className="font-bold text-md text-blue-600 mr-6 mt-4">
							+$120/mo
						</div>
					</div>

					<div className="flex flex-row justify-between text-center mt-20 ">
						<input
							className="font-normal inline-block text-md text-slate-400 p-4 rounded-lg text-center"
							type="button"
							value="Go Back"
						/>

						<input
							className="font-normal inline-block bg-blue-800 text-md text-white p-4 rounded-lg text-center shadow"
							type="button"
							value="Confirm"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
