/* escribir los elementos  */
//notesEl editBtn deleteBtn
// agregar el main de noteEl con query selector
// agregar el text arra con el noteEl de query selector de text
//escuchador del editbtn  agregar la clase de hiden y text
// en el escuchador main class lsit y text area
// text area de el event listener  y dentro su main inner y su marked value
// agregar button de add
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  //este codigo relaciona a el boton con su trabajo click

  addNewNote();
});

function addNewNote(text = "") {
  console.log("sillegamos aca ?? 🤕");
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
   <div class="note">
   <div class="tools">
   <button class="edit"><i class="fas fa-edit"></i></button>
   <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
   </div>
  `;
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;

  deleteBtn.addEventListener("click", () => {
    note.remove();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList("hidden");
  });

  document.body.appendChild(note);
}

function updateLs() {
  const noteText = document.querySelectorAll("textarea");
  const notes = [];
  noteText.forEach((note) => {
    notes.push(note.value);
  });
  localStorage.setItem("note", JSON.stringify(notes));
}
