import datasouce from './../datasources/rest-api';
import Repository from './Repository';

export default class UserRepository extends Repository {

    constructor(){
        super(datasouce);
    }

    async register(data) {
        return await this.datasource.post('/register',data);
    }

    async login(data) {
        return await this.datasource.post('/login',data);
    }
}