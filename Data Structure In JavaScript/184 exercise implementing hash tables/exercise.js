class Hashtables{
    constructor(size) {
        this.data=new Array(size);
    }

    _hash(key)
    {
        let hash=0;
        for(let i=0;i<key.length;i++)
        {
            hash=(hash+key.charCodeAt(i)*i)%this.data.length;
        }
        return hash;
    }

    set(property,value)
    {
        let key=this._hash(property);
        if (!this.data[key])
        {
            this.data[key]=[];

        }
        this.data[key].push([property,value]);
        //console.log(this.data[key][0][0]);
        return this.data;
    }
    get(property)
    {
        let key=this._hash(property);
        const currentBucket=this.data[key];
        if(currentBucket)
        {
            for(let i=0;i<this.data[key].length;i++)
            {
                if(this.data[key][i][0]===property)
                {
                    return this.data[key][i][1];
                }
            }
        }

    }

    keys()
    {
        let keys=[];
        for(let i=0;i<this.data.length;i++)
        {
            if (this.data[i])
            {

                for (let j=0;j<this.data[i].length;j++)
                {
                    if (this.data[i][j])
                    {
                        keys.push(this.data[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }
}
const myHashTable=new Hashtables(50);
myHashTable.set('grapes',1000);
myHashTable.set('apple',500);
myHashTable.set('mango',5000);
myHashTable.set('orange',40);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());



