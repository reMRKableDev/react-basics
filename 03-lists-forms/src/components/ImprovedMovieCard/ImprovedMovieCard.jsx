import React from "react";


const ImprovedMovieCard = (props) => {
  // Conditional rendering for 
  const showHasOscarsTernary = () =>
    props.hasOscars ? (
      <p>Got the Oscar Award! </p>
    ) : (
      <p>Great movie but no Oscars! </p>
    );

  const showOscarsImplicit = () =>
    props.hasOscars && <p>Got the Oscar Award!</p>;

  const notShowOscarsImplicit = () =>
    !props.hasOscars && <p>Great movie but no Oscars!</p>;

  const complexConditional = () => {
    let awardText;

    if (props.hasOscars) {
      if (props.IMDbRating >= 9) {
        awardText = (
          <p> WOW! Oscar Award and IMDb rating {props.IMDbRating}! </p>
        );
      } else if (props.IMDbRating >= 7) {
        awardText = (
          <p>
            Got the Oscar Award and has IMDb rating {props.IMDbRating}, not bad
            at all!
          </p>
        );
      }
    } else {
      awardText = (
        <p> Great movie but no Oscars! Has IMDb rating {props.IMDbRating}. </p>
      );
    }

    return awardText;
  };

  return (
    <div className="movies-card-improved">
      <h2>{props.title}</h2>
      <p>{props.director}</p>

      <p>
        <b>Ternary</b>
      </p>
      {showHasOscarsTernary()}

      <p>
        <b>&&</b>
      </p>
      {showOscarsImplicit()}
      {notShowOscarsImplicit()}

      <p>
        <b>Complex Conditional</b>
      </p>
      {complexConditional()}

      <button onClick={() => props.deleteOnClick(props.id)}>Delete</button>
    </div>
  );
};

export default ImprovedMovieCard;
