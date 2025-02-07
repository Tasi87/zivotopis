import React from 'react'
import { NavLink } from 'react-router-dom'

// styles
import styles from './TheNavigation.css'

type Props = {}

const TheNavigation = (props: Props) => {
  return (
	<nav> className={styles.navigation}
		<NavLink to="/"
			className={({isActive}) => isActive ? styles.active : ''}>
			O mne
		</NavLink>
		<NavLink to="/skills"
			className={({isActive}) => isActive ? styles.active : ''}>
			Pracovné skúsenosti
		</NavLink>
		<NavLink to="/education"
			className={({isActive}) => isActive ? styles.active : ''}>
			Vzdelanie, kurzy a certifikáty
		</NavLink>
	</nav>
  )
}

export default TheNavigation