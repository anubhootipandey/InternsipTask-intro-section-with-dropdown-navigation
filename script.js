function toggleArrow(element) {
    const arrowIcon = element.querySelector('.dropdown-arrow-icon');
    const isOpen = arrowIcon.getAttribute('src') === 'images/icon-arrow-down.svg';
    
    if (isOpen) {
      arrowIcon.setAttribute('src', 'images/icon-arrow-up.svg');
    } else {
      arrowIcon.setAttribute('src', 'images/icon-arrow-down.svg');
    }
  }
  