import Input from "./input";
import Label from "./label";

const LabeledInput = ({ label, name, type, placeholder, register }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        register={register}
      />
    </>
  );
};
export default LabeledInput;
