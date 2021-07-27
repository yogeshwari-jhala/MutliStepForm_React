import React, { useState } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";


export default function Form() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
  });
  const values = user;

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) =>
    setUser({ ...user, [input]: e.target.value });

  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
        );
      case 4:
        return <Success />;
      default:
        return null;
    }
  };

  return <>{switchStep()}</>;
}