/** @format */

import { StepProps } from "../types/stepProps";

export default function StepThree(props: StepProps) {
  return (
    <>
      <div className="w-3/5 absolute  right-10 top-10 flex flex-col">
        <h1 className="font-bold text-4xl text-blue-600">Pick add-ons</h1>
        <p className=" mt-2 text-slate-400 text-md">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col justify-evenly">
          <div className=" w-full border-indigo-600 border mt-6 rounded-md h-20">
            <div className="flex flex-row justify-between items-center h-full ml-8">
              <div>
                {" "}
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
                {" "}
                +$1/mo
              </div>
            </div>
          </div>
          <div className=" w-full border-indigo-600 border mt-6 rounded-md h-20">
            <div className="flex flex-row justify-between items-center h-full ml-8">
              <div>
                {" "}
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
                {" "}
                +$2/mo
              </div>
            </div>
          </div>
          <div className=" w-full  border mt-6 rounded-md h-20">
            <div className="flex flex-row justify-between items-center h-full ml-8">
              <div>
                {" "}
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
                {" "}
                +$2/mo
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between text-center mt-28">
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
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}
