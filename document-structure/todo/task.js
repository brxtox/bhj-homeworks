const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value.trim()) {
    const element = `<div class="task">
  <div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`;

    taskList.insertAdjacentHTML('beforeend', element)

    form.reset();
  }
});

taskList.addEventListener('click', function (e) {
  if (e.target.classList.contains('task__remove')) {
    e.preventDefault();
    e.target.closest('.task').remove();
  }
});