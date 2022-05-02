import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import * as gameService from "../../services/gameService";

const GameCatalog = ({
    navigationChangeHandler
}) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        gameService.getAllGames()
            .then(gamesRes => {
                setGames(gamesRes);
                setLoading(false);
            });
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {loading
                ?
                <div className="allGames">
                    <h2>Loading...</h2>
                </div>

                : games.length > 0
                    ? games.map(game => <GameCard key={game._id} game={game} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No games yet</h3>}


        </section>
    );
};

export default GameCatalog;