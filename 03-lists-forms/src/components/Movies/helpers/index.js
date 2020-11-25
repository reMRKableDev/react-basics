import React from "react";

export const showHasOscarsTernary = (incomingProps) =>
  incomingProps.hasOscars ? (
    <p>Got the Oscar Award! </p>
  ) : (
    <p>Great movie but no Oscars! </p>
  );

export const showOscarsImplicit = (incomingProps) => incomingProps.hasOscars && <p>Got the Oscar Award!</p>;

export const notShowOscarsImplicit = (incomingProps) =>
  !incomingProps.hasOscars && <p>Great movie but no Oscars!</p>;

export const complexConditional = (incomingProps) => {
  let awardText;

  if (incomingProps.hasOscars) {
    if (incomingProps.IMDbRating >= 9) {
      awardText = <p> WOW! Oscar Award and IMDb rating {incomingProps.IMDbRating}! </p>;
    } else if (incomingProps.IMDbRating >= 7) {
      awardText = (
        <p>
          Got the Oscar Award and has IMDb rating {incomingProps.IMDbRating}, not bad at
          all!
        </p>
      );
    }
  } else {
    awardText = (
      <p> Great movie but no Oscars! Has IMDb rating {incomingProps.IMDbRating}. </p>
    );
  }

  return awardText;
};
