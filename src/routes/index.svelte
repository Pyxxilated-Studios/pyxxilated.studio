<script lang="ts">
	interface Reason {
		reason: string;
		justification: string;
	}

	const reasons: Reason[] = [
		{
			reason: 'Welcome to my website!',
			justification:
				'This website exists for several reasons, all of which I will lay out below. I hope you enjoy your stay!'
		},
		{
			reason: 'To learn about Web Development',
			justification:
				"While web development has never been my forte, it is none the less something that I have been more and more interested in learning about. It also affords me the opportunity to learn about other things I've been interested in for a long time: networking, system administration, and optimisation in every form. At the same time, I get to be creative and express myself somewhat in the look and feel of my website -- something I'm constantly trying to improve on."
		},
		{
			reason: 'To host some of my projects',
			justification:
				"I never originally enjoyed web development much, but it has grown on me now that I've been learning and writing Typescript. It also doesn't hurt that the ease of compiling Rust to Web Assembly is so simple that even I could figure it out."
		},
		{
			reason: 'A place I could put some writings',
			justification:
				"This might not be as important to anyone else as it is to me, but writing has always been my way of getting things off my mind and helping me explain things I've been thinking about. It also may in future be some place for me to write tutorials that others may find useful, or writeups of projects."
		},
		{
			reason: "To 'show off'",
			justification:
				"This may sound stupid, but I don't often show off anything I work on to anyone (other than some special people). Having the ability to do so in a way that anyone who has access to a web browser is very useful to me (many of my projects used to require command lines -- definitely not something your average computer user would find to be accessible)."
		}
	];
</script>

<svelte:head>
	<title>Pyxxilated Studios</title>

	<meta
		name="description"
		content="This is my personal website, a place where I host several of my own projects, as well as learn how to do a lot of networking stuff in general and play around"
	/>

	<link rel="canonical" href="https://www.pyxxilated.studio" />
</svelte:head>

<h1>Welcome to Pyxxilated Studios</h1>

<h2>Hi, my name is Josh (aka Pyxxil)</h2>

{#each reasons as reason}
	<h3 class="font-bold">
		{reason.reason}
	</h3>
	<p>{reason.justification}</p>
{/each}
