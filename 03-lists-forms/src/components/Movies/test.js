/* const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [hasOscars, setHasOscars] = useState(false);
  const [IMDbRating, setIMDbRating] = useState(""); */

/*   const titleInputChangeHandler = (event) => setTitle(event.target.value);
  const directorInputChangeHandler = (event) => setDirector(event.target.value);
  const hasOscarsInputChangeHandler = (event) => setHasOscars(event.target.checked);
  const IMDbRatingInputChangeHandler = (event) => setIMDbRating(event.target.value); */

/* const newMovie = {
      title,
      director,
      hasOscars,
      IMDbRating,
    };

    props.addMovie(newMovie);

    setTitle("");
    setDirector("");
    setHasOscars(false);
    setIMDbRating(""); */

const inputChangeHandler = (event) => {
  let { name, value, type, checked } = event.target;

  // special case for checkboxes (where boolean value is hold in .checked property)
  if (type === "checkbox") {
    value = checked;
  }

  setAllValues({ ...allValues, [name]: value });
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  props.addMovie(allValues);
  setAllValues(initialState);
};
