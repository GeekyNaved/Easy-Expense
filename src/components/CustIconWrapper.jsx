// wrapper for icon - used as a common colored rounded border
const CustIconWrapper = ({children, className}) => {
  return <div className={`rounded-md ${className}`}>{children}</div>;
};

export default CustIconWrapper;
