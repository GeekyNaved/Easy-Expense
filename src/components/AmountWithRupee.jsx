// amount with inline rupee sign
const AmountWithRupee = ({amount, className}) => {
  return (
    <div className={`font-medium ${className}`}>
      <span>&#x20B9;</span>
      {amount}
    </div>
  );
};

export default AmountWithRupee;
