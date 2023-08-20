import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IInitialState } from '../ReduxToolkit/Interfaces';
import { setIconState, setUpNavGroupState } from '../ReduxToolkit/Slices';
import { CaretDownFilled, FolderOpenFilled, HomeFilled, PlusCircleOutlined, QuestionCircleOutlined, RetweetOutlined } from '@ant-design/icons';
import styles from '../Pages/Home/navigation/UpNav.module.css';

const Data = () => {
    
  const upNavGroupState = useSelector((state: IInitialState) => state.upNavGroupState);
  const iconState = useSelector((state: IInitialState) => state.iconState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (iconState === 'main') {
      dispatch(setIconState('main'));
    }
    if (iconState === 'catalog') {
      dispatch(setIconState('catalog'));
    }
  }, [iconState, dispatch]);

  const handleNavLinkClick = (iconState:string, groupState:string) => {
    dispatch(setIconState(iconState));
    dispatch(setUpNavGroupState(groupState));
  };

  const items = [
    {
      label: (
        <NavLink
          to={'/'}
          onClick={() => {
            handleNavLinkClick('main', '');
          }}
          className={({ isActive }) => {
            if (isActive) {
              return styles.active;
            }
            return '';
          }}>
          Главная
        </NavLink>
      ),
      key: 'main',
      icon: <HomeFilled className={iconState === 'main' ? styles.active : ''} />,
    },
    {
      label: (
        <NavLink
          to={'/catalog'}
          onClick={() => {
            handleNavLinkClick('catalog', '');
          }}
          className={({ isActive }) => {
            if (isActive) {
              return styles.active;
            }
            return '';
          }}>
          Каталог
        </NavLink>
      ),
      key: 'catalog',
      icon: <FolderOpenFilled className={iconState === 'catalog' ? styles.active : ''} />,
    },
    {
      label: <span className={styles[upNavGroupState]}>Для пользователя</span>,
      key: 'SubMenu',
      icon: <CaretDownFilled className={styles[upNavGroupState]} />,
      children: [
        {
          type: 'group',
          children: [
            {
              label: (
                <NavLink
                  to={'/delivery'}
                  onClick={() => {
                    handleNavLinkClick('delivery', 'active');
                  }}
                  className={({ isActive }) => {
                    if (isActive) {
                      return styles.active;
                    }
                    return '';
                  }}>
                  Доставка и получение
                </NavLink>
              ),
              key: 'delivery',
              icon: <PlusCircleOutlined className={iconState === 'delivery' ? styles.active : ''} />,
            },
            {
              label: (
                <NavLink
                  to={'/return'}
                  onClick={() => {
                    handleNavLinkClick('return', 'active');
                  }}
                  className={({ isActive }) => {
                    if (isActive) {
                      return styles.active;
                    }
                    return '';
                  }}>
                  Возврат
                </NavLink>
              ),
              key: 'return',
              icon: <RetweetOutlined className={iconState === 'return' ? styles.active : ''} />,
            },
            {
              label: (
                <Link to="questions" spy={true} smooth={true} offset={-95} duration={500} className={styles.active}>
                  Частые вопросы
                </Link>
              ),
              key: 'questions',
              icon: <QuestionCircleOutlined />,
            },
          ],
        },
      ],
    },
  ];

  const filtersItems = items.map((item) =>
    item.key === 'SubMenu'
      ? {
          ...item,
          children: [
            {
              ...item.children![0],
              children: item.children![0].children.filter((child) => child.key !== 'questions'),
            },
          ],
        }
      : item
  );

  return { items, filtersItems, iconState };
};

export default Data;
