import { Suspense } from "react";

export const SuspenseDecorator = (story: () => any) => {
    return <Suspense>{story()}</Suspense>;
};
