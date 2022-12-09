const ProfileAppear = () => {
	const profileCard = document.querySelector(".profile-card")
	const introPosition = profileCard.getBoundingClientRect().top
	const screenPosition = window.innerHeight

	if (introPosition < screenPosition / 2) {
		profileCard.classList.add("appear")
	}

	if (introPosition > screenPosition) {
		profileCard.classList.remove("appear")
	}
}

const ProjectsAppear = () => {
	const projects = document.querySelector(".projects__container")
	const introPosition = projects.getBoundingClientRect().top
	const screenPosition = window.innerHeight

	if (introPosition < screenPosition / 8) {
		projects.classList.add("appear")
	}

	if (introPosition > screenPosition) {
		projects.classList.remove("appear")
	}
}

const Appear = () => {
	ProfileAppear()
	ProjectsAppear()
}

window.addEventListener("scroll", Appear)
