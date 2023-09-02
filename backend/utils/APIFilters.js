
// ****************

class APIFilters {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  

    search() {
      const keyword = this.queryStr.keyword
        ? {
            name: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          }
        : {};
          // console.log(keyword);
      this.query = this.query.find({ ...keyword });
      return this;
    }



    // filter(){
    //           const queryCopy = {...this.queryStr}

    //           const removeFields = ["keyword","page"]
    //           removeFields.forEach((el)=> delete queryCopy[el])

    //           console.log(queryCopy);

    //           this.query = this.query.find(queryCopy)
    //           return this
    //       }
     filter() {
      const queryCopy = { ...this.queryStr };
  
      const removeFields = ["keyword", "page"];
      removeFields.forEach((el) => delete queryCopy[el]);
  
      let output = {};
      let prop = "";
  
      for (let key in queryCopy) {

        if (!key.match(/\b(gt|gte|lt|lte)/)) {
          output[key] = queryCopy[key];
        } 
        else{
          prop = key.split("[")[0];
  
          let operator = key.match(/\[(.*)\]/)[1];
  
          if (!output[prop]) {
            output[prop] = {};
          }
  
          output[prop][`$${operator}`] = queryCopy[key];
        }
      }
      // { price: { $gte: 100, $lte: 1000 } }
      // console.log(output);
      this.query = this.query.find(output);
      return this;
    }


    
    pagination(resPerPage){
      const currentPage = Number(this.queryStr.page) || 1 
      // const currentPage = this.queryStr.page || 1 
      const skip = resPerPage * (currentPage - 1)
      // const skip = (currentPage - 1) * resPerPage

      this.query = this.query.limit(resPerPage).skip(skip)
      // this.query = this.query.skip(skip).limit(resPerPage)
      return this


    }
   

  }
  
  export default APIFilters;
  
