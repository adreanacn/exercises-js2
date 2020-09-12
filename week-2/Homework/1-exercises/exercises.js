/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

let content = document.querySelector("#content");
function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach(function (x) {
    let name = document.createElement("h1");
    let job = document.createElement("h2");
    name.textContent = x.name;
    job.textContent = x.job;
    content.appendChild(name);
    content.appendChild(job);
  });
}
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let uList = document.createElement("ul");
  content.appendChild(uList);
  shopping.forEach(function (x) {
    let listValue = document.createElement("li");
    listValue.textContent = x;
    uList.appendChild(listValue);
  });
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  console.log("exerciseThree")
  const content = document.getElementById("content")
  const list = document.createElement("ul")
  books.forEach(book => {
    const paragraph = document.createElement("p")
    paragraph.innerText = book.title + " - " + book.author
    const li = document.createElement("li")
    li.appendChild(paragraph)
    list.appendChild(li)
  })
  content.appendChild(list)
}

function exerciseThree(books) {
  //Write your code in here

  let bookCovers = [
    {
      name: "The Design of Everyday Things",
      source:
        "https://s1.bukalapak.com/img/18897221811/w-1000/The_Design_of_Everyday_Things_Revised_and_Expanded_Edition.jpg",
    },
    {
      name: "The Most Human Human",
      source:
        "data:image/jpeg;base64,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",
    },
    {
      name: "The Pragmatic Programmer",
      source: "https://stefano.chiodino.uk/images/41BKx1AxQWL.jpg",
    },
  ];
  let booksDiv = document.createElement("div"); //creates div for books
  content.appendChild(booksDiv);
  // creates ul
  let uList = document.createElement("ul");
  //Begins iterating through books and creating elements for the book list
  books.forEach(function (x) {
    /* Creating elements */
    let book = document.createElement("li");
    book.style.display = "inline-block";
    book.style.backgroundColor = x.alreadyRead ? "green" : "red";
    book.style.margin = 10 + "px";
    let headerTitle = document.createElement("p");
    let cover = document.createElement("img");
    /* Image properties*/
    let srcCover = bookCovers.find(function (y) {
      return y.name === x.title;
    });
    cover.src = srcCover.source;
    cover.alt = srcCover.name;
    cover.style.maxWidth = 182 + "px";
    cover.style.maxHeight = 180 + "px";
    /* Tidying everything up */
    headerTitle.textContent = x.title + " - " + x.author;
    uList.appendChild(book);
    book.appendChild(headerTitle);
    book.appendChild(cover);
  });
  //Appends final list to the new div
  booksDiv.appendChild(uList);
}
//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
