import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const axiosSecure = useAxiosSecure();
  // const [paymentInfo, setPaymentInfo] = useState({});

  console.log("session id: ", sessionId);
  console.log("Payment successful! Session ID:", sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((response) => {
          console.log("Payment success response:", response.data);
          // setPaymentInfo({
          //   transactionId: response.data.transactionId,
          //   trackingId: response.data.trackingId,
          // });
        })
        .catch((error) => {
          console.error("Error confirming payment success:", error);
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2>Payment succesful </h2>
    </div>
  );
};

export default PaymentSuccess;
