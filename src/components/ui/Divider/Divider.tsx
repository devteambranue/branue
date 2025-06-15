"use client";

interface DividerProps{
    width: number;
    height: number;
    color: string;
}
export default function Divider({width, height, color}: DividerProps) {

    return(
            <div className={`bg-[${color}] mr-10`} style={{
                width: `${width}px`,
                height: `${height}px`
            }}/>
    );
}