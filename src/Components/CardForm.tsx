// @ts-ignore
import CardFormProps from "../Interfaces/CardFormProps";
import CardProps from "../Interfaces/CardProps";
import { useFormContext, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import RedirectProps from "../Interfaces/RedirectProps";

const CardForm = () => {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderError = (error: any) => {
    return <p className="text-red">{error}</p>;
  };
  return (
    <form className="flex flex-col w-4/6 md:w-3/6">
      <div>
        <label
          htmlFor="cardNumber"
          className={"text-very-dark-violet font-normal"}
        >
          CARDHOLDER NAME
        </label>
        <input
          className={`bg-gray-200 appearance-none border ${
            errors.name ? "border-red" : "border-light-grayish-violet"
          } rounded-md w-full py-2 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-border-end mt-2`}
          {...register("name", {
            required: {
              value: true,
              message: "Can`t be blank",
            },
            pattern: {
              value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
              message: "Invalid name",
            },
          })}
          placeholder="e.g. Jane Appleseed"
        />
        {errors.name && renderError(errors?.name?.message)}
      </div>
      <div className="mt-5">
        <label
          htmlFor="cardName"
          className={"text-very-dark-violet font-normal"}
        >
          CARD NUMBER
        </label>
        <Controller
          control={control}
          name="number"
          rules={{
            required: {
              value: true,
              message: "Can`t be blank",
            },
            pattern: {
              value: /^([0-9]{4}[\s]){3}[0-9]{4}$/,
              message: "Invalid card number",
            },
          }}
          render={({ field }) => (
            <InputMask
              {...field}
              mask="9999 9999 9999 9999"
              maskChar={null}
              className={`bg-gray-200 appearance-none border ${
                errors.number ? "border-red" : "border-light-grayish-violet"
              } rounded-md w-full py-2 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-border-end mt-2`}
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={field.onChange}
            />
          )}
        />
        {errors.number && renderError(errors?.number?.message)}
      </div>
      <div className="flex">
        <div className="flex flex-col w-3/6">
          <label
            htmlFor="cardExpiry"
            className={"text-very-dark-violet font-normal mt-5"}
          >
            EXP. DATE (MM/YY)
          </label>
          <div className="flex">
            <div className="flex flex-col">
              <input
                className={`bg-gray-200 appearance-none border ${
                  errors.expiryMM ? "border-red" : "border-light-grayish-violet"
                } rounded-md w-4/5 py-2 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-border-end mb-5 mr-5 mt-2`}
                {...register("expiryMM", {
                  required: {
                    value: true,
                    message: "Can`t be blank",
                  },
                  pattern: {
                    value: /^[0-9]{2}$/,
                    message: "Invalid expiry month date",
                  },
                })}
                placeholder="MM"
                maxLength={2}
              />
              {errors.expiryMM && renderError(errors?.expiryMM?.message)}
            </div>
            <div className="flex flex-col">
              <input
                className={`bg-gray-200 appearance-none border ${
                  errors.expiryYY ? "border-red" : "border-light-grayish-violet"
                } rounded-md w-4/5 py-2 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-border-end mb-5 mt-2`}
                {...register("expiryYY", {
                  required: {
                    value: true,
                    message: "Can`t be blank",
                  },
                  pattern: {
                    value: /^[0-9]{2}$/,
                    message: "Invalid expiry year date",
                  },
                })}
                placeholder="YY"
                maxLength={2}
              />
              {errors.expiryYY && renderError(errors?.expiryYY?.message)}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/6">
          <label
            htmlFor="cardCvc"
            className={"text-very-dark-violet font-normal mt-5"}
          >
            CVC
          </label>
          <div className="flex flex-col">
            <input
              className={`bg-gray-200 appearance-none border ${
                errors.cvc ? "border-red" : "border-light-grayish-violet"
              } rounded-md w-full py-2 px-4 text-xl text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-border-end mt-2`}
              {...register("cvc", {
                required: {
                  value: true,
                  message: "Can`t be blank",
                },
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: "Invalid cvc",
                },
              })}
              placeholder="e.g. 123"
              maxLength={3}
            />
            {errors.cvc && renderError(errors?.cvc?.message)}
          </div>
        </div>
      </div>
      <button
        className="bg-very-dark-violet text-white px-3 py-4 rounded-md mt-7"
        onClick={() => setValue("redirect", true)}
      >
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
