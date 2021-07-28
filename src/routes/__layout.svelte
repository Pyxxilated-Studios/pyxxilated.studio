<header>
	<nav>
		<a href="/"><h2>Pyxxilated Studios</h2></a>

		<div>
			<a href="/blog">Blog</a>
			<a href="/projects">Projects</a>
			<a href="/about">About</a>
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<a href="https://www.github.com/pyxxil">
		<svg aria-label="Github" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
			/>
		</svg>
	</a>

	<a href="https://www.gitlab.com/pyxxil">
		<svg aria-label="Gitlab" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
			/>
		</svg>
	</a>

	<a href="https://www.linkedin.com/in/pyxxil">
		<svg aria-label="LinkedIn" xmlns="http://www.w3.org/2000/svg">
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	</a>
</footer>

<style>
	:root {
		--primary: #ede8e8;
		--accent: #ff5d73;
		--background: #272635;
	}

	:global html {
		height: 100%;
	}

	:global body {
		background-color: var(--background);
		margin-top: 2.5em;
		font: 16px 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
			'Lucida Grande', sans-serif;
	}

	:global .codehilite {
		overflow-x: auto;
		font-family: 'Courier New', Courier, monospace;
	}

	:global img {
		border-radius: 0.5em;
		float: left;
		margin-right: 1em;
		width: 10em;
		height: 10em;
	}

	:global .blog-post {
		margin-bottom: 3em;
	}

	:global #svelte {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
		height: 4em;
		background-color: var(--background);
		top: 0;
		width: 100%;
		position: fixed;
	}

	nav {
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	nav a {
		text-decoration: none;
		margin: 0.5em 0.5em;
	}

	nav a,
	main {
		color: var(--primary);
	}

	header,
	nav {
		display: flex;
	}

	nav div {
		display: flex;
		list-style: outside none none;
		margin: 0 0.5em;
		padding: 0;
		margin-block: 0;
	}

	nav div a {
		margin: 0 0.25em;
		color: var(--primary);
	}

	main {
		min-width: 20em;
		padding: 0 1em !important;
		flex: 1 0 auto;
		max-width: 50em;
		margin-bottom: 1.5em;
	}

	:global main a {
		color: var(--accent);
		text-decoration: none;
		transition-duration: 0.25s;
	}

	:global main a:hover {
		text-decoration: underline;
	}

	a,
	svg {
		transition-duration: 0.25s;
	}

	a:hover {
		color: var(--accent) !important;
	}

	footer {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 0;
		background-color: var(--background);
		flex-direction: row !important;
		align-items: center;
		margin: 0;
		padding: 0;
		list-style: outside none none;
		width: 100%;
	}

	footer a {
		list-style: none;
		padding: 0.5em;
	}

	footer svg {
		fill: var(--primary);
		width: 24px;
		height: 24px;
		stroke: var(--primary);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}

	footer svg:hover {
		fill: var(--accent) !important;
		transform: scale(1.25);
	}
</style>
