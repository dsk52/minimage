class GlobalNav {

  constructor() {
    this.opener = document.querySelectorAll('.c-menu');
    this.closer = document.querySelectorAll('.c-global-nav__closer');
    this.overlay = document.querySelectorAll('.c-overlay');
    this.isOpen = false;

    Array.from(this.opener, (opener) => {
      opener.addEventListener('click', this.overlaySwitcher.bind(this), false);
    });

    Array.from(this.closer, (closer) => {
      closer.addEventListener('click', this.overlaySwitcher.bind(this), false);
    });
  }

  overlaySwitcher() {
    if (this.isOpen) {
      this.overlay.forEach((overlay) => {
        this.isOpen = false;
        overlay.classList.remove('isShow');
      });
    } else {
      this.overlay.forEach((overlay) => {
        this.isOpen = true;
        overlay.classList.add("isShow");
      })
    }
  }
}

export default GlobalNav
