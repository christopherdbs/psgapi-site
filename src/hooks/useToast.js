import toast from "react-hot-toast";

const useToast = () => {
  const showToast = (success, message) => {
    if (success) toast.success(message);
    else toast.error(message);
  };
  return { showToast };
};

export { useToast };
