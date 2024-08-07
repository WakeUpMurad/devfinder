import styles from './UserTitle.module.scss'
import {LocalGithubUser} from "../../types"

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> {
}

const localDate = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'short',
	year: 'numeric'
})

export const UserTitle = ({created, login, name}: UserTitleProps) => {

	const joinedDate = new Date(created)
	const joinedDateFormatted = localDate.format(joinedDate)

	return (
		<div className={styles.userTitle}>
			<h2>{name}</h2>
			<h3>{login}</h3>
			<span>{joinedDateFormatted}</span>
		</div>
	);
}
