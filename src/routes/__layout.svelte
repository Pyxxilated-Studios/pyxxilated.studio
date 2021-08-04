<script>
	import '@picocss/pico';
</script>

<header class="container-fluid">
	<nav>
		<ul>
			<li><a href="/"><strong>Pyxxilated Studios</strong></a></li>
		</ul>

		<ul>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</header>

<main class="container">
	<slot />
</main>

<footer class="container-fluid">
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
	:global :root,
	:root:not([data-theme='dark']),
	:global [data-theme='light'],
	:global [data-theme='dark'] {
		--color: #ecf0f1;
		--primary: #ffcdb2;
		--h1-color: #ffcdb2;
		--h2-color: #ffcdb2;
		--h3-color: #ffcdb2;
		--h4-color: #ffcdb2;
		--h5-color: #ffcdb2;
		--h6-color: #ffcdb2;
		--primary-hover: #b5838d;
		--secondary: #b5838d;
		--primary-focus: #ff5d7370;
		--background-color: #29335c;
	}

	:global html {
		background-color: var(--background-color);
		cursor: unset;
	}

	:global .codehilite {
		overflow-x: auto;
		font-family: 'Courier New', Courier, monospace;
	}

	a,
	svg {
		transition-duration: 0.25s;
	}

	:global a:hover {
		color: var(--primary-hover) !important;
		text-decoration: none;
	}

	a:focus {
		background-color: inherit;
	}

	footer {
		display: flex;
		justify-content: center;
	}

	footer a {
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
		fill: var(--primary-hover) !important;
		transform: scale(1.25);
	}
</style>
