import { Layout } from 'antd';
import MainHeader from './components/header/header';

const BaseLayout = () => {
  return (
    <Layout style={{
      minHeight: '100vh',
    }}>
      <MainHeader />
    </Layout>
  );
};

export default BaseLayout;
