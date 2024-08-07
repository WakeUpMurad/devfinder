import React from 'react'
// @ts-ignore
import styles from './Search.module.scss'
// @ts-ignore
import {ReactComponent as SearchIcon} from '../../assets/icon-search.svg'
import {Button} from "../Button"

interface SearchProps {
	hasError: boolean
	onSubmit: (text: string) => void
}

type FormFields = {
	username: HTMLInputElement

}
export const Search = ({onSubmit, hasError}: SearchProps) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
		event.preventDefault()
		const text = event.currentTarget.username.value
		if (text.trim()) {
			onSubmit(text)
			event.currentTarget.reset()
		}
	}
	return (
		<form onSubmit={handleSubmit} autoComplete={'off'}>
			<div className={styles.search}>
				<label htmlFor="search" className={styles.label}>
					<SearchIcon/>
				</label>
				<input
					type="text"
					placeholder="Search for a user..."
					className={styles.textField}
					id="search"
					name="username"
				/>
				{hasError && <div className={styles.error}>No result</div>}
				<Button>Search</Button>
			</div>
		</form>
	);
}

// using useRef
// import React, {useRef} from 'react'
// // @ts-ignore
// import styles from './Search.module.scss'
// // @ts-ignore
// import {ReactComponent as SearchIcon} from '../../assets/icon-search.svg'
// import {Button} from "../Button"
//
// interface SearchProps {
// 	hasError: boolean
// 	onSubmit: (text: string) => void
// }
//
// export const Search = ({onSubmit, hasError}: SearchProps) => {
//
// 	const searchRef = useRef<HTMLInputElement | null>(null)
//
// 	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		const text = searchRef.current
// 		if (text) {
// 			onSubmit(text.value)
// 			searchRef.current.value = ''
// 		}
//
// 	}
// 	return (
// 		<form onSubmit={handleSubmit}  autoComplete={'off'}>
// 			<div className={styles.search}>
// 				<label htmlFor="search" className={styles.label}><SearchIcon/></label>
//
// 				<input
// 					type="text"
// 					ref={searchRef}
// 					placeholder="Search for a user..."
// 					className={styles.textField}
// 					id="search"
// 					name="username"
// 				/>
// 				{hasError && <div className={styles.error}>Please enter a username</div>}
// 				<Button>Search</Button>
// 			</div>
// 		</form>
// 	);
// }

