class NumberLogic {
    constructor(queryString) {
        this.queryString = queryString;
        this.a = [];
      }
      async filter() {
        const ar = this.queryString.url;
        const ans = [];
        for(let x of ar ) {
            let data = await fetch(x, { headers : {"Authentication" : `Authentication` }});
            let d = await data.json();
            ans.push(d.numbers);
          }

        let ans2 = [];
        ans.forEach(x => ans2.push(...x))
        ans2 = Array.from(new Set(ans2));
        ans2.sort((a, b) => a - b);
        console.log(ans2);
        this.a = ans2;
        return this.a;

      }
}


module.exports = NumberLogic;
