import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		//cliking the open modal button

		this.openModalButton.click(this.openModal.bind(this));

		//cliking the x to close modal butoon

		this.closeModalButton.click(this.closeModal.bind(this));

		//pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;     //To prevent return to top when clicking link
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}

}

export default Modal;

