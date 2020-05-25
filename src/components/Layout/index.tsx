import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
  loading: boolean;
}

const LayoutContainer = styled.div``;

export const Layout = ({ children, loading }: LayoutProps) => {
  return <LayoutContainer>{loading ? <p>loading...</p> : children}</LayoutContainer>;
};
