// /* close offcanvas on links */
const links = document.querySelectorAll(".header .nav-link")
const bsOffcanvasOne = document.querySelector("#headerOffcanvas");
const bsOffcanvas = new bootstrap.Offcanvas(bsOffcanvasOne);
function closeOffcanvas() {
	links.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			bsOffcanvas.hide();
			bsOffcanvasOne.addEventListener('hidden.bs.offcanvas', () => {
				const pathTo = link.getAttribute("href");
				document.querySelector(`${pathTo}`).scrollIntoView();
			})
			
		})
	})
}

window.addEventListener('resize', ()=> {
	if (window.innerWidth < 992) {
		closeOffcanvas();
	}
})
window.addEventListener('load', ()=> {
	if (window.innerWidth < 992) {
		closeOffcanvas();
	}
})
window.addEventListener('scroll', ()=> {
	if (window.innerWidth < 992) {
		closeOffcanvas();
	}
})

/* scroll button in head */
const btnScrollIcon = document.querySelector(".c-head__scroll");
btnScrollIcon.addEventListener('click', ()=> {
	const advantage = document.querySelector(".advantage");
	advantage.scrollIntoView(true);
})

/* add classes in map block */
const mapInfoBlock = document.querySelector(".c-contacts__infoblock");
function addDelClassesMapBlock() {
	if (window.innerWidth > 768) {
		mapInfoBlock.classList.add("top-50", "translate-middle");
	} else {
		mapInfoBlock.classList.remove("top-50", "translate-middle");
	}
}
window.addEventListener('resize', addDelClassesMapBlock);
window.addEventListener('load', addDelClassesMapBlock);

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
	form.addEventListener('submit', event => {
		if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		}

		form.classList.add('was-validated')
	}, false)
})

/* input mask */
const inputTelForm = document.querySelector("#eRtel");
const inputTelForm1 = document.querySelector("#eRtel1");
const inputTelForm2 = document.querySelector("#eRtel2");
const telMask = new Inputmask("(999)999-99-99");
telMask.mask(inputTelForm);
telMask.mask(inputTelForm1);
telMask.mask(inputTelForm2);

/* absoluteCall btn */
const absoluteToggler = document.querySelector('.c-absolute-call__toggler');
const absoluteTogglerSm = document.querySelector('.c-absolute-call__toggler-sm');
function toggleNoneClassForAbsoluteToggler() {
	if (window.innerWidth < 992) {
		absoluteToggler.classList.add("d-none");
		absoluteTogglerSm.classList.remove("d-none");
	} else {
		absoluteToggler.classList.remove("d-none");
		absoluteTogglerSm.classList.add("d-none");
	}
}
window.addEventListener('resize', toggleNoneClassForAbsoluteToggler);
window.addEventListener('load', toggleNoneClassForAbsoluteToggler);



function errorSendMail() {
	const alertModal = document.querySelector('#alertMessage');
	new bootstrap.Modal(alertModal).show()
}
