const GIHUB_API = `https://api.github.com/users/`;

export async function getUser(username) {
	const response = await fetch(`${GIHUB_API}${username}`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(
			data.message && data.message === 'Not Found'
				? 'User does not exist!'
				: 'Could not fetch the user.'
		);
	}

	const loadedUser = {
		avatarUrl: data.avatar_url,
		login: data.login,
		name: data.name,
		bio: data.bio,
		location: data.location,
		blogUrl: data.blog,
		profileUrl: data.html_url,
		publicRepos: data.public_repos,
		followers: data.followers,
		following: data.following,
		email: data.email,
		company: data.company,
		twitterUsername: data.twitter_username,
	};

	return loadedUser;
}

export async function getAllRepositories(username) {
	const response = await fetch(
		`${GIHUB_API}${username}/repos?per_page=100&sort=updated&order=desc`
	);

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Could not get repositories.');
	}

	const transformedRepositories = data
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.map(repo => {
			return {
				name: repo.name,
				language: repo.language,
				stars: repo.stargazers_count,
				link: repo.html_url,
			};
		});

	return transformedRepositories;
}
