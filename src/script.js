'use strict';

const inputValue = document.querySelector('.search__input');
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

		res.data.sort((a, b) => b.stargazers_count - a.stargazers_count);

		res.data.forEach(repo => {
			html += `<p class="repos-container__item">${repo.name} - ${repo.stargazers_count}</p>`;
		});

		reposContainer.innerHTML = html;
	});
};

inputValue.addEventListener('input', () => {
	// Change to button click or lazy load
	showData();
});
