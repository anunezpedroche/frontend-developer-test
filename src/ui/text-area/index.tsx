import "./index.css";
interface TextAreaProps {
  value: string;
  name: string;
}

export default function TextArea({ value, name }: TextAreaProps) {
  return (
    <textarea
      className="generic-textarea--primary"
      defaultValue={value}
      name={name}
    />
  );
}
