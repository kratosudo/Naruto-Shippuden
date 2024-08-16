import React from "react";

const CharacterList = ({characters, loading}) => {
    if (loading) return 
    <P>Loading characters...</P>;
    console.log(characters);
    

    return(
        <div className="container mx-auto p-4 text-xl">
            <h1 className="font-bold mb-4">Naruto Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {characters.map((character) =>(
                    <div key={character.id} className="rounded-md bg-white">
                        <h2 className="font-semibold text-xl">{character.name}</h2>
                        <img src={character.image} alt={character.name} className="w-full h-auto"/>


                    </div>
                ))}

            </div>

        </div>
    )
}

export default CharacterList;