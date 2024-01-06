import { useState } from "react";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import LastStep from "./LastStep";

export default function Form() {
  const [page, setPage] = useState(1);
  const goForward = () => {
    if (page < 5) {
      setPage((page) => page + 1);
    }
  };
  const goBack = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };
  const conditionalRender = (page: number): JSX.Element => {
    switch (page) {
      case 1:
        return <StepOne page={page} goForward={goForward} goBack={goBack} />;
      case 2:
        return <StepTwo page={page} goForward={goForward} goBack={goBack} />;
      case 3:
        return <StepThree page={page} goForward={goForward} goBack={goBack} />;
      case 4:
        return <StepFour page={page} goForward={goForward} goBack={goBack} />;
      case 5:
        return <LastStep />;
      default:
        return <StepOne page={page} goForward={goForward} goBack={goBack} />;
    }
  };

  return <>{conditionalRender(page)}</>;
}
