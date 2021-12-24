const FixedButtonContainer = ({ children, position }) => {
  return (
    <div className={`fixed-${position}-button-container gap-2`}>{children}</div>
  );
};

export default FixedButtonContainer;
