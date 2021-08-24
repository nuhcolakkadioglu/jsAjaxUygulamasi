 const userName = document.querySelector('#userName');
 const profile = new Profile();
 const ui = new UI();


 userName.addEventListener('keyup',(event)=>{

   let text =  event.target.value;
    if(text!==''){
       profile.getProfile(text)
       .then(res=>{
           if(res.profile.length===0){
               ui.showAlert(text);
           }else{
            ui.showProfile(res.profile[0]);
            ui.clear();
           }
       });
    }

 });