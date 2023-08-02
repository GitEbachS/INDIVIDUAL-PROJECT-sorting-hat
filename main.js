const students = [
  {
    studentId: 1,
    name: "Luke",
    house: "Hufflepuff",
    imageUrl: "https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg?ezimgfmt=ngcb22/notWebP",
    moldyArmy: false
  },
  {
    studentId: 2,
    name: "Lea",
    house: "Ravenclaw",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZca3a3aVtTbUpuqLOT8bZDbp1oU04XjhMZRAS5frjBV3svFOftoJtgL_Am6wTM0I81Ho&usqp=CAU",
    moldyArmy: false
  },
  {
    studentId: 3,
    name: "Han",
    house: "Gryffindor",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOyyYCfNIWvXhhOl8SRLGgIYgpX-_AfEeez0TRuo&s",
    moldyArmy: false
  },
  {
    studentId: 4,
    name: "Leo",
    house: "Hufflepuff",
    imageUrl: "https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg?ezimgfmt=ngcb22/notWebP",
    moldyArmy: false
  },
  {
    studentId: 5,
    name: "Ben",
    house: "Gryffindor",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOyyYCfNIWvXhhOl8SRLGgIYgpX-_AfEeez0TRuo&s",
    moldyArmy: false
  },
  {
    studentId: 6,
    name: "Ray",
    house: "Ravenclaw",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZca3a3aVtTbUpuqLOT8bZDbp1oU04XjhMZRAS5frjBV3svFOftoJtgL_Am6wTM0I81Ho&usqp=CAU",
    moldyArmy: false
  },
  {
    studentId: 7,
    name: "Mando",
    house: "Slytherin",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhE7CU9msbQ1iGS1i2oFfqpvT1R2wvG3wXRDgqdD3&s",
    moldyArmy: false
  },
  {
    studentId: 8,
    name: "R2D2",
    house: "Ravenclaw",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZca3a3aVtTbUpuqLOT8bZDbp1oU04XjhMZRAS5frjBV3svFOftoJtgL_Am6wTM0I81Ho&usqp=CAU",
    moldyArmy: false
  }
]


const htmlToRender = (divId, html) => {
  const targetedId = document.querySelector(divId)
  targetedId.innerHTML = html
}

const filterButtons = () => {
  const domString = `
  <div class="flex-wrap">
    <button type="button" id="all" class="btn btn-primary">All</button>
    <button type="button" id="ravenclaw" class="btn btn-secondary">Ravenclaw</button>
    <button type="button" id="gryffindor" class="btn btn-danger">Gryffindor</button>
    <button type="button" id="slytherin" class="btn btn-success">Slytherin</button>
    <button type="button" id="hufflepuff" class="btn btn-info">Hufflepuff</button>
    </div>
    `
  htmlToRender("#filter-container", domString)
}


const cards = (array) => {
  let domString = ''
  for(const student of array) {
    domString += `
    <div class="card" style="width: 18rem;">
      <img src="${student.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${student.moldyArmy ? "" : student.name}</h5>
        <p class="card-text">${student.house}</p>
        <p class="card-text">${student.moldyArmy ? `${student.name} is a VILLAIN!` : ""}</p>
        <button type="button"class="deleteBtn" id="expel--${student.studentId}">Expel</button>
       </div>
    </div> `
  }
  return domString;
};

const studentForm = () => {
  let domString = ""
  domString += `
    <!-- Button trigger modal -->
    <button type="button" id="enterBtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-student">
      Enter Inside!
    </button>
    <!-- Modal -->
    <div class="modal fade" id="add-student" tabindex="-1"      aria-labelledby="add-student" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New Student</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="a-form">
              <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" required>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
htmlToRender('#form-container', domString);
};


// Separate the two groups of characters into arrays
const separateSides = (array) => {
  const evilHouse = array.filter(student => student.moldyArmy)
  const goodHouse = array.filter(student => !student.moldyArmy)
  htmlToRender("#card-container", cards(goodHouse))
  htmlToRender("#army-container", cards(evilHouse))
}


  // **EVENT LISTENERS**
  const eventListeners = () => {

    const formModal = new bootstrap.Modal(document.querySelector('#add-student'));

    const filterContainer = document.querySelector('#filter-container')
   
    const filterByHouse = (house) => {
      const filteredHouse = students.filter(student => student.house === house)
      separateSides(filteredHouse);
    }

   filterContainer.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'ravenclaw':
      filterByHouse('Ravenclaw');
      break;
      case 'gryffindor':
      filterByHouse('Gryffindor');
      break;
      case 'hufflepuff':
      filterByHouse('Hufflepuff');
      break;
      case 'slytherin':
      filterByHouse('Slytherin');
      break;
      default:
      separateSides(students);
    }
  })

  

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  

  let studentObj = {
    studentId: students.length + 1,
    name: document.querySelector("#name").value,
    moldyArmy: false
    }

    let newHouse = ''
    let randomNumber = Math.floor(Math.random() * 4);
    
    switch(randomNumber) {
    case 0:
    newHouse = "Gryffindor";
    if("Gryffindor") {
      studentObj.imageUrl = src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOyyYCfNIWvXhhOl8SRLGgIYgpX-_AfEeez0TRuo&s"
    }
    break;
    case 1:
    newHouse = "Slytherin";
    if("Slytherin") {
      studentObj.imageUrl = src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhE7CU9msbQ1iGS1i2oFfqpvT1R2wvG3wXRDgqdD3&s"
    }
    break;
    case 2:
    newHouse = "Hufflepuff";
    if("Hufflepuff") {
      studentObj.imageUrl = src="https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg?ezimgfmt=ngcb22/notWebP"
    }
    break;
    case 3:
    newHouse = "Ravenclaw"
    if("Ravenclaw") {
      studentObj.imageUrl = src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZca3a3aVtTbUpuqLOT8bZDbp1oU04XjhMZRAS5frjBV3svFOftoJtgL_Am6wTM0I81Ho&usqp=CAU"
    }
    break;
}
  studentObj.house = newHouse;
  

  students.push(studentObj)
  separateSides(students)

  formModal.hide()
  form.reset()
  })
  


  const cardContainer = document.querySelector('#card-container')
  cardContainer.addEventListener('click', (e) => {
      
      if (e.target.id.includes('expel')) {
          const [, id] = e.target.id.split('--');
          const index = students.findIndex(student => student.studentId === Number(id));
          students[index].moldyArmy = true;
          students[index].house = "Evil Side";
          students[index].imageUrl = 'https://assets1.ignimgs.com/2019/09/16/1280-darkartshogwartscastle-1568649983737.jpg?crop=16%3A9&width=888';
        }
        
        separateSides(students);

      })
}
 


const startApp = () => {
  studentForm();
  filterButtons();
  separateSides(students);
  eventListeners();
};

startApp();
