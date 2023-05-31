import { Suspense } from "react";

import SuspenseFallbackComponent from "./suspense";

export default function LoadingPage() {
  return <Suspense fallback={<SuspenseFallbackComponent />} />;
}
