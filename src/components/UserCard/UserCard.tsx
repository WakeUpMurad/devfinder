import styles from './UserCard.module.scss'
import {UserStat} from "../UserStat"
import {LocalGithubUser} from "../../types"
import {UserTitle} from "../UserTitle"
import {UserInfo} from "../UserInfo"

interface UserCardProps extends LocalGithubUser {
}


export const UserCard = (props: UserCardProps) => {


	return (
		<div className={styles.userCard}>
			<img src={props.avatar} alt={props.name} className={styles.avatar}/>
			<UserTitle created={props.created} login={props.login} name={props.name}/>
			<p className={`${styles.bio} ${props.bio ?? styles.empty}`}>{props.bio || 'This profile has no bio'}</p>
			<UserStat repos={props.repos} following={props.following} followers={props.followers}/>
			<UserInfo blog={props.blog} company={props.company} location={props.location} twitter={props.twitter}/>
		</div>
	);
}
