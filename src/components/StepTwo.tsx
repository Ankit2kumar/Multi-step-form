/** @format */

import OverView from './OverView';

export default function StepTwo() {
	const imgUrl = `bg-[url('../../multi-step-form-main/assets/images/bg-sidebar-desktop.svg')]`;
	const imgArcade = `[url('../../multi-step-form-main/assets/images/icon-arcade.svg')]`;
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
				<div className="w-3/5 absolute bottom-3 right-10 top-10 flex flex-col">
					<h1 className="font-bold text-4xl text-blue-600">Select your plan</h1>
					<p className=" mt-5 text-slate-400 text-lg">
						You have the option of monthly or yearly billing.
					</p>
					<div className="flex flex-row mt-10 justify-evenly items-center ">
						<div className="flex flex-row relative rounded-md w-36 h-40 border border-indigo-600">
							{/* <div className=""></div> */}
							<div className="absolute bottom-3 left-2 flex flex-col">
								<div className="font-semibold text-blue-600 text-lg text-center">
									Arcade
								</div>
								<div className="text-slate-400 text-center">$9/mo</div>
							</div>
						</div>
						<div className="flex flex-row relative rounded-md w-36 h-40 border border-indigo-600">
							{' '}
							<div className="absolute bottom-3 left-2 flex flex-col">
								<div className="font-semibold text-blue-600 text-lg text-center">
									Arcade
								</div>
								<div className="text-slate-400 text-center">$9/mo</div>
							</div>
						</div>
						<div className="flex flex-row relative rounded-md w-36 h-40 border border-indigo-600">
							{' '}
							<div className="absolute bottom-3 left-2 flex flex-col">
								<div className="font-semibold text-blue-600 text-lg text-center">
									Arcade
								</div>
								<div className="text-slate-400 text-center">$9/mo</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
