import { ErrorPage } from "Pages/Error";
import React, { ErrorInfo, ReactNode, Suspense } from "react";

interface Props {
  children: ReactNode;
}

interface StateType {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, StateType> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false } as StateType;
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <Suspense fallback={""}>
          <ErrorPage />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
