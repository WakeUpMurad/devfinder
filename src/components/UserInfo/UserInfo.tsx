// @ts-ignore
import {ReactComponent as CompanyIcon} from '../../assets/icon-company.svg'
// @ts-ignore
import {ReactComponent as LocationIcon} from '../../assets/icon-location.svg'
// @ts-ignore
import {ReactComponent as TwitterIcon} from '../../assets/icon-twitter.svg'
// @ts-ignore
import {ReactComponent as BlogIcon} from '../../assets/icon-website.svg'
// @ts-ignore
import styles from './UserInfo.module.scss'
import {LocalGithubUser} from "../../types"
import {InfoItem, InfoItemProps} from "../InfoItem"

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {
}

export const UserInfo = ({blog, company, location, twitter}: UserInfoProps) => {

	const items: InfoItemProps[] = [{
		icon: <LocationIcon/>,
		text: location
	}, {
		icon: <CompanyIcon/>,
		text: company
	}, {
		icon: <TwitterIcon/>,
		text: twitter
	}, {
		icon: <BlogIcon/>,
		isLink: true,
		text: blog
	}]
	return (
		<div className={styles.userInfo}>
			{items.map((item, index) => (
				<InfoItem
					key={index}
					{...item}
				/>
			))}
		</div>
	);
}
