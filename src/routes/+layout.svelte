<header class="z-50 w-full mx-auto sticky top-0 bg-background p-4 text-xl text-foreground">
	<nav class="flex items-center justify-between md:mx-3">
		<a href="/" class="text-2xl font-bold transition-colors duration-300"> Pyxxilated Studios </a>

		<div class="flex flex-row-reverse space-x-4 space-x-reverse text-base sm:text-xl">
			<a href="/about/" class="transition-colors duration-300"> About </a>
			<a href="/blog/" class="transition-colors duration-300"> Blog </a>
			<a href="/projects/" class="transition-colors duration-300"> Projects </a>
		</div>
	</nav>
</header>

<main class="w-full container mx-auto pb-16 px-6">
	<slot />
</main>

<footer
	class="z-50 w-full mx-auto fixed bottom-0 bg-background flex flex-row justify-center space-x-4 p-4"
>
	<a href="https://www.github.com/pyxxil">
		<svg
			aria-label="Github"
			xmlns="http://www.w3.org/2000/svg"
			class="fill-background stroke-foreground hover:fill-secondary stroke-2 h-8 w-8 transition-all duration-300 hover:scale-125"
		>
			<path
				d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
			/>
		</svg>
	</a>
</footer>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	details {
		user-select: none;
	}

	details[open] summary svg {
		transform: rotate(-90deg);
	}

	details[open] summary ~ * {
		animation: fade 0.3s ease-in-out;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	summary {
		cursor: pointer;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	:focus {
		outline: none;
	}
</style>
