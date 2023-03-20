import React from 'react';
import PublicLayout from "../components/layouts/PublicLayout";

interface Props {
  children: React.ReactNode
}

const PublicRoute = ({ children }: Props): JSX.Element => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default PublicRoute;
