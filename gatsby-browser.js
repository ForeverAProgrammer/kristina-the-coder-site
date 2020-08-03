//polyfill for IE and Safari for the gatsby-background-image plugin
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === "undefined") {
      //eslint-disable-next-line
      import(`intersection-observer`)
      console.log("# IntersectionObserver is polyfilled!");
    }
  };