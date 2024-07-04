class Circle {
   
    radius: number;
    color: string;

    
    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}


const circle1 = new Circle();
console.log(circle1.toString()); // Circle[radius=1,color=red]

const circle2 = new Circle(2.0);
console.log(circle2.toString()); // Circle[radius=2,color=red]

const circle3 = new Circle(2.0, "blue");
console.log(circle3.toString()); // Circle[radius=2,color=blue]
