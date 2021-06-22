import Box1 from "./box1";
export default function Firstbox(){
    return(
        <div className="firstbox">
        <Box1 title="Total Application" dataValue="7965"/>
        <Box1 className="shortlist" title="Shortlisted candidate" dataValue="4658"/>
        <Box1 title="Total Application" dataValue="1501"/>
        </div>
    )
}