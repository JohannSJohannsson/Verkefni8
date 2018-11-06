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
    const spantxt = document.createTextNode(add());

    if (spantxt.length > 0){
      const element = document.getElementsByClassName("items")[0];
      const line = document.createElement("li");
      line.setAttribute("class", "item");
      element.appendChild(line);

      const input = document.createElement("input");
      input.setAttribute("class", "item__checkbox");
      input.setAttribute("type", "checkbox");
      line.appendChild(input);

      const span = document.createElement("span");
      span.setAttribute("class", "item__text");
      span.appendChild(spantxt);
      line.appendChild(span);

      const button = document.createElement("button");
      const btntxt = document.createTextNode("Eyða");
      button.setAttribute("class", "item__button");
      button.appendChild(btntxt);
      line.appendChild(button);
    }
    document.querySelector(".form__input").value = "";
  }

  // event handler fyrir það að checka við box
  function finish(e) {
    if(e.target.classList.contains("item__checkbox")){
      e.target.parentNode.classList.toggle("item--done");
    }
  }

  // event handler fyrir það að breyta texta við færslu
  function edit(e) {
    if(e.target.className === "item__text"){
      const texti = e.target.textContent;
      const textaskra = document.createElement("input");
      textaskra.focus();
      textaskra.classList.add("item__edit");
      textaskra.setAttribute("type", "text");
      textaskra.value = texti;
      e.target.parentNode.replaceChild(textaskra, e.target);
    }
  }

  // event handler fyrir það að klára að breyta texta við færslu
  function commit(e) {
    if((e.target.className === "item__edit")&&((e.key === "Enter"))) {
      const breyttGildi = e.target.value;
      const breyttSpan = document.createElement("span");
      breyttSpan.classList.add("item__text");
      breyttSpan.textContent = breyttGildi;
      e.target.parentNode.replaceChild(breyttSpan, e.target);
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const texti = document.querySelector(".form__input").value;
    const textimbil = texti.trim();
    return textimbil;
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
