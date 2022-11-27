import { useState } from "react";
import bgImg from "../../assets/images/bg-main-desktop.png";
import CardBack from "../../Components/CardBack";
import CardForm from "../../Components/CardForm";
import CardFront from "../../Components/CardFront";
import CardProps from "../../Interfaces/CardProps";
import { useForm, FormProvider } from "react-hook-form";
import Thanks from "../../Components/Thanks";

function App() {
  const imgBg = {
    backgroundImage: "url(" + bgImg + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgourndPosition: "center center",
  };

  const card: CardProps = {
    number: "",
    name: "",
    expiryMM: "",
    expiryYY: "",
    cvc: "",
    redirect: false,
  };

  const methods = useForm({
    defaultValues: card,
    mode: "onBlur",
  });

  const values = methods.watch();

  return (
    <FormProvider {...methods}>
      <div className="grid grid-rows-3 md:grid-cols-3 h-screen">
        <div
          className="row-span-1 md:col-span-1 md:row-span-3 flex md:flex-col flex-col-reverse justify-end md:justify-center md:place-items-end place-items-center px-5 md:px-0 pt-5 md:pt-0"
          style={imgBg}
        >
          <div className="-mt-24 mr-24 md:mt-0 md:-mr-32">
            {CardFront(values)}
          </div>
          <div className="ml-24 md:mt-12 md:-mr-44">{CardBack(values)}</div>
        </div>
        <div className="row-span-2 md:col-span-2">
          <div className="grid grid-rows-6 h-screen">
            <div className="row-span-4 flex justify-center items-end">
              {values.redirect ? <Thanks /> : <CardForm />}
            </div>
            <span className="flex justify-center items-end md:row-span-2">
              <div className="flex items-center">
                Challenge by &nbsp;
                <a
                  href="https://www.frontendmentor.io?ref=challenge"
                  target="_blank"
                >
                  Frontend Mentor
                </a>
                . Coded by &nbsp;
                <a href="https://github.com/henriquernandes" className="flex">
                  Henrique Ernandes Rebelo&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  .
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
