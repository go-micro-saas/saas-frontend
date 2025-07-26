import React, {lazy} from 'react';

// layout
const PageTopBorder = lazy(
  () => import ( '@src/components/layouts/PageTopBorder.tsx'),
);
const PageHeader = lazy(
  () => import ( '@src/components/layouts/PageHeader.tsx'),
);
const PageContent = lazy(
  () => import ( '@src/components/layouts/PageContent.tsx'),
);
const PageFooter = lazy(
  () => import ( '@src/components/layouts/PageFooter.tsx'),
);

const Dashboard: React.FC = () => {
  return (
    <>
      <PageTopBorder/>
      <PageHeader/>
      <PageContent/>
      <PageFooter/>
    </>
  )
}

export default Dashboard;