
interface DividerProps{
    orientation: string;
}
export default function Divider({orientation}: DividerProps) {

    return(
        <>
            {orientation.toLocaleLowerCase() === "vertical" 
            ? <div className={`w-0.5 h-20 bg-[#5ae9c4] mr-10`}/> 
            : <div className={`w-20 h-0.5 bg-[#5ae9c4] mr-10`}/>}
        </>
            
    );
}