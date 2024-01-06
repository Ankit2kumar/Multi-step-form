/** @format */

import { StepProps } from "../types/stepProps";

export default function StepFour(props: StepProps) {
  return (
    <>
      <div className="w-3/5 absolute  right-10 top-10 flex flex-col">
        <h1 className="font-bold text-4xl text-blue-600">Finishing up</h1>
        <p className=" mt-2 text-slate-400 text-md">
          Double-check everything looks OK before confirming.
        </p>

        <div className="w-full h-60 rounded-md bg-slate-100 mt-10">
          <div className="flex flex-row justify-between items-center">
            <div className="font-bold text-md text-blue-600 ml-6 mt-6">
              Arcade(monthly)
              <div className="underline font-normal text-slate-400">Change</div>
            </div>
            <div className="font-bold text-md text-blue-600 mr-6 mt-6">
              $9/mo
            </div>
          </div>
          <hr className="mx-auto mt-6 " />
          <div className="flex flex-row justify-between items-center">
            <div className="font-normal text-slate-400 ml-6 mt-4">
              Online service
            </div>
            <div className="font-bold text-md text-blue-600 mr-6 mt-6">
              +$1/mo
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="font-normal text-slate-400 ml-6 mt-4">
              Larger storage
            </div>
            <div className="font-bold text-md text-blue-600 mr-6 mt-4">
              +$2/mo
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="font-normal text-slate-400 ml-6 mt-4">
            Total(per month)
          </div>
          <div className="font-bold text-md text-blue-600 mr-6 mt-4">
            +$12/mo
          </div>
        </div>

        <div className="flex flex-row justify-between text-center mt-20 ">
          <button
            className="font-normal  text-md text-slate-400 p-3 rounded-lg text-center"
            onClick={props.goBack}
          >
            Go Back
          </button>

          <button
            className="font-normal bg-blue-600 text-md text-white p-3 rounded-lg text-center shadow"
            onClick={props.goForward}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
