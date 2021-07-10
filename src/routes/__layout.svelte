<main>
	<header id="menu">
		<nav>
			<a href="/" class="brand"><h2>Pyxxilated Studios</h2></a>

			<div class="brand-links">
				<ul>
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
			</div>
		</nav>
	</header>

	<div id="content">
		<slot />
	</div>

	<footer class="side-pane">
		<ul class="side-links">
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

	<div class="right-pane">
		<div id="wcb" class="wcb carbonbadge wcb-d">
			<ul id="wcb_p">
				<li>
					<p id="wcb_g">Measuring CO<sub>2</sub>&hellip;</p>
				</li>
				<li>
					<a id="wc_l" target="_blank" rel="noopener" href="https://websitecarbon.com">
						Website Carbon
					</a>
				</li>
				<li>
					<span id="wcb_2" />
				</li>
			</ul>
		</div>
	</div>
</main>

<style>
	main,
	header {
		background-color: var(--background);
	}

	main {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	#content {
		flex: 1 0 auto;
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

	@media only screen and (max-width: 450px) {
		header,
		nav {
			flex-direction: column !important;
			align-items: flex-start !important;
		}

		nav {
			margin: 0 !important;
		}

		nav h2 {
			margin: 0.5em 0;
		}

		.brand-links ul {
			margin: 0;
			margin-block: 0;
			margin: 0;
			padding: 0;
		}
	}

	@media only screen and (max-width: 767px), (max-height: 599px) {
		.side-pane,
		.right-pane,
		.carbonbadge ul {
			display: flex;
			justify-content: center;
		}

		.side-pane li:last-of-type,
		.right-pane li:last-of-type {
			margin-bottom: 0 !important;
		}

		.side-links,
		.right-pane,
		.carbonbadge ul {
			display: flex;
			padding: 0;
			margin: 0;
			flex-direction: row !important;
		}

		.side-links::after,
		.right-pane::after {
			display: none !important;
		}

		#content {
			padding: 0 1em !important;
		}
	}

	@media only screen and (min-width: 768px) and (min-height: 600px) {
		.side-pane,
		.right-pane {
			width: 4em;
			position: fixed;
			bottom: 0;
		}

		.side-pane {
			left: 0;
			right: auto;
		}

		.right-pane {
			right: 1em;
		}

		.side-links,
		.right-pane {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0;
			padding: 0;
			list-style: outside none none;
		}

		.side-links::after,
		.carbonbadge::after {
			content: '';
			display: block;
			width: 1px;
			height: 5em;
			margin: 0 auto;
			background-color: var(--primary);
		}

		.side-pane li:last-of-type {
			margin-bottom: 1em;
		}

		.carbonbadge li {
			writing-mode: vertical-lr;
		}
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
		margin: 1em;
	}

	nav a {
		text-decoration: none;
	}

	.brand,
	main {
		color: var(--primary);
	}

	.brand-links,
	header,
	nav {
		display: flex;
	}

	.brand {
		min-width: fit-content;
	}

	.brand-links ul {
		display: flex;
		list-style: outside none none;
	}

	.brand-link {
		margin: 0 5px;
		color: var(--primary);
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

	.carbonbadge ul {
		padding: 0;
		font-size: 0.75em;
	}

	#wc_l,
	#wcb_2,
	#wcb_g {
		padding: 0;
		margin: 0.5em 0;
		color: var(--primary);
		text-decoration: none;
	}

	:global #content {
		min-width: 20em;
		padding: 0 5em;
	}

	:global #content a {
		color: var(--accent);
		text-decoration: none;
		transition-duration: 0.25s;
	}

	:global #content a:hover {
		text-decoration: underline;
	}

	:global .codehilite {
		overflow-x: auto;
		font-family: 'Courier New', Courier, monospace;
	}

	.side-pane li,
	.right-pane li {
		list-style: none;
		margin: auto;
		padding: 0.5em;
	}
	.side-pane li svg {
		fill: var(--primary);
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
</style>
