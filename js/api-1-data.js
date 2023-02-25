const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const personFX = () => {
  const cardContainer = document.getElementById("card-container");
  document.getElementById("found-person").innerText = person.message;

  person.result.forEach((found) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("w-25");
    div.innerHTML = `
          <div class="card-header">Person Name: ${found.name.common}</div>
            <div class="card-body">
            <p>age:${found.age} </p>
            <p>Street:${found.address.street}, House No: ${found.address.house} </p>
              
            </div>
          
      `;

    cardContainer.appendChild(div);
  });
};

personFX();
