interface CheckoutButtonProps {
  priceId: string;
  planName: string;
  price: number;
  className?: string;
  children: React.ReactNode;
}

const CheckoutButton = ({ priceId, planName, price, className, children }: CheckoutButtonProps) => {
  const handleCheckout = async () => {
    // For now, just show an alert. In a real implementation, this would integrate with Stripe
    alert(`Checkout for ${planName} plan ($${price}) - Price ID: ${priceId}`);
  };

  return (
    <button
      onClick={handleCheckout}
      className={className}
    >
      {children}
    </button>
  );
};

export default CheckoutButton;