import './App.css';
import { Outlet, redirect } from 'react-router-dom';
// import Footer from './components/layout/Footer';
import { Breadcrumb, Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import CustomBreadCrumb from './components/layout/CustomBreadCrumb';

function App() {

  const navigate = useNavigate();
  const menuItems = [
    { 'label': 'Produtos', 'key': 'products' },
    { 'label': 'Categorias', 'key': 'categories' }
  ]

  function handleOnClickMenu(item) {
    navigate(item.key)
  }

  return (
    <div className='App'>

      <Layout className='mainLayout' style={{ "display": "flex", "flexDirection": "column", "minHeight": "100vh"}}>
        <Header className='header' style={{ "display": "flex" }}>
          <div className='logo'>
            <h3 >MEU SITE</h3>
          </div>

          <div className='profile'>
            <span>Perfil do usuário</span>
          </div>

        </Header>

        <Layout>

          <Sider width={200}>
            <Menu mode="inline" onClick={(item) => handleOnClickMenu(item)} items={menuItems} style={{ height: '100%', borderRight: 0, }} />
          </Sider>

          <Layout style={{
            padding: '0 24px 24px',
          }}>

            <Content style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
        <Footer >
          <h3>Rodapé</h3>
        </Footer>
      </Layout>

    </div>
  );
}

export default App;
