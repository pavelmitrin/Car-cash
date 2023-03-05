const bsOffcanvas = new bootstrap.Offcanvas('#menu');
const bsOffcanvasOne = document.querySelector("#menu");
const HtmlEl = document.querySelector('html');
function closeOffcanvas() {
	
	const links = document.querySelectorAll('.nav-link');
	links.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			bsOffcanvas.hide();
			HtmlEl.style.scrollPaddingTop = "60px";
			bsOffcanvasOne.addEventListener('hidden.bs.offcanvas', (event) => {
				const pathTo = link.getAttribute("href");
				document.querySelector(`${pathTo}`).scrollIntoView();
			})
			
		})
	})
}

window.addEventListener('resize', ()=> {
	if (window.innerWidth < 992) {
		closeOffcanvas();
	} else {
		HtmlEl.style.scrollPaddingTop = "60px";
	}
})
window.addEventListener('load', ()=> {
	if (window.innerWidth < 992) {
		closeOffcanvas();
	} else {
		HtmlEl.style.scrollPaddingTop = "60px";
	}
})
window.addEventListener('scroll', ()=> {
	if (window.innerWidth < 992) {
		closeOffcanvas();
		HtmlEl.style.scrollPaddingTop = "0px";
	}
})


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

