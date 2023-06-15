class authenticationError extends Error
{
    constructor(message) {
        super(message);
        this.name='authenticationError';
        this.hello='custom stack';
        this.message='authentication error';
    }

}
class DataBaseError extends Error
{
    constructor(message) {
        super(message);
        this.name='authenticationError';
        this.hello='custom stack';
    }

}
class PermissionError extends Error
{
    constructor(message) {
        super(message);
        this.name='authenticationError';
        this.hello='custom stack';
    }

}


//throw new authenticationError('oopsie');
const a=new authenticationError('oopsie');
a.message