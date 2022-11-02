import { useState, useCallback } from 'react';

const INITIAL_FORM = { name: '' };
const INITIAL_FORM_ERRORS = {
  name: false,
};
export const FORM_VALIDATORS = {
  name: (value) => value && /[A-Za-z0-9]+/.test(value),
};

const useFormHandlers = (
  initForm = INITIAL_FORM,
  initFormErrors = INITIAL_FORM_ERRORS,
  formValidators = FORM_VALIDATORS
) => {
  const [form, setForm] = useState(initForm);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [submittable, setSubmittable] = useState(false);

  const handleFormChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name && value && value !== form[name]) {
        setForm({ ...form, [name]: value });
      }
      if (Object.keys(form).map((name) => form[name] && !formErrors[name])) {
        setSubmittable(true);
      } else {
        setSubmittable(false);
      }
    },
    [form, formErrors]
  );
  const handleFormBlur = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name && value) {
        setForm({ ...form, [name]: value });
        setFormErrors({
          ...formErrors,
          [name]: !formValidators[name](value),
        });
      }
    },
    [form, formErrors, formValidators]
  );
  const handleFormFocus = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name && value) {
        setFormErrors({
          ...formErrors,
          [name]: false,
        });
      }
    },
    [formErrors]
  );
  const handleFormReset = useCallback(() => {
    setForm(INITIAL_FORM);
    setFormErrors(INITIAL_FORM_ERRORS);
  }, []);

  return {
    form,
    submittable,
    errors: formErrors,
    handleChange: handleFormChange,
    handleBlur: handleFormBlur,
    handleFocus: handleFormFocus,
    handleReset: handleFormReset,
  };
};

export default useFormHandlers;
