import React from "react";
import { resendToken } from "../services/api";
import toast, { Toaster } from "react-hot-toast";

import { useAuth } from "../hooks/useAuth";
function Account() {
  const { isAuthenticated } = useAuth();

  function askToken() {
    resendToken().then((res) => {
      if (res.success) toast.success(res.message);
      if (!res.success) toast.error(res.message);
    });
  }

  return (
    <>
      {isAuthenticated && (
        <div className="space m-auto flex w-[75vw] flex-col text-justify text-slate-900">
          <h2 className="mt-16 text-2xl font-bold">Account Page</h2>
          <p>You can resend current token through mail.</p>
          <div>
            <button onClick={askToken}>Resend</button>
          </div>
          <p>More features to come soon. Work in progress.</p>
          <Toaster />
        </div>
      )}
    </>
  );
}

export default Account;
