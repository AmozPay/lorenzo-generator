<script lang="ts">
	import Button from './components/Button.svelte';
	import Lorenzo from './components/Lorenzo.svelte';
	import lorenzoGenerator from './utils/lorenzo_generator/';
	import generateHelpMeSentence from './utils/help_generator/';

	let name: string = lorenzoGenerator();
	let lorenzoDesperateCryForHelp = "Oh, that's funny";

	const change = () => {
		name = lorenzoGenerator();
		const [firstName, lastName] = name.split(' ');
		if (name == "Lorenzo Cecchini")
		lorenzoDesperateCryForHelp = "Wow, you should play lottery, the chances were so small"
		else if (firstName === "Lorenzo")
		lorenzoDesperateCryForHelp = "You got my name right, but ..."
		else if (lastName === "Cecchini")
		lorenzoDesperateCryForHelp = "Wow, now get my name right"
		else {
			let tmp = lorenzoDesperateCryForHelp;
			while (tmp === lorenzoDesperateCryForHelp)
				tmp = generateHelpMeSentence();
			lorenzoDesperateCryForHelp = tmp;
		}
	};
</script>

<main>
	<Lorenzo text={lorenzoDesperateCryForHelp}></Lorenzo>
	<div id="generator_button">
		<Button on:click={change}>Generate another name</Button>
		<h1>
			Your Lorenzo Cecchini name is:
		</h1>
		<p class="name">{name}</p>
	</div>
	<a class="external_links" href="https://viken-generator.vercel.app/">Viken Generator</a>
</main>

<style>
	main {
		display: flex;
		text-align: center;
		max-width: 240px;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
		margin: 0px;
		width: 100%;
		height:100%;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
  		padding: 0px;
	}

	#generator_button {
		position: absolute;
		top: 50%;
	}

	h1 {
		font-size: 2vh;
	}

	.name {
		font-size: 5vh;
		font-weight: 700;
	}

	.external_links {
		position: absolute;
		bottom: 10px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>