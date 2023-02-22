import React, { ReactNode } from "react";
import "./StatusBadge.scss";

interface StatusBadgeProps {
  status: "success" | "error";
  children: ReactNode;
}

function StatusBadge({ status, children }: StatusBadgeProps) {
  return <div className={`status-badge ${status}`}>{children}</div>;
}

export default StatusBadge;
