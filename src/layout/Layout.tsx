import NavBar from '../components/NavBar';
import Typography from '../components/Typography';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Project from '../components/Projects';
import Info from '../components/Info';
import Footer from '../components/Footer';

const Layout = () => {
    return (
      <div>
          <div><NavBar /></div>
          <div><Typography /></div>
          <div><Services /></div>
          <div><Skills /></div>
          <div><Project /></div>
          <div><Info /></div>
          <div><Footer /></div>
    </div>
    )
}

export default Layout;

