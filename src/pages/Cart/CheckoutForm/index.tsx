import { Formik, FormikValues, FormikHelpers } from "formik";
import "./styles.scss";
import Typography from "@/components/Typogrphy";
import Button from "@/components/Button";
import { formatPrice } from "@/utils";

interface FormValues {
  name: string;
  phone: string;
  address: string;
}

export function CheckoutForm() {
  const initialValues: FormValues = { name: "", phone: "", address: "" };

  const formattedPrice = formatPrice(1000);

  const validate = (values: FormikValues) => {
    const errors: FormikValues = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="checkout-form">
      <Typography variant="subtitle">Оформление заказа</Typography>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="test"
              name="name"
              placeholder="Имя"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <input
              type="text"
              name="address"
              placeholder="Адрес"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            <div className="price">
              <Typography variant="subtitle" kind="span">
                Итог:&nbsp;
              </Typography>
              <Typography
                className="price__amount"
                variant="subtitle"
                kind="span"
              >
                {formattedPrice} руб.
              </Typography>
            </div>
            <Button size="large" variant="transparent">
              Оформить заказ
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutForm;
