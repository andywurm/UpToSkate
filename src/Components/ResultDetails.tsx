import { AccordionDetails, Typography } from "@mui/material";

interface IPropsResultDetails {
    category: object[]
}
const ResultDetails = (props: IPropsResultDetails) => {
    return (
        <AccordionDetails>
            <Typography>
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Nation</th>
                        <th>Points</th>
                        <th>SP</th>
                        <th>FS</th>
                    </tr>
                    {props.category.map((person: any) => {
                        return (
                            <tr>
                                <td>{person.rank}</td>
                                <td className="sk8Name"> &nbsp;&nbsp; {person.name}</td>
                                <td>{person.nation}</td>
                                <td>{person.Points}</td>
                                <td>{person.sp}</td>
                                <td>{person.fs}</td>
                            </tr>
                        )
                    })}
                </table>
            </Typography>
        </AccordionDetails>
    )
}
export default ResultDetails;