<script>
	import { onMount } from 'svelte';
	import avatar from '$lib/images/avatar.png';
	import logo2 from '$lib/images/logo2.svg';

	onMount(() => {
		console.log('Page mounted');
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="intro">
		<div class="logo-background"><img src={logo2} alt="Shalane Proctor Logo" class="logo" /></div>
		<h2>
			Shalane Proctor
		</h2>
		<h3>Full-Stack Software Engineer</h3>
		<h5>
			As a Full-Stack Software Engineer, I blend my experience in multiple tech stacks with a strong foundation in customer service, enabling me to deliver user-centric software solutions. I thrive in a small team setting, taking on diverse responsibilities from API development to site optimization. My background equips me with exceptional communication, quick problem-solving, and the ability to work autonomously, ensuring both technical excellence and client satisfaction in a fast-paced tech environment.
		</h5>
	</div>
	<img src={avatar} alt="avatar" class="avatar">
</section>

<style>
	section {
		font-family: var(--font-main);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		color: var(--color-text);
			@media (max-width: 768px) {
				flex-direction: column-reverse;
			}
	}
	h2 {
    font-size: calc(1.25rem + .9vw);
		font-weight: bold;
		width: 100%;
		color: #97ffff;
		padding-top: 10px;
	}
  h3 {
      font-weight: bold;
      width: 100%;
      color: #e2c3ff;
			margin-bottom: 40px;
      font-size: calc(.7rem + .9vw);
  }
  h5 {
      font-size: calc(.5rem + .9vw);
      color: #e1e0e0;
      @media (min-width: 768px) {
          font-size: calc(.3rem + .9vw);
      }
  }
	.intro{
			width: 60%;
      padding: 0 40px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 768px) {
          width: 100%;
      }
	}
	.avatar {
		width: 40%;
    @media (max-width: 768px) {
        width: 100%;
        padding: 50px 15px;
    }
	}
	.logo{
			width: 100%;
			padding: 5px;
	}
  .logo-background{
      background: #9e6bff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      width: 30%;
  }
</style>
