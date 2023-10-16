/** Dispatch event on click outside of node */
export function clickOutside(node, exceptions = []) {
  const handleClick = event => {
    if (
      node && 
      !node.contains(event.target) && 
      !event.defaultPrevented &&
      exceptions.every(exception => !exception.contains(event.target))) {
      node.dispatchEvent(
        new CustomEvent('outsideclick', node)
      )
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
} 