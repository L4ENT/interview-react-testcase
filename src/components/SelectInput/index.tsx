import React, { useRef, useState } from "react";
import "./styles.scss";
import Typography from "../Typogrphy";
import { SelectInputIcon } from "../Icons";

type SelectOption<T> = {
  value: T;
  label: string;
};

type SelectInputProps<T> = {
  options: SelectOption<T>[];
  onChange: (val: T) => void;
  defaultValue?: T;
  disabled?: boolean;
};

function SelectInput<T>({
  options,
  defaultValue,
  onChange,
  disabled,
}: SelectInputProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    String(defaultValue ?? options[0].value) ?? ""
  ); // Track the selected option
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const selectOption = (value: T) => {
    setSelectedOption(String(value));
    setIsOpen(false);
    onChange(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Add an event listener to handle clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLabel =
    options.find((x) => x.value === selectedOption)?.label ??
    "Выберите значение";

  return (
    <div className="select-input" ref={dropdownRef}>
      <div className="input-header" onClick={toggleDropdown}>
        {selectedLabel} <SelectInputIcon/>
      </div>
      {isOpen && (
        <ul className="input-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => selectOption(option.value)}>
              <Typography variant="body1">{option.label}</Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectInput;
