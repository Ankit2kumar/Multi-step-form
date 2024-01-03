type overviewParams = {
  num: number;
  text: string;
};

export default function OverView(params: overviewParams) {
  return (
    <div className="flex flex-row items-center justify-center gap-4 text-white text-bold pb-6">
      <p className="rounded-full bg-cyan-500 h-10 w-10 items-center justify-center flex border-gray-100 border-2">
        {params.num}
      </p>
      <div className="flex-col">
        <h2>Step {params.num}</h2>
        <p>{params.text.toUpperCase()}</p>
      </div>
    </div>
  );
}
