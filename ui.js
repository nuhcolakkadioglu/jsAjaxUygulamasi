class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `

        <div class="card card-body">
        
        <div class="row">
        <div class="col-md-3">
            <img src="https://via.placeholder.com/150" class="img-thumbnail" />
        </div>

        <div class="col-md-9">
        
        <h4>İletişim Bilgileri</h4>
        <ul class="list-group">
            <li class="list-group-item">Ad:${profile.name}</li>
            <li class="list-group-item">Kullanıcı Adı:${profile.username}</li>
            <li class="list-group-item">Email: ${profile.email}</li>
            <li class="list-group-item">${profile.address.street}</li>
            <li class="list-group-item">${profile.address.suite}</li>
            <li class="list-group-item">${profile.address.city}</li>
            <li class="list-group-item">${profile.address.zipcode}</li>
            <li class="list-group-item">${profile.phone}</li>
            <li class="list-group-item">${profile.website}</li>
            <li class="list-group-item">${profile.company.name}</li>
            <li class="list-group-item">${profile.company.catchPhrase}</li>
            <li class="list-group-item">${profile.company.bs}</li>
        </ul>
        <h4>Todo list</h4>
          
        <ul id="todo" class="list-group">
        </ul>

        </div>

        </div>

        </div>
        
        `;
    }


    showAlert(text){
        this.alert.innerHTML = `${text} ile eşleşen kayıt bulunamadı`;
    }

    clear(){
        this.alert.innerHTML = '';
    }


    showTodo(todo){
        
        let html = "";

        todo.forEach(m=>{

            if(m.completed){
                html+=`<li class="list-group-item bg-success">${m.title}</li>`

            }else{
                html+=`<li class="list-group-item bg-secondary">${m.title}</li>`

            }

        });

        this.profileContainer.querySelector('#todo').innerHTML=html;


    }

}