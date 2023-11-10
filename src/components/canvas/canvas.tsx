import React, { MouseEventHandler } from 'react';

class Canvas extends React.Component{
    canvas!: CanvasRenderingContext2D;
    plane!: Plane;
    left!: number;
    top!: number;
    private ref: React.RefObject<HTMLCanvasElement> = React.createRef();

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this)
    }

    // componentDidMount(): void {
    //     if (this.ref.current) {
    //         const canvas = this.ref.current.getContext('2d');
    //         if (canvas)
    //             this.canvas = canvas;

    //         const {width, height, left, top} = this.ref.current.getBoundingClientRect()
    //         this.plane = new Plane(width, height, this.canvas);
    //         this.left = left;
    //         this.top = top;
    //     }
    // }

    componentDidMount(): void {
        if (this.ref.current) {
            console.log(123);
            
            const canvas = this.ref.current.getContext('2d');
            console.log(canvas);
            
            if (canvas)
                this.canvas = canvas;

            const {width, height, left, top} = this.ref.current.getBoundingClientRect();
            this.plane = new Plane(width, height, this.canvas);
            this.ref.current.width = width;
            this.ref.current.height = height;
            // console.log(this.plane);
            
            this.left = left;
            this.top = top;
        }
    }

    handleClick(event: React.MouseEvent<HTMLCanvasElement>) {
        console.log(this.plane);
        
        const {x, y} = this.plane.getCursorPosition(event.clientX - this.left, event.clientY - this.top);
        this.plane.addObject(x, y);
    }

    handleScroll(event: React.WheelEvent<HTMLCanvasElement>) {
        if (event.altKey) {
            console.log('asd');
            
            event.deltaY > 0 && this.plane.zoomOut();
            event.deltaY < 0 && this.plane.zoomIn();
        }
    }

    handleMouseDown(event: React.WheelEvent<HTMLCanvasElement>) {
    }

    render(): React.ReactNode {
        return <canvas id="constructor" 
        ref={this.ref} 
        onClick={this.handleClick}
        onWheel={this.handleScroll}
        onMouseDown={this.handleMouseDown} />
    }
}

export default Canvas;

class Plane {
    width: number
    height: number
    viewPos: Coordinates
    view: number
    objects: Rectangle[] = []
    canvas: CanvasRenderingContext2D
    constructor(width: number, height: number, canvas: CanvasRenderingContext2D) {
        this.width = width
        this.height = height
        this.viewPos = new Coordinates(0, 0)
        this.view = 1;
        this.canvas = canvas;
    }


    renderObject(object: Rectangle) {
        const x      = object.pos.x * this.view,
              y      = object.pos.y * this.view,
              width  = object.width * this.view,
              height = object.height * this.view,
              radius = 5 * this.view;

        this.canvas.beginPath();
        this.canvas.roundRect(x, y, width, height, radius);
        // console.log(x, y, width, height, radius);
        this.canvas.fill();
        this.canvas.closePath();
    }

    renderObjects() {
        this.objects.map(object => {
            this.renderObject(object);
        });
    }

    updatePos(x: number, y: number) {
        const offsetX = x - this.viewPos.x;
        const offsetY = y - this.viewPos.y;

        this.viewPos.x = x;
        this.viewPos.y = y;

        this.objects.map(object => {
            object.pos.x += offsetX;
            object.pos.y += offsetY;
        })

        this.render();
    }

    getCursorPosition(x: number, y: number) {
        x /= this.view;
        y /= this.view;
        x += this.viewPos.x;
        y += this.viewPos.y;

        return {x, y}
    }

    addObject(x:number, y:number) {
        this.objects.push(new Rectangle(100, 100, new Coordinates(x, y), '#000'))
        this.render()
    }

    clear() {
        this.canvas.clearRect(0, 0, this.width, this.height);
    }

    zoomIn() {
        console.log('+');
        
        this.view += 0.1;
        this.render()
    }

    zoomOut() {
        console.log('-');
        this.view -= 0.1;
        this.render()
    }

    render() {
        console.log(this);
        
        this.clear();
        this.renderObjects()
    }


}

class Rectangle {
    width: number
    height: number
    pos: Coordinates
    color: string
    constructor(width: number, height: number, pos: Coordinates, color: string) {
        this.width = width
        this.height = height
        this.pos = pos
        this.color = color
    }
}

// class Direction {
//     pos: Coordinates
//     turnPoints: number
// }

class Coordinates {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    setX(x: number) {
        this.x = x;
    }

    setY(y: number) {
        this.y = y;
    }
}