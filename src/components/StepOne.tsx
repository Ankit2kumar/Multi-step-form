import OverView from "./OverView";

export default function StepOne() {
  const imgUrl = `bg-[url('../../multi-step-form-main/assets/images/bg-sidebar-desktop.svg')]`;
  return (
    <main className="bg-cyan-50 h-screen flex items-center justify-center">
      <section className="container flex flex-row w-3/4 h-4/5 bg-white rounded-md shadow-md relative">
        <div
          className={`absolute top-3 bottom-3 left-3 w-1/4 ${imgUrl} rounded-md flex flex-col items-start pl-4 pt-14`}
        >
          <OverView num={1} text="Your Info" />
          <OverView num={2} text="Select Plan" />
          <OverView num={3} text="add-ons" />
          <OverView num={4} text="Summary" />
        </div>
        <div className="w-3/5 absolute bottom-3 right-10 top-10 flex flex-col">
          <h1 className="font-bold text-4xl text-blue-600">Personal info</h1>
          <p className="text-gray mt-5 text-slate-400 text-lg">
            Please provide your name, email address, and phone number
          </p>
        </div>
      </section>
    </main>
  );
}
