const form = document.querySelector('#add-chirp');
const list = document.querySelector('.chirps-list');
const formUpdate = document.querySelector('#update-chirp');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      action, method, image, description,
    } = e.target;
    console.log(description);
    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        description: description.value,
        image: image.value,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === 'success') {
      document.querySelector('.chirps-list').insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
    }
  });
}

// в случае с кнопкой удаления: нужно использовать УНИВЕРСАЛЬНЫЙ способ
// вешаем не на кнопку/все кнопки через а на весь контейнер, который содержит все кнопки
if (list) {
  list.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-delete')) {
      const card = e.target.closest('.card');
      const { id } = card.dataset;
      const res = await fetch(`/api/chirps/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      } else {
        alert(data.message);
      }
    }
    if (e.target.classList.contains('like')) {
      const card = e.target.closest('.card');
      const { id } = card.dataset;
      const res = await fetch(`/api/likes/${id}`, {
        method: 'PUT',
      });
      const data = await res.json();
      if (data.message === 'like') {
        e.target.closest('.like__container').lastElementChild.innerText = +e.target.closest('.like__container').lastElementChild.innerText + 1;
        e.target.setAttribute('src', '/images/full.png');
      } else if (data.message === 'dislike') {
        e.target.closest('.like__container').lastElementChild.innerText = +e.target.closest('.like__container').lastElementChild.innerText - 1;
        e.target.setAttribute('src', '/images/empty.png');
      }
    }
  });
}

if (formUpdate) {
  formUpdate.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      description, image, action,
    } = e.target;

    const res = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        description: description.value,
        image: image.value,
      }),
    });
    const data = await res.json();
    
    if (data.length) {
      window.location.assign('/');
    }
  });
}
