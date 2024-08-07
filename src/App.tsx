import {useState} from "react"
import {Container} from "./components/Container"
import {TheHeader} from "./components/TheHeader"
import {Search} from "./components/Search"
import {UserCard} from "./components/UserCard"
import {GithubError, GithubUser, LocalGithubUser} from "./types"
import {isGitHubUser} from "./utils/typequards"
import {extractLocalUser} from "./utils/extract-local-user"
import {defaultUser} from "./mock"

const BASE_URL = 'https://api.github.com/users/'

function App() {
	const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

	const fetchUser = async (username: string) => {
		const response = await fetch(`${[BASE_URL]}${username}`)
		const user = await response.json() as GithubUser | GithubError
		if (isGitHubUser(user)) {
			setUser(extractLocalUser(user))
		} else {
			setUser(null)
		}
	}

	return (
		<Container>
			<TheHeader/>
			<Search hasError={!user} onSubmit={fetchUser}/>
			{user && (
				<UserCard {...user}/>
			)}
		</Container>
	)
}

export default App;
