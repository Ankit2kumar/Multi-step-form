/** @format */
import { useState } from 'react';
import { StepProps } from '../types/stepProps';

export default function StepOne(props: StepProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.goForward();
	};

	return (
		<>
			<div className="w-3/5 absolute bottom-3 right-10 top-10 flex flex-col">
				<h1 className="font-bold text-4xl text-blue-600">Personal info</h1>
				<p className="text-gray mt-5 text-slate-400 text-lg">
					Please provide your name, email address, and phone number
				</p>
				<form className=" flex flex-col" onSubmit={handleSubmit}>
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
						onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
					/>
					<div className="absolute bottom-8 right-16">
						<button
							className="font-normal bg-blue-600 text-md text-white p-3 rounded-lg text-center shadow"
							type="submit"
						>
							Next Step
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
