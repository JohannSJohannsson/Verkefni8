const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // Keyrist ef klikkað er á eftirfarandi föll
    _items.addEventListener("click",(e)=> {
      finish(e);
      deleteItem(e);
      edit(e);
      commit(e);
  });
  _items.addEventListener("keyup", commit);
}
  function formHandler(e) {
    e.preventDefault();
    let strengur = document.querySelector(".form__input").value;
    if(strengur.trim() != ""){
      add(strengur);
    }
    document.querySelector(".form__input").value = "";
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    if(e.target.classList.contains("item__checkbox")){
      e.target.parentNode.classList.toggle("item--done");
    }
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    document.getElementById("item__text").innerHTML = new HTML;
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {

}

  // fall sem sér um að bæta við nýju item
  function add(value) {
s
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    if(e.target.classList.contains("item__button")){
      e.target.parentNode.remove();
    }
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
