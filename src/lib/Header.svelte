<script>
	import logo from '$lib/images/logo2.svg';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin-solid.svg';

	let isOpen = false;

	function toggleNavbar() {
		isOpen = !isOpen;
	}
</script>

<header>
	<nav class="navbar">
		<div class="nav-center">
			<a href="/" class="navbar-brand">
				<img class="navbrand" src={logo} alt="Shalane Proctor Software Engineer" />
			</a>
			<button class="navbar-toggler" on:click={toggleNavbar}>
				&#9776; <!-- This is a simple hamburger menu icon, you can replace it with an SVG or icon of your choice -->
			</button>
		</div>
		<div class="collapse" class:open={isOpen}>
			<ul class="navbar-nav">
				<li class="nav-item"><a class="nav-link" href="/">Home</a></li>
				<li class="nav-item"><a class="nav-link" href="/contact">FAQS</a></li>
				<li class="nav-item"><a class="nav-link" href="/experience">Experience</a></li>
				<li class="nav-item"><a class="nav-link" href="/recommendations">Recommendations</a></li>
				<li class="nav-item"><a class="nav-link" href="/sverdle">Game</a></li>
				<li class="nav-item">
					<a class="nav-social" href="https://github.com/shalane-proctor">
						<img class="github" src={github} alt="GitHub" />
					</a>
					<a class="nav-social" href="https://www.linkedin.com/in/shalane-proctor/">
					<img class="github" src={linkedin} alt="LinkedIn" />
				</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
    header {
        background-color: var(--nav-color);
        font-family: var(--font-main);
        color: #e1e0e0;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: var(--nav-color);
    }
		.nav-center{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
				@media (min-width: 892px) {
					width: auto;
				}
		}

    .navbar-brand {
        display: flex;
        align-items: center;
    }

    .navbrand {
        height: 50px;
    }

    .navbar-toggler {
        background: none;
        border: none;
        color: #ffffff;
        font-size: 1.5rem;
				padding: 0 12px 5px;
				@media (min-width: 892px) {
					display: none;
				}
    }

    .collapse {
        @media (max-width: 892px) {
            display: none;
        }
    }

    .collapse.open {
        display: flex;
    }

    .navbar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .nav-item {
        display: flex;
        align-items: center;
    }

    .nav-link {
        text-decoration: none;
        color: #e1e0e0;
        padding: 0.5rem 1rem;
    }
		.nav-link:hover {
         background-color: rgba(255, 255, 255, 0.1);
     }
    .nav-social {
        text-decoration: none;
        color: #e1e0e0;
        padding: 0.5rem;
    }
    .nav-social:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .github {
        width: 30px;
    }

    @media (min-width: 892px) {
        .collapse {
            display: flex !important;
        }

        .navbar-nav {
            flex-direction: row;
            gap: 1rem;
        }

        .nav-link {
            padding: 0.5rem 1rem;
        }
    }
</style>

