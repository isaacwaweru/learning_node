// http://localhost:3000/api/v1/todos?page=1&limit=5
// http://localhost:3000/api/v1/todos?sort=-duration
// http://localhost:3000/api/v1/todos?sort=duration
// http://localhost:3000/api/v1/todos?fields=name
// http://localhost:3000/api/v1/todos?slug=get-bananas&page=1&limit=5
// http://localhost:3000/api/v1/todos?duration[lt]=20
// http://localhost:3000/api/v1/todos?duration[lte]=10
// http://localhost:3000/api/v1/todos?duration[gte]=10
// http://localhost:3000/api/v1/todos?duration[gt]=10
// Sort and liit fields in apiError utility

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // 1B) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    console.log(limit, skip);

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
module.exports = APIFeatures;
