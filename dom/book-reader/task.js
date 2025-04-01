const bookControls = document.querySelectorAll('.book__control_font-size .font-size');
const book = document.getElementById('book');

bookControls.forEach(control => {
  control.addEventListener('click', (e) => {
    e.preventDefault();

    bookControls.forEach(c => c.classList.remove('font-size_active'));

    control.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = control.dataset.size;

    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});
