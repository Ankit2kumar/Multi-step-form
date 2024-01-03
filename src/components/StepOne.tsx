/** @format */

import OverView from './OverView';

export default function StepOne() {
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
				<div className="w-3/5 absolute bottom-3 right-10 top-10 flex flex-col">
					<h1 className="font-bold text-4xl text-blue-600">Personal info</h1>
					<p className="text-gray mt-5 text-slate-400 text-lg">
						Please provide your name, email address, and phone number
					</p>
					<div className=" flex flex-col">
						<label
							htmlFor="name"
							className="mt-5 font-bold text-blue-600 text-lg"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							placeholder="e.g. Ankit Kumar"
							className="rounded border p-3"
						/>
						<label
							htmlFor="Email"
							className="mt-5 font-bold text-blue-600 text-lg"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="e.g. ankitlucky.kumar99@gmail.com"
							className="rounded border p-3"
						/>
						<label
							htmlFor="PhoneNumber"
							className="mt-5 font-bold text-blue-600 text-lg"
						>
							Phone Number
						</label>
						<input
							type="number"
							id="phoneNumber"
							name="phoneNumber"
							required
							placeholder="e.g. 1 234 567 890"
							className="rounded border p-3"
						/>
					</div>
				</div>
				<div className="absolute bottom-8 right-16">
					<input
						className="font-normal bg-blue-600 text-md text-white p-3 rounded-lg text-center shadow"
						type="button"
						value="Next Step"
					/>
				</div>
			</section>
		</main>
	);
}
