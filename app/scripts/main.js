function docReady(fn) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

docReady(() => {
  const inputs = document.querySelectorAll('.input-text-wrap > input');

  inputs.forEach((element, elNumber) => {
    element.addEventListener('focus', addClassIsFocused);
    element.addEventListener('focusout', removeClassIsFocusedIfItIsEmpty);

    if (elNumber === 0 || element.value.length > 0 || hasAnError(element)) {
      element.focus();
    }
  });

  function addClassIsFocused() {
    this.closest('div').classList.add('is-focused');
  }

  function removeClassIsFocusedIfItIsEmpty() {
    if (this.value.length === 0) {
      this.closest('div').classList.remove('is-focused');
    }
  }

  function hasAnError(element) {
    return !!element.closest('div').querySelector('ul.auth-form-error');
  }
});
