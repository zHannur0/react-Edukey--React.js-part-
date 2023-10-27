import { Field, ErrorMessage } from "formik";

function Input({name, label, ...props}) {
  return (<div className = "mb-4">
        <label htmlFor = {name} className = "block text-white text-sm font-bold mb-[2%]">
            {label}
        </label>
        <Field name = {name}>
            {({ field, meta }) => (
                <div>
                    <input className = {`${ meta.error && meta.touched ? "border-red-500" : "" } border shadow w-full py-2 px-3
                    text-white bg-[#1d1d1d] focus:outline-none focus:shadow-outline`} {...field} {...props} />
                    <ErrorMessage name={name} component = "div" className = "text-red-500 text-xs"></ErrorMessage>
                </div>
            )
            }
        </Field>
    </div>
  )
}

export default Input;