import React, { useState } from "react";

const initialBoard = () => Array(9).fill(null);

function UseTicTacToe() {
    const [board, setBoard] = useState(initialBoard());
    const[isXNext, setIsXNext] = useState(true);

    const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];


    const calculateWinner = (currentBoard) => {
        for(let i=0; i< WINNING_PATTERNS.length; i++){
            const [a,b,c] = WINNING_PATTERNS[i];
            if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[b] === currentBoard[c]){
                return currentBoard[a];
            }
        }
    };

    const handleClick = (index) => {
        
        //check winner
        const winner = calculateWinner(board)
        if(winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O"
        setBoard(newBoard);
        setIsXNext(!isXNext)
    };

    const getStatusMessage = () => {
        const winner = calculateWinner(board)
        if(winner) return `Player ${winner} wins`;
        if(!board.includes(null)) return `It's a draw !`;
        return `Player ${isXNext ? 'X' : 'O'} turn`;
    };

    const resetGame = () => {
        setBoard(initialBoard());
        setIsXNext(true)
    };


    return {board,handleClick,calculateWinner,getStatusMessage,resetGame}
    }

export default UseTicTacToe;
