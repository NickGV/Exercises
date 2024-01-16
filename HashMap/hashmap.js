class HashMap {
  constructor() {
    this.buckets = new Array(16);
  }

  hash(key) {
    let hash = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hash = primeNumber * hash + key.charCodeAt(i);
    }
    return hash % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.buckets[index];

    if (!bucket) {
      bucket = [];
      this.buckets[index] = bucket;
    }

    // for (let i = 0; i < bucket && i < bucket.length; i++) {
    //   if (bucket[i][0] === key) {
    //     bucket[i][1] = value;
    //     return;
    //   }
    // }
    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return !!bucket;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) {
      return;
    }

    for (let i = 0; i < bucket.lenght; i++) {
      if (bucket[i][0] == key) {
        bucket.slice(i, 1);
        return;
      }
    }

    return null;
  }

  length() {
    let keys = 0;
    for (let i = 0; i <= this.buckets.length; i++) {
      const bucket = this.buckets[i];
      if (bucket) {
        keys += bucket.length;
      }
    }
    return keys;
  }

  clear() {
    this.buckets = new Array(16);
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          keysArray.push(bucket[j][0]);
        }
      }
    }
    return keysArray;
  }

  values() {
    let valuesArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          valuesArray.push(bucket[j][1]);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    let keysArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          keysArray.push([bucket[j][0], bucket[j][1]]);
        }
      }
    }
    return keysArray;
  }
}
// Create a HashMap instance
const myHashMap = new HashMap();

// Test case 1: Set and Get
myHashMap.set("key1", "value1");
myHashMap.set("key2", "value2");

console.log(myHashMap.get("key1")); // Expected output: "value1"
console.log(myHashMap.get("key2")); // Expected output: "value2"
console.log(myHashMap.get("key3")); // Expected output: null

// Test case 2: Length
console.log(myHashMap.length()); // Expected output: 2

// Test case 3: Keys
console.log(myHashMap.keys()); // Expected output: ["key1", "key2"]

// Test case 4: Values
console.log(myHashMap.values()); // Expected output: ["value1", "value2"]

// Test case 5: Entries
console.log(myHashMap.entries()); // Expected output: [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]

// Test case 6: Has
console.log(myHashMap.has("key1")); // Expected output: true
console.log(myHashMap.has("key3")); // Expected output: false

// Test case 7: Remove
myHashMap.remove("key1");
console.log(myHashMap.get("key1")); // Expected output: null
console.log(myHashMap.length()); // Expected output: 1

// Test case 8: Clear
myHashMap.clear();
console.log(myHashMap.length()); // Expected output: 0
console.log(myHashMap.keys()); // Expected output: []

// Additional Test case 9: Handling collisions
myHashMap.set("abc", "value1");
myHashMap.set("cba", "value2");
console.log(myHashMap.get("abc")); // Expected output: "value1"
console.log(myHashMap.get("cba")); // Expected output: "value2"
