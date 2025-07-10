// layout
import PageTopBorder from '@src/components/layouts/PageTopBorder.tsx';
import PageHeader from '@src/components/layouts/PageHeader.tsx';
import PageContent from '@src/components/layouts/PageContent.tsx';
import PageFooter from '@src/components/layouts/PageFooter.tsx';

function Dashboard() {
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