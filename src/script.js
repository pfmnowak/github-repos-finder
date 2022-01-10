'use strict';

const inputValue = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
const reposContainer = document.querySelector('.repos-container');

const fetchUsers = async user => {
	const api_call = await fetch(
		`https://api.github.com/users/${user}/repos?per_page=100&sort=updated&order=desc`
	);

	const data = await api_call.json();
	return { data };
};

const showData = () => {
	fetchUsers(inputValue.value).then(res => {
		let html = '';

		if (!Array.isArray(res.data)) {
			html += `<p class="repos-container__message repos-container__message--error">User does not exist!</p>`;
		} else if (res.data.length == 0) {
			html += `<p class="repos-container__message repos-container__message--error">User doesn't have any repositories</p>`;
		} else {
			res.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
			res.data.forEach(repo => {
				html += `
					<div class="repo">
						<div class="repo__name">${repo.name}</div>
						<div class="repo__lang">${repo.language ? repo.language : '-'}</div>
						<div class="repo__stars">${repo.stargazers_count}⭐</div>
						<a class="repo__link" href="${repo.html_url}" target="_blank">link</a>
					</div>
				`;
			});
		}

		reposContainer.innerHTML = html;
	});
};

searchButton.addEventListener('click', () => {
	showData();
});
