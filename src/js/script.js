/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars
{
  'use strict';
  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },
    containerOf:{
      booksList: '.books-list',
    },
    booksImage: {
      images: '.books-list .book__image',
    }
  };

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };

  function render(){
    for(let book of dataSource.books){
      const generatedHTML = templates.bookTemplate({
        id: book.id,
        name: book.name,
        price: book.price,
        image: book.image,
        rating: book.rating,
      });
      const element = utils.createDOMFromHTML(generatedHTML);
      const booksListContainer = document.querySelector(select.containerOf.booksList);
      booksListContainer.appendChild(element);
    }}
  render();

    let favoriteBooks=[];

  function initAction(){
    const thisImage =  document.querySelectorAll(select.booksImage.images);
    for(let listen of thisImage){
      listen.addEventListener('dblclick', function(event){
        event.preventDefault();
        listen.classList.add('favorite');
        const atr = listen.getAttribute('data-id');
        favoriteBooks.push(atr);
        console.log(favoriteBooks);
      });
    }
  }
  initAction();
  
  
}