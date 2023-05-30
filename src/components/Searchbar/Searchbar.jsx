// Опис компонента <Searchbar>
// Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми. Створює DOM-елемент наступної структури.

// <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
// var API_KEY = '36213838-e372b0534fd2b886e594c2bd9';
// var URL =
//   'https://pixabay.com/api/?key=' +
//   API_KEY +
//   '&q=' +
//   encodeURIComponent('red roses');
// $.getJSON(URL, function (data) {
//   if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function (i, hit) {
//       console.log(hit.pageURL);
//     });
//   else console.log('No hits');
// });

// Інструкція Pixabay API
// Зареєструйся та отримай приватний ключ доступу. Для HTTP-запитів використовуй публічний сервіс пошуку зображень Pixabay.

// URL-рядок HTTP-запиту.

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// Pixabay API підтримує пагінацію, за замовчуванням параметр page дорівнює 1. Нехай у відповіді надходить по 12 об'єктів, встановлено в параметрі per_page. Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1.

// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
