import {GithubUser, LocalGithubUser} from "../types";

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
	login: user.login,
	avatar: user.avatar_url,
	name: user.name,
	company: user.company,
	blog: user.blog,
	location: user.location,
	bio: user.bio,
	twitter: user.twitter_username,
	followers: user.followers,
	following: user.following,
	repos: user.public_repos,
	created: user.created_at
})