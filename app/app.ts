function startGame() {
    // starting new game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
  
    postScore(80, playerName);
  };
  
  function logPlayer(name: string = 'Player'): void {
        console.log(`New game starting for ${name}.`);
  };
  
  function getInputValue(elementID: string): string | undefined {
    // document.getElementById(elementID) as HTMLInputElement
    // <HTMLInputElement>document.getElementById(elementID)
    const inputElement: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;
    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
  };
  
  function postScore(score: number, playerName: string = 'Player'): void {
    const scoreElement: HTMLElement | null = document.getElementById('postedscores');
    scoreElement!.innerText = `${playerName}: ${score}`;
  };
  
  
  document.getElementById('startGame')!.addEventListener('click', startGame);

