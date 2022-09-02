import skater from '../Images/skater.png'

const Navigation = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            border: 'solid red 1px'
        }}>
            <div className="Logo" style={{
                verticalAlign: "middle",
                position: "relative",
                top: "10px",
                marginLeft: "20px"
            }}>
                <img src={skater} alt="skate" style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "15px",
                    padding: "10px"
                }} />
            </div>

            <h1 className="websiteName" style={{
                width: "50%",
                fontWeight: "bold"
            }}>
                <div style={{ float: "left" }}>UpToSkate</div>
            </h1>

            <div className="Links" style={{
                width: "50%",
                height: "100%",
                fontSize: "1.1em",
                display: "inline-block",
            }}>
                <div style={{ textAlign: "right", marginRight: '20px' }}>
                    <div style={{ display: "inline-block", padding: "4%" }}>Skaters</div>
                    <div style={{ display: "inline-block", padding: "4%" }}>Events</div>
                    <div style={{ display: "inline-block", padding: "4%" }}>Results</div>
                    <div style={{ display: "inline-block", padding: "4%" }}>Media</div>
                </div>
            </div>

        </div>
    )
}
export default Navigation;