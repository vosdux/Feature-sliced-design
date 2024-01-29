import { PropsWithChildren } from "react";

type Props = {
    isError: boolean;
};

export const ErrorStatus = ({ isError, children }: PropsWithChildren<Props>) => (
    isError ? <p>Error</p> : children
)