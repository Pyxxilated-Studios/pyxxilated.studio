<script lang="ts">
	interface Project {
		title: string;
		link: string;
		source: string;
		description: string | string[];
	}

	const projects: Project[] = [
		{
			title: 'Budgie',
			link: 'https://projects.pyxxilated.studio/budgie',
			source: 'https://github.com/Pyxxilated-Studios/Budgie',
			description:
				'Budgie is a simple budgeting App I am working on to keep track of my finances. It is written in TypeScript, using React + MaterialUI.'
		},
		{
			title: 'Little Environment',
			link: 'https://projects.pyxxilated.studio/little-env',
			source: 'https://github.com/Pyxxilated-Studios/little-environment',
			description:
				"Little Environment is a simple environment for the LC-3. After learning to how to program in the LC-3 Assembly language, and later having to write a simulator for it, I began to enjoy its simpleness. I've since written many projects around it, some of which can be found on my GitHub, and figured this would be an interesting challenge to undertake. It includes an Editor and Assembler, where the output is given in the LST file format that the Windows LC-3 Simulator emits."
		},
		{
			title: 'Timeline',
			link: 'https://projects.pyxxilated.studio/timeline',
			source: 'https://github.com/Pyxxilated-Studios/timeline',
			description: [
				'Inspired by app-ideas repository, and their Advanced idea for creating a timeline that can display a users GitHub history, I decided to challenge myself even further.',
				'Timeline is a small web application that strives to not only allow a user to easily display their history, it allows them to export the timeline they create so that they can add it to their own sites/apps.'
			]
		},
		{
			title: 'UpSkill',
			link: 'https://github.com/Pyxxil/upskill',
			source: 'https://github.com/Pyxxil/upskill',
			description: [
				'Upskill was a project I was a part of during a 48-hour Hackathon for the DEVS society at the University of Auckland during July of 2020',
				'The theme for this DEVS Hackathon was "Isolation and Quarantine". Across the team, wenoticed that a lot of people were made redundant as a result of COVID-19. We decided that it would be a great idea to help others relearn industry specific skills from others, as well as providing instructors with these skills, another form of income. We developed the solution of UpSkill',
				'UpSkill is a platform that offers live online lessons that are local with the added opportunity to network, aimed at those who have been made redundant as a result of quarantine and isolation. Our aim is to upskill, reskill and retool learners to help them re-enter the job market'
			]
		},
		{
			title: 'Wave',
			link: 'https://projects.pyxxilated.studio/wave/',
			source: 'https://github.com/Pyxxilated-Studios/wave',
			description:
				'This project is a rewrite/fork of a project I was a part of during my final semester as an Honours student at the University of Auckland. The original project is called Roll for Reaction, and is written in JavaScript whereas this is written in TypeScript.'
		}
	];
</script>

<svelte:head>
	<title>Projects</title>

	<meta
		name="description"
		content="This is where I house a whole bunch of links to my own personal projects, some hosted here, or others just links to code or elsewhere"
	/>

	<link rel="canonical" href="https://www.pyxxilated.studio/projects" />
</svelte:head>

<div>
	<title>Projects</title>

	<h1 class="title">Projects</h1>

	<p>
		I often have a few projects being worked on at any one time, and several of them are web-based.
		This website has allowed me to host many of these rather simply, and you can find several of
		these below.
	</p>
	<p>
		Some of the projects below are not web based, but hopefully there's enough information on them
		either below or on their project page. Feel free to peruse my Github to see what I've been up to
		lately.
	</p>

	{#each projects as project}
		<div class="project">
			<div class="project-header">
				<a class="project-title" href={project.link}>
					<h2>{project.title}</h2>
				</a>

				<div class="project-source">
					(<a href={project.source}>source</a>)
				</div>
			</div>

			<div class="project-description">
				{#if Array.isArray(project.description)}
					{#each project.description as paragraph}
						<p>{paragraph}</p>
					{/each}
				{:else}
					<p>{project.description}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		margin-bottom: 2em;
	}

	.project :last-child {
		margin-bottom: 0;
	}

	.project-header {
		align-items: baseline;
		display: flex;
		flex-direction: row;
	}

	.project-title {
		flex: 0 0 auto;
	}

	.project-source {
		margin-left: 1em;
		flex: 1 0 auto;
	}

	a:hover {
		color: var(--primary) !important;
		text-decoration: none !important;
	}
</style>
