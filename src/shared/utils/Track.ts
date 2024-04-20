


export class Track {
    private id: number = 0;
    private startX: number = 0; 
    private startY: number = 0; 
    private endX: number = 0; 
    private endY: number = 0;

    constructor(startX: number, startY: number, endX: number, endY: number) {
        this.id = Math.floor(Math.random() * 10000);
        this.startX = startX; 
        this.startY = startY; 
        this.endX = endX; 
        this.endY = endY;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }
}
