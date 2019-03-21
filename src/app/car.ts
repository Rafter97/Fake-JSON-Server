export class Car implements ICar {
    make: string;
    model: string;
    year: string;
    imageURL: string;
    quality: ICarQuality[];
    myReview: string;
    
    constructor(make:string,model:string,year:string,imageURl:string){
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURl;
    }
}