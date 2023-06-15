class myArrays
{
    constructor()
    {
      this.length=0;
      this.data={};
    }

    get()
    {
        return this.data;
    }
    gettingSingleItem(index)
    {
        return this.data[index];
    }

    push(data)
    {
        this.data[this.length]=data;
        this.length++;
        return this.length;
    }

    pop()
    {
        let lastItem= this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index)
    {
        const lastItem=this.data[index];

        this.shiftLeft(index);
        this.length--;
        return lastItem;
    }
    shiftLeft(index)
    {
        for (let i=index;i<this.length-1;i++)
        {
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];

    }

    
}

const myArray=new myArrays();
myArray.push('hi');
myArray.push('how');
myArray.push('are');
myArray.push('you');
myArray.push('!');
console.log('getting whole array after pushing', myArray.get());
myArray.pop();
console.log('after popping',myArray.get());
myArray.delete(2);
console.log('getting single item',myArray.gettingSingleItem(2));
console.log('after deleting',myArray.get());
