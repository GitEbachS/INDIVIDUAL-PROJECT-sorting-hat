students = [
  {
    studentId: 1,
    name: "Luke",
    house: "hufflepuff"
    moldyArmy: false,
  },
  {
    studentId: 2,
    name: "Lea",
    house: "ravenclaw"
    moldyArmy: false,
  },
  {
    studentId: 3,
    name: "Han",
    house: "gryffindor"
    moldyArmy: false,
  },
  {
    studentId: 4,
    name: "Luke",
    house: "hufflepuff"
    moldyArmy: false,
  },
  {
    studentId: 5,
    name: "Ben",
    house: "gryffindor"
    moldyArmy: false,
  },
  {
    studentId: 6,
    name: "Ray",
    house: "ravenclaw"
    moldyArmy: false,
  },
  {
    studentId: 7,
    name: "Mando",
    house: "slytherin"
    moldyArmy: false,
  },
  {
    studentId: 8,
    name: "R2D2",
    house: "ravenclaw"
    moldyArmy: true,
  },

]

const htmlToRender = (divId, html) => {
  const targetedId = document.querySelector(divId)
  targetedId.innerHTML = html
}

const cardsOnDom = (array) => {
  let domString = ''
  for(const student of array) {
    domString += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button class="btn btn-primary" id='delete--${student.id}'>expel</button>
    </div>
  </div>
    `
    htmlToRender('#card-container', domString)
  }

}

const filterButtons = () => {
  const domString = `
  <div class="flex-wrap">
    <button type="button" class="btn btn-primary">All</button>
    <button type="button" class="btn btn-secondary">Ravenclaw</button>
    <button type="button" class="btn btn-danger">Gryffindor</button>
    <button type="button" class="btn btn-success">Slytherin</button>
    <button type="button" class="btn btn-info">Hufflepuff</button>
    </div>
    `
    htmlToRender("#filter-container", domString)
}

const studentForm = () => {
  const domString = `
  <!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="a-form">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" form='a-form'  class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
  `;
htmlToRender('#form-modal', domString);
}
const formModal = new bootstrap.Modal(document.querySelector('#form-modal'));

const cardContainer = document.querySelector('#card-container')

const filterContainer = document.querySelector('#filter-container')
const filterByHouse = (house) => {
  const filteredHouse = students.filter(student => student.house === house)
  cardsOnDom(filteredHouse);
}

const eventListeners = () => {

  filterContainer.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'Ravenclaw':
      filterByHouse('ravenclaw');
      break;
      case 'Gryffindor':
      filterByHouse('gryffindor');
      break;
      case 'Hufflepuff':
      filterByHouse('hufflepuff');
      break;
      case 'Slytherin':
      filterByHouse('slytherin');
      break;
      case 'All':
      cardsOnDom(students);
      
    }
    
  })

  cardContainer.addEventListener('click', (e) => {
    const expelArray = [];
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex(student => student.id === Number(id));
      expelArray.push(students[index].id)
    }
  })
}
