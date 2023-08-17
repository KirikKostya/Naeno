import React from 'react';
import styles from './Header.module.css';

interface IHeader{
    name: string
}
const Header:React.FC<IHeader> = ({name}) => {
  return (
    <header className={styles.header}>{name}</header>
  )
}

export default React.memo(Header);