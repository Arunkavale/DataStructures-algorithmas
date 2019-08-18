class HashTable{
    constructor(size){
        this.data= new Array(size);
    }

    _hash(key){
        let hash=0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash+key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key , value){
        let item =[];
            item[0] = key,
            item[1] = value;
        this.data.push(item);
        return item;
    }

    get(key){
        for (let i = 0; i < this.data.length; i++) {
           if(this.data[i][0]=== key){
               return this.data[i][1];
           }
        }
    }
}

let myHash = new HashTable(20);

myHash.set('grourge',500);

console.log(myHash.get('grourge'));
