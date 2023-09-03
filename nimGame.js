// In the Nim game, where you can remove 1 to 3 stones on your turn, you need to consider the number of stones left in the pile after your move. Let's look at some possibilities:

// If there are 1, 2, or 3 stones left, you can take all the remaining stones on your turn and win the game.

// If there are 4 stones left, no matter how many you take (1, 2, or 3), your opponent can always respond optimally and ensure that they win the game on their next turn.

// So, 4 is a crucial point because, when there are 4 stones left, the player whose turn it is to make a move cannot guarantee a win, no matter how they play. After that point, the game's outcome is determined by the player's skill in making optimal moves.

// If the initial number of stones in the heap is a multiple of 4, then your opponent can always force the game into a situation where there are 4 stones left, putting you at a disadvantage. That's why we check if n (the initial number of stones) is a multiple of 4 to determine whether you can win when both players play optimally.

// I hope this clarifies why the number 4 is significant in this context.

var canWinNim = function(n) {
 return n%4!=0
};