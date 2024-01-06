import Form from "./components/Form";
import OverView from "./components/OverView";
import "./index.css";

function App() {
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
        <Form />
      </section>
    </main>
  );
}

export default App;
