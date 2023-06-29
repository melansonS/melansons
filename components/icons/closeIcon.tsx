interface ICloseProps {
  height: number;
  width: number;
}

const CloseIcon = ({ height, width }: ICloseProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 16 16"
      data-testid="closeIcon"
    >
      <title>Close Icon</title>
      <line x1="1" y1="11" x2="11" y2="1" strokeWidth="2" />
      <line x1="1" y1="1" x2="11" y2="11" strokeWidth="2" />
    </svg>
  );
};

export default CloseIcon;
