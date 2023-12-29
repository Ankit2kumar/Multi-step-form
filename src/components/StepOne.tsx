/** @format */

export default function StepOne() {
	return (
		<>
			<div className="bg-cyan-100 min-h-screen">
				<div className="container grid grid-cols-2 px-12 py-12 mx-auto w-1/2 gap-8">
					<div className="bg-[url('../../multi-step-form-main/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat min-h-[85vh] bg-white]">
						<div className="flex flex-cols ">
							<button className="rounded-full bg-white p-3 m-8">1</button>
							<div className="mt-8">
								<div className="text-white text-bold">Step 1</div>
								<div className="text-white text-bold">YOUR INFO</div>
							</div>
						</div>
						<div className="flex flex-rows ">
							<button className="rounded-full bg-white p-3 m-8">2</button>
							<div className="mt-8 ">
								<div className="text-white text-bold">Step 2</div>
								<div className="text-white text-bold">SELECT PLAN</div>
							</div>
						</div>
						<div className="flex flex-rows ">
							<button className="rounded-full bg-white p-3 m-8">3</button>
							<div className="mt-8 ">
								<div className="text-white text-bold">Step 3</div>
								<div className="text-white text-bold">ADD-ONS</div>
							</div>
						</div>
						<div className="flex flex-rows ">
							<button className="rounded-full bg-white p-3 m-8">4</button>
							<div className="mt-8 ">
								<div className="text-white text-bold">Step 4</div>
								<div className="text-white text-bold">SUMMARY</div>
							</div>
						</div>
					</div>
					<div className="py-3 flex flex-col w-1/2">
						<span className="font-bold text-4xl text-blue-600 ">
							Personal info
						</span>
						<span className="text-gray mt-5 text-slate-400 text-xl ">
							Please provide your name, email address, and phone number
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
