class Game{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      start(){
        if(gameState === 0){
          user = new User();
          user.getCount();
          form = new Form();
          form.display();
          timetable=new TimeTable;
          timetable.hide();
        }
      }
}