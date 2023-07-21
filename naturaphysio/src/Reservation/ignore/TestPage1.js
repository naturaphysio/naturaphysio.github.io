import React, { useEffect } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
// import "./Form.css";

const ValidationForm = ({setFormData, formData}) => {
  const [fields, errors, form] = useFormInputValidation(
    {
      prenom: formData.prenom,
      nomFamille: formData.nomFamille,
      courriel: "",
      password: "",
      password_confirmation: "",
      phone_number: "",
      pickup_time: "",
      taxi: "",
      pickup_place: "",
      comments: "",
      dropoff_place: "",
      extras: []
    },
    {
      prenom: "required|username_available",
      nomFamille: "required|username_available",
      courriel: "required|email",
      password: "required|confirmed",
      password_confirmation: "required|same:password",
      phone_number: "required|numeric|digits_between:10,12",
      pickup_time: "required|date",
      taxi: "required",
      pickup_place: "required",
      comments: "required|max:20",
      dropoff_place: "required",
      extras: "required|array"
    }
  );

  useEffect(() => {
    form.registerAsync("username_available", function (
      username,
      attribute,
      req,
      passes
    ) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, "Username has already been taken.");
        // if username is not available
        else passes();
      }, 1000);
    });
  }, []);

  form.useLang(Lang.en);

  // let messages = form.getMessages(Lang.en);
  // console.log(messages);

  const onSubmit = async (event) => {
    event.preventDefault();
    const isValid = await form.validate(event);
    if (isValid) {
      console.log("MAKE AN API CALL", fields, errors);
    }
  };

  useEffect(() => {
    if (form.isValidForm) {
      console.log("MAKE AN API CALL ==> useEffect", fields, errors, form);
    }
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h3>React Form Input Validation - useFormInputValidation - Hook</h3>
      <form
        className="myForm"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <p>
          <label>
            Prenom
            <input
              type="text"
              name="prenom"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.prenom}
              // To override the attribute name
              data-attribute-name="Prénom du client"
              data-async
            />
          </label>
          <label className="error">
            {errors.prenom ? errors.prenom : ""}
          </label>
        </p>

        <p>
          <label>
            Nom de famille
            <input
              type="text"
              name="nomFamille"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.nomFamille}
              // To override the attribute name
              data-attribute-name="Nom de famille du client"
              data-async
            />
          </label>
          <label className="error">
            {errors.nomFamille ? errors.nomFamille : ""}
          </label>
        </p>

        <p>
          <label>
            Nom de famille
            <input
              type="tel"
              name="phone_number"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.phone_number}
            />
          </label>
          <label className="error">
            {errors.phone_number ? errors.phone_number : ""}
          </label>
        </p>

        <p>
          <label>
            Email
            <input
              type="email"
              name="courriel"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.courriel}
            />
          </label>
          <label className="error">
            {errors.courriel ? errors.courriel : ""}
          </label>
        </p>

        <p>
          <label>
            Password
            <input
              type="text"
              name="password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password}
            />
          </label>
          <label className="error">
            {errors.password ? errors.password : ""}
          </label>
        </p>

        <p>
          <label>
            Confirm Password
            <input
              type="text"
              name="password_confirmation"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password_confirmation}
            />
          </label>
          <label className="error">
            {errors.password_confirmation ? errors.password_confirmation : ""}
          </label>
        </p>

        <fieldset>
          <legend>Which taxi do you require?</legend>
          <p>
            <label className="choice">
              {" "}
              <input
                type="radio"
                name="taxi"
                onChange={form.handleChangeEvent}
                value="car"
              />{" "}
              Car{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="radio"
                name="taxi"
                onChange={form.handleChangeEvent}
                value="van"
              />{" "}
              Van{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="radio"
                name="taxi"
                onChange={form.handleChangeEvent}
                value="tuk tuk"
              />{" "}
              Tuk Tuk{" "}
            </label>
          </p>
          <label className="error">{errors.taxi ? errors.taxi : ""}</label>
        </fieldset>

        <fieldset>
          <legend>Extras</legend>
          <p>
            <label className="choice">
              {" "}
              <input
                type="checkbox"
                name="extras"
                onChange={form.handleChangeEvent}
                value="baby"
              />{" "}
              Baby Seat{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="checkbox"
                name="extras"
                onChange={form.handleChangeEvent}
                value="wheelchair"
              />{" "}
              Wheelchair Access{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="checkbox"
                name="extras"
                onChange={form.handleChangeEvent}
                value="tip"
              />{" "}
              Stock Tip{" "}
            </label>
          </p>
          <label className="error">{errors.extras ? errors.extras : ""}</label>
        </fieldset>

        <p>
          <label>
            Pickup Date
            <input
              type="date"
              name="pickup_time"
              onChange={form.handleChangeEvent}
              // onBlur={form.handleBlurEvent}
              value={fields.pickup_time}
            />
          </label>
          <label className="error">
            {errors.pickup_time ? errors.pickup_time : ""}
          </label>
        </p>

        <p>
          <label>
            Pickup Place
            <select
              id="pickup_place"
              name="pickup_place"
              value={fields.pickup_place}
              onChange={form.handleChangeEvent}
              onBlur={form.handleBlurEvent}
            >
              <option value="">Select One</option>
              <option value="office">Taxi Office</option>
              <option value="town_hall">Town Hall</option>
              <option value="telepathy">We'll Guess!</option>
            </select>
          </label>
          <label className="error">
            {errors.pickup_place ? errors.pickup_place : ""}
          </label>
        </p>

        <p>
          <label>
            Dropoff Place
            <input
              type="text"
              name="dropoff_place"
              value={fields.dropoff_place}
              onChange={form.handleChangeEvent}
              onBlur={form.handleBlurEvent}
              list="destinations"
            />
          </label>

          <datalist id="destinations">
            <option value="Airport" />
            <option value="Beach" />
            <option value="Fred Flinstone's House" />
          </datalist>
          <label className="error">
            {errors.dropoff_place ? errors.dropoff_place : ""}
          </label>
        </p>

        <p>
          <label>
            Special Instructions
            <textarea
              name="comments"
              maxLength="20"
              value={fields.comments}
              onChange={form.handleChangeEvent}
              onBlur={form.handleBlurEvent}
            ></textarea>
          </label>
          <label className="error">
            {errors.comments ? errors.comments : ""}
          </label>
        </p>

        <p>
          <button type="submit">Submit Booking</button>
        </p>
      </form>
    </div>
  );
};

export default ValidationForm;


// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import * as formik from 'formik';
// import * as yup from 'yup';

// function FormExample({setFormData, formData}) {
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//   });

//   const handleChangeName = (e) => {
//     const {name, value} = e.target;
//     setFormData({...formData, prenom: value});
// }

// const handleChangeFamille = (e) => {
//   const {name, value} = e.target;
//   setFormData({...formData, nomFamille: value});
// }

// const handleChangeCourriel = (e) => {
//   const {name, value} = e.target;
//   setFormData({...formData, courriel: value});
// }

// // const handleChangeTelephone = (e) => {
// //   const {name, value} = e.target;
// //   setFormData({...formData, telephone: value});
// // }

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       // initialValues={{
//       //   firstName: '',
//       //   lastName: formData.nomFamille,
//       //   username: formData.courriel,
//       //   city: '',
//       //   state: '',
//       //   zip: '',
//       //   terms: false,
//       // }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={formData.prenom}
//                 onChange={
//                   handleChangeName
//                 }
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={formData.nomFamille}
//                 onChange={handleChangeFamille}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={formData.courriel}
//                   onChange={handleChangeCourriel}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           {/* <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group> */}
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FormExample;