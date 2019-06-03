(function() {
  // Select the button thats going to activate the event
  const button = document.getElementById('change');

  // Function for setting a global transition property to make the change of styles smooth. Once the change is applied, the transition property gets deleted from the element
  const setTransitionGlobal = () => {
    // Variables.
    // Select all elements within the body/
    const cssRoot = document.body.querySelectorAll('*');
    // Set a timer for the transition timing.
    const timeDuration = 1;

    // Foreach loop to set a style property to each element within the body.
    cssRoot.forEach(el => {
      // Setting the property to both BODY element and elements inside.
      el.style.transition = `background ${timeDuration}s, color ${timeDuration}s`;

      document.body.style.transition = `background ${timeDuration}s, color ${timeDuration}s`;

      // Timeout that removes the style property from the elements.
      setTimeout(() => {
        el.removeAttribute('style');
        document.body.removeAttribute('style');
        // The timeout its strictly dependent on the timeDuration value.
      }, timeDuration * 1000);
    });
  };

  // Function to change the stylesheet inside the HEAD tag.
  const changeStyleSheet = () => {
    // Variables
    // Select the stylesheet tag by a custom attribute attribute.
    const link = document.head.querySelector('[data-css="main"]');

    // Checks which style is being applied, thus generating a toggle between stylesheets.
    if (link.href.includes('style.css')) {
      // Change this link with your css stylesheet path.
      link.href = './style2.css';
    } else if (link.href.includes('style2.css')) {
      // Change this link with your css stylesheet path.
      link.href = './style.css';
    }
  };

  // Event listener fot the button, that triggers the functions set before.
  button.addEventListener('click', () => {
    setTransitionGlobal();
    changeStyleSheet();
  });
})();
