import HelloRepository from "../repositories/Hello.repository.js";

export default class HelloService {
    _repository: HelloRepository;
    constructor(repository: HelloRepository = new HelloRepository()) {
        this._repository = repository;
    }

    private async create_hello_string(name: string) {
        return `Hello ${name}!`
    }

    async create_hello_world_string() {
        return this.create_hello_string("World");
    }

    async create_hello_name_string() {
        //
    }
}