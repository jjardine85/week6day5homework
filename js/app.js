document.addEventListener('DOMContentLoaded', () => {
  const newItem = document.querySelector('#new-item');
  newItem.addEventListener('submit', handleNewItemForm);

  // const checkedValue = document.querySelector('#new-item').checked;
  // checkedValue.addEventListener('submit', handleNewCheck);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
})

const handleNewItemForm = function (event) {
  event.preventDefault();

  const whiskyItem = createWhiskyListItem(event.target);
  const whiskyList = document.querySelector('#drunk-whiskies');
  whiskyList.appendChild(whiskyItem);

  event.target.reset();
}

// const handleNewClick = function (event) {
//   event.preventDefault();
//
//   const whiskyType = createWhiskyListItem(event.target);
//   const whiskyType = document.querySelector('#drunk-whiskies');
//   whiskyType.appendingChild(whiskyType);
// }

const createWhiskyListItem = function (form) {
  const whiskyItem = document.createElement('li');
  whiskyItem.classList.add('drunk-whiskies-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  whiskyItem.appendChild(name);

  const type = document.createElement('h3');
  type.textContent = form.type.value;
  whiskyItem.appendChild(type);

  const enjoyed = document.createElement('p');
  enjoyed.textContent = form.likedRadio.value;
  whiskyItem.appendChild(enjoyed);

  const taste1 = document.createElement('p');
  const taste2 = document.createElement('p');
  const taste3 = document.createElement('p');
  const taste4 = document.createElement('p');
  const taste5 = document.createElement('p');
  taste1.textContent = document.getElementById("flavourProfile1").checked;
  taste2.textContent = document.getElementById("flavourProfile2").checked;
  taste3.textContent = document.getElementById("flavourProfile3").checked;
  taste4.textContent = document.getElementById("flavourProfile4").checked;
  taste5.textContent = document.getElementById("flavourProfile5").checked;
  if (document.getElementById("flavourProfile1").checked === true) {
    whiskyItem.append('Booze ');
  }
  if (document.getElementById("flavourProfile2").checked === true) {
    whiskyItem.append('Malt ');
  }
  if (document.getElementById("flavourProfile3").checked === true) {
    whiskyItem.append('Peat ');
  }
  if (document.getElementById("flavourProfile4").checked === true) {
    whiskyItem.append('Spice ');
  }
  if (document.getElementById("flavourProfile5").checked === true) {
    whiskyItem.append('Fruit ');
  };

  return whiskyItem;
}

const handleDeleteAll = function (event) {
  const whiskyList = document.querySelector('#drunk-whiskies');
  whiskyList.innerHTML = '';
}
