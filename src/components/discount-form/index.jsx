import React from "react";
import { useForm, Controller } from "react-hook-form";
import { sendSaleData } from "../../store/async-actions";
import { useDispatch, useSelector } from "react-redux";
import { PHONE_REGEX } from "../../constants";


export const DiscountForm = () => {
  const dispatch = useDispatch();
  const isDiscountApplied = useSelector((state) => state.shop.discountApplied);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm();

  const onFormSubmit = (formData) => {
    dispatch(sendSaleData(formData));
  };

  console.log(errors);

  const { userPhone } = errors;
  const isPhoneNotValid = userPhone?.type && userPhone.type === "pattern";
  const isPhoneEmpty = userPhone?.type && userPhone.type === "required";

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Введите ваше имя"
          {...register("userName")}
        />
      </div>
      <Controller
        name="phone"
        type="tel"
        control={control}
        pattern="\d+"
        render={({ field }) => (
          <input
            {...field}
            onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ""))}
          />
        )}
      />
      {isPhoneEmpty && <h1>ЭТО ПОЛЕ ОБЯЗАТЕЛЬНО!</h1>}
      {isPhoneNotValid && <h1>ТУТ ДОЛЖНЫ БЫТЬ ТОЛЬКО ЧИСЛА!</h1>}
      <input
        type="tel"
        {...register("userPhone", {
          required: true,
          pattern: PHONE_REGEX,
          valueAsNumber: true
        })}
      />
      <input type="email" {...register("userEmail")} />
      <button disabled={isDiscountApplied} type="submit">
        {isDiscountApplied ? "Request applied" : "Get a discount"}
      </button>
    </form>
  );
};
