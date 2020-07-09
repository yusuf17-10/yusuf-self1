class User{
    constructor(){
        this.name=null;
        this.answers=[];
        this.index=null;
        this.password=null;
    }
    update(){
        var userIndex="users/user"+this.index;
        database.ref(userIndex).set({
            name:this.name,
            answer:this.answers,
            password:this.password
        });
    }
    updateCount(count){
        database.ref('/').update({
            userCount:count
        });
    }

    getCount(){
        var userCountRef = database.ref('userCount');
        userCountRef.on("value",function(data){
          userCount = data.val();
        })
      }

    

}