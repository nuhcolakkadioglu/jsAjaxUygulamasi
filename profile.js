class Profile{
    constructor(){
        this.cliendId='';
        this.cliendSecret ='';

    }

    async getProfile(username){
        const profileResponse = await fetch('https://jsonplaceholder.typicode.com/users?username='+username);
        const profile = await profileResponse.json();
        const userTodoResponse = await fetch('https://jsonplaceholder.typicode.com/todos?userId='+profile[0].id);
        const todo = await userTodoResponse.json();

        return {
            profile,
            todo
        }
    }

}