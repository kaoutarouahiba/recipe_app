import React from 'react';

const AlphabetIndex = ({ alphaIndex }) => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

  return (
    <>
      <div className="indexContainer">
        {alphabet.map(letter => (
          <div className="letterBox" key={letter} onClick={() => alphaIndex(letter)}>
            <h3>{letter}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlphabetIndex;