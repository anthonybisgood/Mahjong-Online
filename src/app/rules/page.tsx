import { Header } from "../Components/Header";
export default function Rules() {
  return (
    <>
      <Header />
      <main>
        <h1 className="flex justify-center text-3xl my-10">Rules</h1>
        <section className="mt-8 items-start px-[15%]">
          <ol className="list-decimal">
            <li className="mb-3">
              Setup: Taiwanese Mahjong is typically played by four players. The
              game is played with a set of 144 tiles, which include suits,
              honors, and bonus tiles. The tiles are shuffled face down and
              arranged into a wall in the center of the table.
            </li>
            <li className="mb-3">
              Deal: Each player starts with a hand of 16 tiles, which they
              receive in sets of four during the initial deal. The dealer begins
              by taking 18 tiles, while the other players take 16 tiles each.
              The remaining tiles are left in the wall.
            </li>
            <li className="mb-3">
              Turns: The game progresses in turns, with each player having the
              opportunity to draw a tile from the wall or claim a tile that
              another player has discarded. The objective is to form valid
              combinations of tiles in order to create a winning hand.
            </li>
            <li className="mb-3">
              Combinations: A winning hand in 16-tile Mahjong typically consists
              of four sets (either three identical tiles or a sequence of three
              tiles of the same suit) and a pair of identical tiles. The
              combinations can be made up of tiles from the player&apos;s hand
              or by claiming tiles from other players.
            </li>
            <li className="mb-3">
              Discarding: During a player&apos;s turn, they must discard one
              tile from their hand, placing it face up in the center of the
              table. Other players can then choose to claim the discarded tile
              to complete a combination if it is relevant to their hand.
            </li>
            <li className="mb-3">
              Calling: If a player discards a tile that another player can use
              to complete a combination, they can call &quot;Mahjong&quot; and
              claim the tile. This can be done to create a sequence, set, or
              complete the pair necessary for a winning hand.
            </li>
            <li className="mb-3">
              Scoring: Once a player completes a winning hand, the round ends,
              and scoring takes place. The scoring system in 16-tile Mahjong is
              based on specific combinations, patterns, and bonus tiles
              collected. There are various scoring rules and methods used in MCR
              that players need to familiarize themselves with.
            </li>
            <li className="mb-3">
              Winning: The game continues for a predetermined number of rounds
              or until a player reaches a specific score threshold. The player
              with the highest score at the end of the game is declared the
              winner.
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
