export class Post {
    constructor(public title: string,
                public content: string,
                public createdAt = new Date().getTime(),
                public loveIts = 0) { }
  }
