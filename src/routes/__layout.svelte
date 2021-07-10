<main>
	<header>
		<nav>
			<a href="/" class="brand"><h2>Pyxxilated Studios</h2></a>

			<ul class="brand-links">
				<li>
					<a href="/blog" class="brand-link">Blog</a>
				</li>
				<li>
					<a href="/projects" class="brand-link">Projects</a>
				</li>
				<li>
					<a href="/about" class="brand-link">About</a>
				</li>
			</ul>
		</nav>
	</header>

	<div class="content">
		<slot />
	</div>

	<footer>
		<ul>
			<li>
				<a href="https://www.github.com/pyxxil" aria-label="Github">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href="https://www.gitlab.com/pyxxil" aria-label="Gitlab">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/pyxxil" aria-label="LinkedIn">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/>
						<rect x="2" y="9" width="4" height="12" />
						<circle cx="4" cy="4" r="2" />
					</svg>
				</a>
			</li>
		</ul>
	</footer>
</main>

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
		margin-top: 4em;
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

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1 0 auto;
	}

	header {
		background-color: var(--background);
	}

	header {
		height: 5em;
		top: 0;
		width: 100%;
		position: fixed;
	}

	nav {
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-right: 1em;
	}

	nav a {
		text-decoration: none;
	}

	.brand,
	main {
		color: var(--primary);
	}

	header,
	nav {
		display: flex;
	}

	.brand h2 {
		min-width: fit-content;
		margin: 0.5em 1em;
	}

	.brand-links {
		display: flex;
		list-style: outside none none;
		margin: 0 1em;
		padding: 0;
		margin-block: 0;
	}

	.brand-link {
		margin: 0 5px;
		color: var(--primary);
	}

	.content {
		min-width: 20em;
		padding: 0 1em !important;
		flex: 1 0 auto;
		max-width: 50em;
		margin-bottom: 2em;
	}

	:global .content a {
		color: var(--accent);
		text-decoration: none;
		transition-duration: 0.25s;
	}

	:global .content a:hover {
		text-decoration: underline;
	}

	a,
	svg {
		transition-duration: 0.25s;
	}

	a:hover {
		color: var(--accent) !important;
	}

	svg:hover {
		fill: var(--accent) !important;
		transform: scale(1.25);
	}

	.icon {
		width: 24px;
		height: 24px;
		stroke: var(--primary);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}

	footer {
		display: flex;
		justify-content: center;
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: var(--background);
	}

	footer ul {
		display: flex;
		flex-direction: row !important;
		align-items: center;
		margin: 0;
		padding: 0;
		list-style: outside none none;
	}

	footer li {
		list-style: none;
		margin: auto;
		padding: 0.5em;
	}

	footer li svg {
		fill: var(--primary);
	}

	@media only screen and (max-width: 450px) {
		header,
		nav {
			flex-direction: column !important;
			align-items: flex-start !important;
		}
	}
</style>
