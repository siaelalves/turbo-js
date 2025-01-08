async function global_onkeydown(e){
 switch(e.key){
  case "ArrowUp":
   player.position.y -= player.speed * grid.vertical;
   document.querySelector("#player").style.top = player.position.y + "px";
   console.log("Moved up " + grid.vertical);
   break;
  case "ArrowDown":
   player.position.y += player.speed * grid.vertical;
   document.querySelector("#player").style.top = player.position.y + "px";
   console.log("Moved down " + grid.vertical);
   break;
  case "ArrowLeft":
   player.position.x -= player.speed * grid.horizontal;
   document.querySelector("#player").style.left = player.position.x + "px";
   console.log("Moved left " + grid.horizontal);
   break;
  case "ArrowRight":
   player.position.x += player.speed * grid.horizontal;
   document.querySelector("#player").style.left = player.position.x + "px";
   console.log("Moved right " + grid.horizontal);
   break;
 }
}