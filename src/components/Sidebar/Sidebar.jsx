import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isOpened } = this.state;
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    const hiddenText = classnames('sidebar__text', { open: isOpened });
    const alignNav = classnames('sidebar__nav', { align: isOpened });
    const sidebarButton = classnames('sidebar__button sidebar-button', { openButton: isOpened });

    return (
      <div className={containerClassnames}>
        <div className={'sidebar__logo'}>
          <img
            src={logo}
            alt="TensorFlow logo"
          />
          <span className={hiddenText}>TensorFlow</span>
        </div>
        <button className={sidebarButton} onClick={this.toggleSidebar}>
            <FontAwesomeIcon className='sidebar-button__icon' icon={isOpened ? 'angle-left' : 'angle-right'} />
          </button>

        <nav className={alignNav}>
          <ul className='sidebar__menu sidebar-menu'>
            {
              routes.map((route) => (
                <li key={route.title} onClick={() => this.goToRoute(route.path)}>
                  <a className='sidebar-menu__link' href={route.path}>
                    <FontAwesomeIcon className='sidebar-menu__icon' icon={route.icon} />
                    <span className={hiddenText}>{route.title}</span>
                  </a>
                </li>
              ))
            }
          </ul>

          <ul className='sidebar__menu sidebar-menu'>
            {
              bottomRoutes.map((route) => (
                <li key={route.title} onClick={() => this.goToRoute(route.path)}>
                  <a className='sidebar-menu__link' href={route.path}>
                    <FontAwesomeIcon className='sidebar-menu__icon' icon={route.icon} />
                    <span className={hiddenText}>{route.title}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    );
  }
}
