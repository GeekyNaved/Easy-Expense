// amount with inline rupee sign

interface AmountWithRupeeProps {
  amount: number;
  className: string;
}

const AmountWithRupee: React.FC<AmountWithRupeeProps> = ({ amount, className }) => {
  return (
    <div className={`font-medium ${className}`}>
      <span>&#x20B9;</span>
      {amount}
    </div>
  );
};

export default AmountWithRupee;
