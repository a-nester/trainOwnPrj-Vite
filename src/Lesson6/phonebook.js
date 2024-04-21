//HOME WORK

// 6. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// list() - повертає список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;
const phonebook = {
  contacts: [],
    add(data) {
        const userObj = {};
        userObj.name = data.name;
        userObj.phone = data.phone;
        userObj.email = data.email;
        userObj.category = data.category ? data.category : 'default'; 
        userObj.id = this.generateId();
        userObj.createdAt = this.getDate();
        this.contacts.push(userObj);
  }, 
    list() {
      console.log(this.contacts);
  },
    filtered(category) {
        for (const elem of this.contacts) {
            if (elem.category === category) {
                return elem;
        }
        } return 'Категорії не знайдено!';  
  },
  delete(name) {},
  updateName(oldName, newName) {},

  generateId() {
    return "#" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

const userData = {
    name: 'Nester',
    phone: '077-123-22-33',
    email: 'a_nester@ukr.net',
    category: 'family',
}
    
phonebook.add(userData);
console.log(phonebook.contacts);

const tableEl = document.querySelector(".phonebook-table");

const dataEl = phonebook.contacts
  .map(elem => {
    return `
    <tr>
      <td>${elem.name}</td>
      <td>${elem.phone}</td>
      <td>${elem.email}</td>
      <td>${elem.category}</td>
      <td>${elem.id}</td>
    </tr>`
  })
  .join("");

  tableEl.insertAdjacentHTML("beforeend", dataEl);