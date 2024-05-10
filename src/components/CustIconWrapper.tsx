// wrapper for icon - used as a common colored rounded border
interface CustIconWrapperProps {
  className: string;
  children: React.ReactNode;
}
const CustIconWrapper: React.FC<CustIconWrapperProps> = ({children, className}) => {
  return <div className={`rounded-md ${className}`}>{children}</div>;
};

export default CustIconWrapper;
