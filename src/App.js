import "./styles.css";
import React, { useState } from "react";

const booksDb = {
  Finance: [
    {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki, 1997",
      rating: "4.4/5"
    },
    {
      name: "I Will Teach You to Be Rich",
      author: "Ramit Sethi, 2009",
      rating: "4.2/5"
    },
    {
      name: "The Intelligent Investor",
      author: "Benjamin Graham, 1949",
      rating: "4.0/5"
    }
  ],

  ScienceFiction: [
    {
      name: "Dune",
      author: "Frank Herbert, 1965",
      rating: "4.4/5"
    },
    {
      name: "The Left Hand of Darkness ",
      author: "Ursula K. Le Guin, 1969",
      rating: "4.3/5"
    },
    {
      name: "Nineteen Eighty-Four",
      author: "George Orwell, 1949",
      rating: "4.4/5"
    }
  ],

  SelfHelp: [
    {
      name: "Ikigai",
      author: "Francesc Miralles, 2017",
      rating: "4.1/5"
    },
    {
      name: "The Power of your Subconscious Mind",
      author: "Joseph Murphy",
      rating: "4.0/5"
    },
    {
      name: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      rating: "4.2/5"
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Finance");
  function categoryClickHandler(genre) {
    setCategory(genre);
  }
  return (
    <div className="App">
      <h1> Books Recommendation </h1>

      <div>
        {Object.keys(booksDb).map((genre) => (
          <button onClick={() => categoryClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {booksDb[selectedCategory].map((book) => (
            <li key={book.name}>
              <div className="name"> {book.name} </div>
              <div className="author"> {book.author} </div>
              <div className="rating"> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
