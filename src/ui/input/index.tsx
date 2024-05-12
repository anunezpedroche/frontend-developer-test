import "./index.css";

interface InputProps {
  name: string;
  value: string;
}

export default function Input({ name, value }: InputProps) {
  return (
    <input
      className="generic-input--primary"
      name={name}
      defaultValue={value}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
    />
  );
}
