interface TextAreaProps {
  value: string;
  name: string;
}

export default function TextArea({ value, name }: TextAreaProps) {
  return <textarea defaultValue={value} name={name} />;
}
