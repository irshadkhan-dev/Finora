import React from "react";
import { TriangleAlertIcon } from "lucide-react";

const ErrorCard = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <div className="flex gap-2 w-full px-6 py-2 text-sm text-destructive mt-2 shadow-md rounded items-center">
      <TriangleAlertIcon />
      <div className="w-full">{errorMsg}</div>
    </div>
  );
};

export default ErrorCard;
