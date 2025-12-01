interface CustomButtonProps {
  text: string;
  link: string;
}

const CustomButton = ({ text, link }: CustomButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-dark text-light px-4 py-2 rounded-md hover:bg-orange active:scale-95 transition-transform font-primary-family"
    >
      {text}
    </a>
  );
};
export default CustomButton;
