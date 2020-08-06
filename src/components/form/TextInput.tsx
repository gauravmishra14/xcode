import React from "react";

interface ITextInputProps {
  name?: string;
  type?: string;
  required?: string;
  onChange?: any;
  onBlur?: any;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  value?: string;
  customClass?: string;
  disabled?: boolean;
  steps?: number;
  min?: string;
  max?: string;
  maxLength?: number | undefined;
}

const TextInput = (props: ITextInputProps) => {
  const {
    name,
    type,
    onChange,
    autoComplete,
    required,
    onBlur,
    placeholder,
    label,
    error,
    value,
    customClass,
    disabled,
    steps,
    min,
    max,
    maxLength,
  } = props;
  const onBlurDefault = (e: React.FormEvent<HTMLInputElement>) => {};
  const onChangeDefault = (e: React.FormEvent<HTMLInputElement>) => {};
  return (
    <>
      <div className="form-group">
        <div className="field-holder">
          <input
            step={steps ? steps : ""}
            min={min ? min : ""}
            max={max ? max : ""}
            maxLength={maxLength ? maxLength : 100}
            disabled={disabled}
            className={`form-control ${customClass && customClass}`}
            type={type}
            required={required === "true" ? true : false}
            placeholder={placeholder}
            name={name}
            autoComplete={autoComplete}
            onChange={onChange ? (e) => onChange(e) : onChangeDefault}
            onBlur={onBlur ? (e) => onBlur(e) : onBlurDefault}
            value={value}
          />
           {label && label && <label>{label}</label>}
        </div>
        <div className="reg-error-parent">
          <p className="reg-error">{error}</p>
        </div>
      </div>
    </>
  );
};

export default TextInput;
