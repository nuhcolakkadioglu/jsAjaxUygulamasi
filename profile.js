class Profile{
    constructor(){
        this.cliendId='';
        this.cliendSecret ='';

    }

    async getProfile(username){
        const profileResponse = await fetch('https://jsonplaceholder.typicode.com/users?username='+username);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }

}